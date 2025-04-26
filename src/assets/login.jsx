// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';


// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Login successful!");
//         localStorage.setItem("userEmail", email);
//         navigate("/otp");
//       } else {
//         setError(data.message || "Login failed");
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

//             <div className='inputs'>Email: </div>
//             <input
//               type='email'
//               placeholder='Enter your email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             /><br/>

//             <div className='inputs'>Password: </div>
//             <input
//               type='password'
//               placeholder='Enter password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

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





import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Try to login
      const loginResponse = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const loginData = await loginResponse.json();

      if (loginResponse.ok) {
        // Step 2: If login successful, send OTP
        const otpResponse = await fetch("http://localhost:5000/api/send-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const otpData = await otpResponse.json();

        if (otpResponse.ok) {
          alert("Login successful! OTP sent to your email.");
          localStorage.setItem("userEmail", email);
          navigate("/otp");
        } else {
          setError(otpData.message || "Failed to send OTP");
        }
      } else {
        setError(loginData.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='login-container'>
          <div className='login'>
            <div className='title'><h1>LOGIN</h1></div>

            <div className='inputs'>Email:</div>
            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /><br/>

            <div className='inputs'>Password:</div>
            <input
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="fplink">
              Forgot your password? <Link to="/forgotpassword">Click here to reset it!</Link>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="btn">Login</button>

            <div className="register">
              New User? <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;

