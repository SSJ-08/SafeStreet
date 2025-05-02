// import React, { useState } from "react";
// import "../App.css";
// import { Link, useNavigate } from "react-router-dom";
// import PasswordInput from './PasswordInput';

// const Register = () => {
//   const navigate = useNavigate();

//   // Added state for name and email
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Registration Successful!");
//         navigate("/login");
//       } else {
//         setError(data.message || "Registration failed");
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-card">
//         <h2 className="title">Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Name: </label>
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label>Email: </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           {/* <div className="input-group">
//             <label>Password:</label>
//             <input
//               type="password"
//               placeholder="Create a password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label>Confirm Password:</label>
//             <input
//               type="password"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={(e) => {
//                 setConfirmPassword(e.target.value);
//                 setError(e.target.value !== password ? "Passwords do not match!" : "");
//               }}
//               required
//             />
//           </div> */}
//           <div className='inputs'>Password: </div>
//             <PasswordInput
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />

//             <div className='inputs'>Confirm Password: </div>
//             <PasswordInput
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm your password"
//               required
//             />

//           <p className="fplink">
//             Already have an account? <Link to="/login">Login</Link>
//           </p>

//           {error && <p className="error-message">{error}</p>}

//           <button type="submit" className="btn" disabled={error !== ""}>
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import "../App.css";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

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

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setError(value !== password ? "Passwords do not match!" : "");
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
            <div style={{ position: 'relative' }}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ paddingRight: '30px' }}
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '40%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  fontSize: '20px',
                }}
              >
                {passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
          </div>

          <div className="input-group">
            <label>Confirm Password:</label>
            <div style={{ position: 'relative' }}>
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
                style={{ paddingRight: '30px' }}
              />
              <span
                onClick={toggleConfirmPasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '40%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  fontSize: '20px',
                }}
              >
                {confirmPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
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