// // const express = require("express");
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// import dotenv from "dotenv";
// dotenv.config();

// // require("dotenv").config();
// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect("mongodb+srv://sravani_j:MongoDB%40123@cluster0.wetgiw4.mongodb.net/safestreet?retryWrites=true&w=majority&appName=Cluster0", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log("Connected to MongoDB");
// }).catch((err) => {
//   console.error("MongoDB connection error:", err);
// });

// // Simple User schema
// const User = mongoose.model("User", {
//   name: String,
//   email: String,
//   password: String,
// });

// // Register route
// app.post("/api/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return res.status(400).json({ message: "User already exists" });
//   }

//   const newUser = new User({ name, email, password });
//   await newUser.save();

//   res.status(201).json({ message: "User registered successfully" });
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
// app.post("/api/login", async (req, res) => {
//     const { email, password } = req.body;
  
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }
  
//     if (user.password !== password) {
//       return res.status(400).json({ message: "Incorrect password" });
//     }
  
//     res.status(200).json({ message: "Login successful" });
//   });
//   // Get user info by email
// app.post("/api/user", async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ name: user.name });
//   } catch (err) {
//     console.error("Error fetching user:", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });



// // const nodemailer = require('nodemailer');
// import nodemailer from "nodemailer";

// // Create a transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',  
//   auth: {
//     user: process.env.EMAIL_USER,  
//     pass: process.env.EMAIL_PASS    
//   }
// });

// // Email sending function
// const sendEmail = (to, subject, text, htmlContent) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: "sravanijanak@gmail.com",
//     subject: subject,
//     text: text,  // plain text body
//     html: htmlContent  // HTML body (optional)
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error occurred:', error);
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   });
// };



// app.post("/send-email", async (req, res) => {
//   const { to, subject, text, html } = req.body;
//   console.log("Text Body:", text);  // Log the plain text part
//   console.log("HTML Body:", html); 
//   try {
//     sendEmail(to, subject, text, html);
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Failed to send email" });
//   }
// });


// let otpStore = {};  // Add this at the top (after your imports)

// app.post("/api/send-otp", async (req, res) => {
//   const { email } = req.body;
  
//   const otp = Math.floor(100000 + Math.random() * 900000); // Random 6-digit code

//   otpStore[email] = otp; // Save temporarily in memory
  
//   const subject = "Your SafeStreet Verification Code";
//   const text = `Your verification code is: ${otp}`;

//   sendEmail(email, subject, text);  // Using your existing sendEmail function

//   res.status(200).json({ message: "OTP sent to email" });
// });

// app.post("/api/verify-otp", (req, res) => {
//   const { email, otp } = req.body;

//   if (otpStore[email] && otpStore[email] == otp) {
//     delete otpStore[email]; // Remove OTP after success
//     return res.status(200).json({ message: "OTP verified successfully!" });
//   } else {
//     return res.status(400).json({ message: "Invalid or expired OTP" });
//   }
// });



// // module.exports = sendEmail;
// export default sendEmail;




// const express = require("express");
// // import express from "express";
// // import mongoose from "mongoose";
// // import cors from "cors";
//  const mongoose = require("mongoose");
//  const cors = require("cors");
// // import dotenv from "dotenv";
// // dotenv.config();

// require("dotenv").config();
// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect("mongodb+srv://sravani_j:MongoDB%40123@cluster0.wetgiw4.mongodb.net/safestreet?retryWrites=true&w=majority&appName=Cluster0", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log("Connected to MongoDB");
// }).catch((err) => {
//   console.error("MongoDB connection error:", err);
// });

// // Simple User schema
// const User = mongoose.model("User", {
//   name: String,
//   email: String,
//   password: String,
// });

// // Register route
// app.post("/api/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return res.status(400).json({ message: "User already exists" });
//   }

//   const newUser = new User({ name, email, password });
//   await newUser.save();

//   res.status(201).json({ message: "User registered successfully" });
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
// app.post("/api/login", async (req, res) => {
//     const { email, password } = req.body;
  
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }
  
//     if (user.password !== password) {
//       return res.status(400).json({ message: "Incorrect password" });
//     }
  
//     res.status(200).json({ message: "Login successful" });
//   });
//   // Get user info by email
// app.post("/api/user", async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ name: user.name });
//   } catch (err) {
//     console.error("Error fetching user:", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });
// const nodemailer = require('nodemailer');
// // import nodemailer from "nodemailer";

// // Create a transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',  
//   auth: {
//     user: process.env.EMAIL_USER,  
//     pass: process.env.EMAIL_PASS    
//   }
// });

// // Email sending function
// const sendEmail = (to, subject, text, htmlContent) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: to,
//     subject: subject,
//     text: text,  // plain text body
//     html: htmlContent  // HTML body (optional)
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error occurred:', error);
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   });
// };



// app.post("/send-email", async (req, res) => {
//   const { to, subject, text, html } = req.body;
//   console.log("Text Body:", text);  // Log the plain text part
//   console.log("HTML Body:", html); 
//   try {
//     sendEmail(to, subject, text, html);
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Failed to send email" });
//   }
// });



// module.exports = sendEmail;
// // export default sendEmail;




