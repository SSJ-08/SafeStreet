
import React from "react";
import "../App.css";

const Contact = () => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    // event.preventDefault(); 
    alert(" Query noted! We will get back to you soon.");
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>For any assistance related to road damage reports, please reach out to the respective departments.</p>

      <div className="contact-details">
        <div className="contact-card">
          <h3>📞 Road Maintenance Department</h3>
          <p>Phone: +91 98765 43210</p>
          <p>Email: maintenance@safestreet.com</p>
        </div>

        <div className="contact-card">
          <h3>🏛️ Municipal Authorities</h3>
          <p>Phone: +91 91234 56789</p>
          <p>Email: authorities@safestreet.com</p>
        </div>

        <div className="contact-card">
          <h3>💻 Technical Support</h3>
          <p>Phone: +91 78901 23456</p>
          <p>Email: support@safestreet.com</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Message:</label>
          <textarea placeholder="Describe your query" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="emergency-section">
        <h2>🚨 Emergency Contact</h2>
        <p>If you need **urgent road safety intervention**, contact:</p>
        <p><strong>Road Safety Helpline:</strong> 1800-123-4567</p>
      </div>
    </div>
  );
};

export default Contact;
