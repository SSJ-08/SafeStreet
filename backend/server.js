

// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
// const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();
const PORT = 8000;

 // Middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

 // User Schema
 const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  officialEmail: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: { type: String },
  
  otpExpiresAt: { type: Date }
});
const User = mongoose.model("User", UserSchema);
// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});


// Email Log Schema
const EmailLog = mongoose.model("EmailLog", {
  to: String,
  subject: String,
  text: String,
  html: String,
  sentAt: {
    type: Date,
    default: Date.now,
  },
});


// Report Schema
const Report = mongoose.model("Report", {
  imageUrl: String,
  location: String,
  summary: String,
  severity: String,
  date: Date,
  status: String,
  seen: { type: Boolean, default: false },
  receivedAt: {
    type: Date,
    default: Date.now,
  },
});




// // Helper: send email + log
const sendEmail = async (to, subject, text, htmlContent) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html: htmlContent
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
 
};

// Routes

// User Registration
app.post("/api/register", async (req, res) => {
  const { name, email, officialEmail, password } = req.body;

  try {
    // Validate official email domain
    if (!officialEmail.endsWith("@safestreet.org")) {
      return res.status(400).json({ message: "Only authority domains are allowed" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ officialEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Save the new user
    const newUser = new User({ name, email, officialEmail, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



 // User Login
 app.post("/api/login", async (req, res) => {
  const { officialEmail, password } = req.body;

  try {
    const user = await User.findOne({ officialEmail });

    
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    
    if (password!=user.password) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry

    // Save OTP and expiry to the user
    user.otp = otp;
    user.otpExpiresAt = otpExpiresAt;
    await user.save();

    // Send OTP to personal email
    const subject = "Your SafeStreet Verification Code";
    const text = `Your verification code is: ${otp}. It is valid for 1 minute.`;
    await sendEmail(user.email, subject, text);

    res.status(200).json({ message: "Login successful, OTP sent to personal email" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



// Fetch User Info
app.post("/api/user", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ officialEmail:email });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ name: user.name });
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Send Email + Save Log
app.post("/api/send-email", async (req, res) => {
  const { to, subject, text, html } = req.body;

  try {
    await sendEmail(to, subject, text, html);
    res.status(200).json({ message: "Email sent and logged successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});


app.get("/api/emails", async (req, res) => {
  try {
    const emails = await EmailLog.find().sort({ sentAt: -1 });
    res.status(200).json(emails);
  } catch (error) {
    console.error("Error fetching emails:", error);
    res.status(500).json({ message: "Failed to fetch emails" });
  }
});



// Get total email count
app.get("/api/email-count", async (req, res) => {
  try {
    const count = await EmailLog.countDocuments();
    res.status(200).json({ totalEmailsSent: count });
  } catch (error) {
    console.error("Error counting emails:", error);
    res.status(500).json({ message: "Failed to count emails" });
  }
});
app.post("/api/send-otp", async (req, res) => {
  const { officialEmail } = req.body;

  try {
    const user = await User.findOne({ officialEmail });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    user.otp = otp;
    user.otpExpiresAt = otpExpiresAt;
    await user.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: officialEmail,
      subject: "Your SafeStreet OTP",
      text: `Your new OTP is: ${otp}`,
    });

    res.json({ message: "New OTP sent" });
  } catch (error) {
    console.error("Resend OTP error:", error);
    res.status(500).json({ message: "Failed to resend OTP" });
  }
});


// OTP Verification
app.post("/api/verify-otp", async (req, res) => {
  const { officialEmail, otp } = req.body;

  try {
    const user = await User.findOne({ officialEmail });

    // Check if user exists
    if (!user || !user.otp || !user.otpExpiresAt) {
      return res.status(400).json({ message: "OTP not generated or expired" });
    }

    // Validate OTP and expiry
    if (user.otp !== otp || user.otpExpiresAt < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Clear OTP after successful verification
    user.otp = undefined;
    user.otpExpiresAt = undefined;
    await user.save();

    res.status(200).json({ message: "OTP verified successfully!" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// app.post("/api/receive-report", async (req, res) => {
//   try {
//     const { imageUrl, location, summary, date, status } = req.body;

//     if (!imageUrl || !location || !summary || !date) {
//       return res.status(400).json({ message: "Missing required report fields" });
//     }
//         const newReport = new Report({
//       imageUrl,
//       location,
//       summary,
//       date,
//       status: status || "Pending",
//     });

//     await newReport.save();
//     const adminEmail = "safestreet3@gmail.com"; 
//     const subject = "📥 New Report Received via SafeStreet App";
//     const html = `
//       <h2>New Report Submitted</h2>
//       <p><strong>Location:</strong> ${location}</p>
//       <p><strong>Summary:</strong> ${summary}</p>
//       <p><strong>Date:</strong> ${new Date(date).toLocaleString()}</p>
//       <p><strong>Status:</strong> ${status || "Pending"}</p>
//       <p><strong>Image:</strong><br/><img src="${imageUrl}" style="max-width:100%; height:auto;" /></p>
//     `;

//     await sendEmail(adminEmail, subject, `New report received at ${location}`, html);

//     res.status(200).json({ message: "Report received and email sent" });
//   } catch (error) {
//     console.error("Error receiving report:", error);
//     res.status(500).json({ message: "Failed to receive report" });
//   }
// });


function extractSeverity(summary = "") {
  const text = summary.toLowerCase();
  if (text.includes("critical") || text.includes("severe")) return "High";
  if (text.includes("moderate") || text.includes("medium")) return "Medium";
  if (text.includes("minor") || text.includes("low")) return "Low";
  return "Medium"; // default
}

app.post("/api/receive-report", async (req, res) => {
  try {
    const { imageUrl, location, summary, date, status } = req.body;

    if (!imageUrl || !location || !summary || !date) {
      return res.status(400).json({ message: "Missing required report fields" });
    }

    
    const severity = extractSeverity(summary);
    const newReport = new Report({
      imageUrl,
      location,
      summary,
      severity,
      date,
      status: status || "Pending",
      
    });


    await newReport.save();
    res.status(200).json({ message: "Report received successfully" });
  } catch (error) {
    console.error("Error receiving report:", error);
    res.status(500).json({ message: "Failed to receive report" });
  }
});

// Get all received reports
app.get("/api/reports", async (req, res) => {
  try {
    const reports = await Report.find().sort({ receivedAt: -1 });
    res.status(200).json(reports);
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ message: "Failed to fetch reports" });
  }
});

// Password Update Route
app.post("/api/update-password", async (req, res) => {
  const { email, otp, newPassword, confirmPassword } = req.body;

  try {
    // Find the user by personal email
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if the OTP is valid
    if (!user.otp || user.otp !== otp || user.otpExpiresAt < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Check if the passwords match
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Update the password and clear OTP
    // user.password = newPassword;
    // user.otp = undefined;
    // user.otpExpiresAt = undefined;
    // await user.save();

    // server.js (correct approach)
    await User.findOneAndUpdate(
      { email },
      {
        password: newPassword,
        otp: undefined,
        otpExpiresAt: undefined,
      },
      { new: true }
    );


    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



// Send OTP for Password Reset
app.post("/api/send-reset-otp", async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user by personal email
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Generate OTP and expiry
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry

    // Save OTP to the user
    // user.otp = otp;
    // user.otpExpiresAt = otpExpiresAt;
    // await user.save();

    // Corrected code
    await User.findOneAndUpdate(
      { email },
      { otp, otpExpiresAt },
      { new: true }
    );


    // Send OTP to the personal email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "SafeStreet Password Reset OTP",
      text: `Your OTP for password reset is: ${otp}. It is valid for 10 minutes.`,
    });

    res.status(200).json({ message: "OTP sent to your personal email" });
  } catch (error) {
    console.error("Error sending reset OTP:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


app.post("/api/update-report-status", async (req, res) => {
  const { reportId, status, seen } = req.body;

  try {
    if (!reportId || !status) {
      return res.status(400).json({ message: "Missing reportId or status" });
    }

    // Prepare the fields to update
    const updateFields = { status };

    // Only set 'seen' if it is explicitly passed in the request body
    if (typeof seen !== "undefined") {
      updateFields.seen = seen;
    }

    const updated = await Report.findByIdAndUpdate(
      reportId,
      updateFields,
      { new: true }  // Returns the updated document
    );

    if (!updated) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.status(200).json({ message: "Status updated", report: updated });
  } catch (error) {
    console.error("Error updating report status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



// Server Start
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});