// server.js

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const app = express();
// const PORT = 5000;

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log("Connected to MongoDB");
// }).catch((err) => {
//   console.error("MongoDB connection error:", err);
// });

// // User Schema
// const user = mongoose.model("User", {
//   name: String,
//   email: String,
//   password: String,
// });

// // Email Log Schema
// const EmailLog = mongoose.model("EmailLog", {
//   to: String,
//   subject: String,
//   text: String,
//   html: String,
//   sentAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// // Helper: send email + log
// const sendEmail = async (to, subject, text, htmlContent) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to,
//     subject,
//     text,
//     html: htmlContent
//   };

//   const info = await transporter.sendMail(mailOptions);
//   console.log('Email sent:', info.response);

//   // Save email log to MongoDB
//   const log = new EmailLog({ to, subject, text, html: htmlContent });
//   await log.save();
// };

// // Routes

// // User Registration
// app.post("/api/register", async (req, res) => {
//   const { name, email, password } = req.body;
//   const existingUser = await user.findOne({ email });

//   if (existingUser) {
//     return res.status(400).json({ message: "User already exists" });
//   }

//   const newUser = new user({ name, email, password });
//   await newUser.save();
//   res.status(201).json({ message: "User registered successfully" });
// });

// // User Login
// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await user.findOne({ email });

//   if (!user) return res.status(400).json({ message: "User not found" });
//   if (user.password !== password) return res.status(400).json({ message: "Incorrect password" });

//   res.status(200).json({ message: "Login successful" });
// });

// // Fetch User Info
// app.post("/api/user", async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user = await user.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.status(200).json({ name: user.name });
//   } catch (err) {
//     console.error("Error fetching user:", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // Send Email + Save Log
// app.post("/send-email", async (req, res) => {
//   const { to, subject, text, html } = req.body;

//   try {
//     await sendEmail(to, subject, text, html);
//     res.status(200).json({ message: "Email sent and logged successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Failed to send email" });
//   }
// });
// app.get("/api/emails", async (req, res) => {
//   try {
//     const emails = await EmailLog.find().sort({ sentAt: -1 });
//     res.status(200).json(emails);
//   } catch (error) {
//     console.error("Error fetching emails:", error);
//     res.status(500).json({ message: "Failed to fetch emails" });
//   }
// });

// // Get total email count
// app.get("/api/email-count", async (req, res) => {
//   try {
//     const count = await EmailLog.countDocuments();
//     res.status(200).json({ totalEmailsSent: count });
//   } catch (error) {
//     console.error("Error counting emails:", error);
//     res.status(500).json({ message: "Failed to count emails" });
//   }
// });

// // Server Start
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });



// const express = require("express");
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// const mongoose = require("mongoose");
// const cors = require("cors");
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

// require("dotenv").config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://sravani_j:MongoDB%40123@cluster0.wetgiw4.mongodb.net/safestreet?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Simple User schema
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
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

// Register route
app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = new User({ name, email, password });
  await newUser.save();

  res.status(201).json({ message: "User registered successfully" });
});




app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
  
    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect password" });
    }
  
    res.status(200).json({ message: "Login successful" });
  });

  // Get user info by email
app.post("/api/user", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ name: user.name });
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});



// const nodemailer = require('nodemailer');


// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',  
  auth: {
    user: process.env.EMAIL_USER,  
    pass: process.env.EMAIL_PASS    
  }
});

// Email sending function
// const sendEmail = (to, subject, text, htmlContent) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: "sravanijanak@gmail.com",
//     subject: subject,
//     text: text,  // plain text body
//     html: htmlContent  // HTML body (optional)
//   };


  

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error occurred:', error);
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   });
// };
// Helper: send email + log
const sendEmail = async (to, subject, text, htmlContent) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html: htmlContent
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('Email sent:', info.response);

  // Save email log to MongoDB
  const log = new EmailLog({ to, subject, text, html: htmlContent });
  await log.save();
};

app.post("/send-email", async (req, res) => {
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


// app.post("/send-email", async (req, res) => {
//   const { to, subject, text, html } = req.body;
//   console.log("Text Body:", text);  // Log the plain text part
//   console.log("HTML Body:", html); 
//   try {
//     sendEmail(to, subject, text, html);
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Failed to send email" });
//   }
// });






let otpStore = {};  

app.post("/api/send-otp", async (req, res) => {
  const { email } = req.body;
  
  const otp = Math.floor(100000 + Math.random() * 900000); 

  otpStore[email] = otp; 
  
  const subject = "Your SafeStreet Verification Code";
  const text = `Your verification code is: ${otp}`;

  sendEmail(email, subject, text);  

  res.status(200).json({ message: "OTP sent to email" });
});

app.post("/api/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] && otpStore[email] == otp) {
    delete otpStore[email]; 
    return res.status(200).json({ message: "OTP verified successfully!" });
  } else {
    return res.status(400).json({ message: "Invalid or expired OTP" });
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

let queries = []; // In-memory storage (better: DB later)

app.post("/api/save-query", (req, res) => {
  const { name, email, message, date } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  queries.push({ name, email, message, date });

  res.status(201).json({ message: "Query saved successfully." });
});

app.get("/api/get-queries", (req, res) => {
  res.status(200).json(queries);
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




