// const express = require("express");
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// const mongoose = require("mongoose");
// const cors = require("cors");
import dotenv from "dotenv";
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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
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
import nodemailer from "nodemailer";

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',  
  auth: {
    user: process.env.EMAIL_USER,  
    pass: process.env.EMAIL_PASS    
  }
});

// Email sending function
const sendEmail = (to, subject, text, htmlContent) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "jayashreeindrani52@gmail.com",
    subject: subject,
    text: text,  // plain text body
    html: htmlContent  // HTML body (optional)
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};



app.post("/send-email", async (req, res) => {
  const { to, subject, text, html } = req.body;
  console.log("Text Body:", text);  // Log the plain text part
  console.log("HTML Body:", html); 
  try {
    sendEmail(to, subject, text, html);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});



// module.exports = sendEmail;
export default sendEmail;
