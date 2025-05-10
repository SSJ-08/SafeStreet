

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// import "../App.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const [officialEmail, setOfficialEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [error, setError] = useState("");

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const loginResponse = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ officialEmail, password }),
//       });

//       const loginData = await loginResponse.json();

//       if (loginResponse.ok) {
//         const otpResponse = await fetch("http://localhost:5000/api/send-otp", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ officialEmail }),
//         });

//         const otpData = await otpResponse.json();

//         if (otpResponse.ok) {
//           alert("Login successful! OTP sent to your email.");
//           localStorage.setItem("userEmail", officialEmail);
//           navigate("/otp");
//         } else {
//           setError(otpData.message || "Failed to send OTP");
//         }
//       } else {
//         setError(loginData.message || "Login failed");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className='login-container'>
//           <div className='login'>
//             <div className='title'><h1>LOGIN</h1></div>

//             <div className='inputs'>Official Email:</div>
//             <input
//               type='email'
//               placeholder='Enter your official email'
//               value={officialEmail}
//               onChange={(e) => setOfficialEmail(e.target.value)}
//               required
//             /><br />

//             <div className='inputs'>Password: </div>
//             <div style={{ position: 'relative' }}>
//               <input
//                 type={passwordVisible ? 'text' : 'password'}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 style={{ paddingRight: '30px' }}
//               />
//               <span
//                 onClick={togglePasswordVisibility}
//                 style={{
//                   position: 'absolute',
//                   right: '15px',
//                   top: '40%',
//                   transform: 'translateY(-50%)',
//                   cursor: 'pointer',
//                   fontSize: '20px',
//                 }}
//               >
//                 {passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
//               </span>
//             </div>

//             <div className="fplink">
//               Forgot your password? <Link to="/forgotpassword">Click here to reset it!</Link>
//             </div>

//             {error && <p className="error-message">{error}</p>}

//             <button type="submit" className="btn">Login</button>

//             <div className="register">
//               New User? <Link to="/register">Register</Link>
//             </div>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// import "../App.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [officialEmail, setOfficialEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [error, setError] = useState("");

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Reset error on each submit

//     try {
//       const loginResponse = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ officialEmail, password }),
//       });

//       const loginData = await loginResponse.json();
//       console.log("Login response:", loginData);

//       if (loginResponse.ok) {
//         // Trigger OTP if login successful
//         const otpResponse = await fetch("http://localhost:5000/api/send-otp", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ officialEmail }),
//         });

//         const otpData = await otpResponse.json();
//         console.log("OTP response:", otpData);

//         if (otpResponse.ok) {
//           alert("Login successful! OTP sent to your email.");
//           localStorage.setItem("userEmail", officialEmail);
//           navigate("/otp"); // Redirect to OTP verification page
//         } else {
//           setError(otpData.message || "Failed to send OTP");
//         }
//       } else {
//         setError(loginData.message || "Login failed");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className='login-container'>
//         <div className='login'>
//           <div className='title'><h1>LOGIN</h1></div>

//           <div className='inputs'>Official Email:</div>
//           <input
//             type='email'
//             placeholder='Enter your official email'
//             value={officialEmail}
//             onChange={(e) => setOfficialEmail(e.target.value)}
//             required
//           /><br />

//           <div className='inputs'>Password:</div>
//           <div style={{ position: 'relative' }}>
//             <input
//               type={passwordVisible ? 'text' : 'password'}
//               placeholder='Enter your password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               style={{ paddingRight: '30px' }}
//             />
//             <span
//               onClick={togglePasswordVisibility}
//               style={{
//                 position: 'absolute',
//                 right: '15px',
//                 top: '40%',
//                 transform: 'translateY(-50%)',
//                 cursor: 'pointer',
//                 fontSize: '20px',
//               }}
//             >
//               {passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
//             </span>
//           </div>

//           <div className="fplink">
//             Forgot your password? <Link to="/forgotpassword">Click here to reset it!</Link>
//           </div>

//           {error && <p className="error-message">{error}</p>} {/* Display error message */}

//           <button type="submit" className="btn">Login</button>

//           <div className="register">
//             New User? <Link to="/register">Register</Link>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Login;




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const [officialEmail, setOfficialEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const[email,setEmail] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validate domain before sending request
      if (!officialEmail.endsWith("@safestreet.org")) {
        setError("Only SafeStreet authority domains are allowed.");
        setLoading(false);
        return;
      }

      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ officialEmail, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("officialEmail", officialEmail);
        alert("Login successful, OTP sent to your personal email.");
        navigate("/otp");
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Failed to connect to the server. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-container">
        <div className="login">
          <div className="title">
            <h1>LOGIN</h1>
          </div>

          <div className="inputs">Official Email:</div>
          <input
            type="email"
            placeholder="Enter your official email"
            value={officialEmail}
            onChange={(e) => setOfficialEmail(e.target.value)}
            required
          />


          {/* <div className="inputs">Personal Email:</div>
          <input
            type="email"
            placeholder="Enter your personal email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /> */}

          <div className='inputs'>Password: </div>
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

          {error && <p className="error-message">{error}</p>} {/* Display error message */}

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="fplink">
            Forgot your password? <Link to="/forgotpassword">Click here to reset it!</Link>
          </div>

          <div className="register">
            New User? <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
