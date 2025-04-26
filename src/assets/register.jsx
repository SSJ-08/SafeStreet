
// // import React, { useState } from "react";
// // // import "C:\\Users\\HP\\Desktop\\KMIT\\Sem\\react\\safestreet2\\src\\App.css";
// // import "../App.css";
// // import { Link } from "react-router-dom";
// // import { useNavigate } from "react-router-dom";
// // const Register = () => {
// //     const navigate = useNavigate();
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [error, setError] = useState("");

// //   const handlePasswordChange = (e) => {
// //     setPassword(e.target.value);
// //   };

// //   const handleConfirmPasswordChange = (e) => {
// //     setConfirmPassword(e.target.value);

// //     // Validate if passwords match
// //     if (e.target.value !== password) {
// //       setError("Passwords do not match!");
// //     } else {
// //       setError("");
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (password !== confirmPassword) {
// //       setError("Passwords do not match!");
// //     } else {
// //       alert("Registration Successful!");
// //       // Proceed with further logic (e.g., API call to register user)
// //     }
// //   };

// //   return (
// //     <>
    
// //       <div className="register-container">
// //       <div className="register-card">
// //         <h2 className="title">Register</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="input-group">
// //             <label>Name: </label>
// //             <input type="text" placeholder="Enter your full name" required />
// //           </div>
// //           <div className="input-group">
// //             <label>Email: </label>
// //             <input type="email" placeholder="Enter your email" required />
// //           </div>
// //           <div className="input-group">
// //             <label>Password:</label>
// //             <input
// //               type="password"
// //               placeholder="Create a password"
// //               value={password}
// //               onChange={handlePasswordChange}
// //               required
// //             />
// //           </div>
// //           <div className="input-group">
// //             <label>Confirm Password:</label>
// //             <input
// //               type="password"
// //               placeholder="Confirm your password"
// //               value={confirmPassword}
// //               onChange={handleConfirmPasswordChange}
// //               required
// //             />
// //           </div>
// //           <p className="fplink">Already have an account? <Link to="/login">Login</Link></p>

// //           {error && <p className="error-message">{error}</p>}

// //           <button onClick={()=>navigate("/home")} type="submit" className="btn" disabled={error !== ""}>
// //             Register
// //           </button>
// //         </form>
// //       </div>
// //     </div>

   
// //     </>
   
    
// //   );
// // };

// // export default Register;




// import React, { useState } from "react";
// import "../App.css";
// import { Link, useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     if (confirmPassword && e.target.value !== confirmPassword) {
//       setError("Passwords do not match!");
//     } else {
//       setError("");
//     }
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//     if (e.target.value !== password) {
//       setError("Passwords do not match!");
//     } else {
//       setError("");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match!");
//     } else {
//       alert("Registration Successful!");
//       // Proceed with further logic (e.g., send data to backend)
//       navigate("/home");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="register-container">
//         <div className="register-card">
//           <h2 className="title">Register</h2>

//           <div className="input-group">
//             <label>Name:</label>
//             <input type="text" placeholder="Enter your full name" required />
//           </div>

//           <div className="input-group">
//             <label>Email:</label>
//             <input type="email" placeholder="Enter your email" required />
//           </div>

//           <div className="input-group">
//             <label>Password:</label>
//             <input
//               type="password"
//               placeholder="Create a password"
//               value={password}
//               onChange={handlePasswordChange}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label>Confirm Password:</label>
//             <input
//               type="password"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={handleConfirmPasswordChange}
//               required
//             />
//           </div>

//           {error && <p className="error-message">{error}</p>}

//           <p className="fplink">
//             Already have an account? <Link to="/login">Login</Link>
//           </p>

//           <button type="submit" className="btn" disabled={error !== ""}>
//             Register
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Register;



import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  // Added state for name and email
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful!");
        navigate("/login");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="title">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name: </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Email: </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError(e.target.value !== password ? "Passwords do not match!" : "");
              }}
              required
            />
          </div>
          <p className="fplink">
            Already have an account? <Link to="/login">Login</Link>
          </p>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="btn" disabled={error !== ""}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;