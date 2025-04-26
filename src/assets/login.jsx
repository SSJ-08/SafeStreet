// // import React from 'react';
// // import { Link ,useNavigate} from 'react-router-dom';
// // const Login = ()=>{
// //     const navigate = useNavigate();
// //     return(
// //         <>
// //         <form>
// //         <div className='login-container'>
// //             <div className='login'>
// //                 <div className='title'><h1>LOGIN</h1></div>
// //                 <div className='inputs'>UserName: </div>
// //                 <input type='text' placeholder='Enter username' required/><br/>
// //                 <div className='inputs'>Password: </div>
// //                 <input type='password' placeholder='Enter password' required/>
// //                     <div className="fplink">
// //                         Forgot your password?{' '}
// //                         <Link to="/forgotpassword">Click here to reset it!</Link>  
                    
// //                     </div>
                    
// //                     <button onClick={() => navigate("/home")}className="btn">Login</button>
// //                     <div className="register">
// //                         New User?{' '}
// //                         <Link to="/register">Register</Link>  
                    
                    
// //                     </div>
// //                 </div>
// //         </div>
// //         </form>
// //         </>
// //     )
// // }
// // export default Login;



// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     // Add validation or API call logic here if needed
//     navigate("/home");  // Navigate after validation passes
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className='login-container'>
//           <div className='login'>
//             <div className='title'><h1>LOGIN</h1></div>

//             <div className='inputs'>UserName: </div>
//             <input type='text' placeholder='Enter username' required /><br />

//             <div className='inputs'>Password: </div>
//             <input type='password' placeholder='Enter password' required />

//             <div className="fplink">
//               Forgot your password?{' '}
//               <Link to="/forgotpassword">Click here to reset it!</Link>
//             </div>

//             <button type="submit" className="btn">Login</button>

//             <div className="register">
//               New User?{' '}
//               <Link to="/register">Register</Link>
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
// import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("userEmail", email);
        navigate("/home");
      } else {
        setError(data.message || "Login failed");
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

            <div className='inputs'>Email: </div>
            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /><br/>

            <div className='inputs'>Password: </div>
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
