



// import React from "react";
// import "../App.css";

// const Contact = () => {
//   // Function to handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     const name = event.target.elements[0].value;
//     const email = event.target.elements[1].value;
//     const message = event.target.elements[2].value;
    
//     const queryData = { 
//       name, 
//       email, 
//       message, 
//       date: new Date() 
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/save-query", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(queryData),
//       });

//       if (response.ok) {
//         alert("Query noted! We will get back to you soon.");
//         event.target.reset(); // Clear the form after successful submission
//       } else {
//         alert("Failed to submit query. Please try again later.");
//       }
//     } catch (error) {
//       console.error("Error submitting query:", error);
//       alert("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <div className="contact-container">
//       <h1>Contact Us</h1>
//       <p>For any assistance related to road damage reports, please reach out to the respective departments.</p>

//       <div className="contact-details">
//         <div className="contact-card">
//           <h3>📞 Road Maintenance Department</h3>
//           <p>Phone: +91 98765 43210</p>
//           <p>Email: maintenance@safestreet.com</p>
//         </div>

//         <div className="contact-card">
//           <h3>🏛️ Municipal Authorities</h3>
//           <p>Phone: +91 91234 56789</p>
//           <p>Email: authorities@safestreet.com</p>
//         </div>

//         <div className="contact-card">
//           <h3>💻 Technical Support</h3>
//           <p>Phone: +91 78901 23456</p>
//           <p>Email: support@safestreet.com</p>
//         </div>
//       </div>

//       <div className="contact-form">
//         <h2>Send Us a Message</h2>
//         <form onSubmit={handleSubmit}>
//           <label>Name:</label>
//           <input type="text" placeholder="Enter your name" required />

//           <label>Email:</label>
//           <input type="email" placeholder="Enter your email" required />

//           <label>Message:</label>
//           <textarea placeholder="Describe your query" required></textarea>

//           <button type="submit">Submit</button>
//         </form>
//       </div>

//       <div className="emergency-section">
//         <h2>🚨 Emergency Contact</h2>
//         <p>If you need <strong>urgent road safety intervention</strong>, contact:</p>
//         <p><strong>Road Safety Helpline:</strong> 1800-123-4567</p>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import React, { useState } from "react";
import "../App.css"; // Assuming your styles are here

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const queryData = {
      ...formData,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:5000/api/save-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(queryData),
      });

      if (response.ok) {
        alert("Query noted! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to submit query. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting query:", error);
      alert("An error occurred. Please try later.");
    }
  };

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>For any assistance related to road damage reports, please reach out to the respective departments.</p>

      <div className="contact-content">
        {/* LEFT: CARDS */}
        <div className="contact-cards">
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

        {/* RIGHT: FORM */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your query"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* EMERGENCY SECTION */}
      <div className="emergency-section">
        <h2>🚨 Emergency Contact</h2>
        <p>If you need <strong>urgent road safety intervention</strong>, contact:</p>
        <p><strong>Road Safety Helpline:</strong> 1800-123-4567</p>
      </div>
    </div>
  );
};

export default Contact;


