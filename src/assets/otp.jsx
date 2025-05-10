
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Otp = () => {
//   const [otp, setOtp] = useState("");
//   const [timeLeft, setTimeLeft] = useState(60); 
//   const [isExpired, setIsExpired] = useState(false);
//   const navigate = useNavigate();
//   const email = localStorage.getItem("userEmail"); 

//   useEffect(() => {
//     if (timeLeft === 0) {
//       setIsExpired(true);
//     }

//     const timer = timeLeft > 0 && setInterval(() => {
//       setTimeLeft(timeLeft - 1);
//     }, 1000);

//     return () => clearInterval(timer); 
//   }, [timeLeft]);

//   // const handleVerifyOtp = async (e) => {
//   //   e.preventDefault();
//   //   if (isExpired) {
//   //     alert("OTP has expired. Please request a new one.");
//   //     return;
//   //   }

//   //   try {
//   //     const response = await fetch("http://localhost:5000/api/verify-otp", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({ email, otp }),
//   //     });

//   //     const data = await response.json();

//   //     if (response.ok) {
//   //       alert("OTP verified! Login successful.");
//   //       navigate("/home");
//   //     } else {
//   //       alert(data.message || "Invalid OTP");
//   //     }
//   //   } catch (error) {
//   //     console.error("OTP verification error:", error);
//   //     alert("Something went wrong. Please try again.");
//   //   }
//   // };


//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
    
//     if (isExpired) {
//       alert("OTP has expired. Please request a new one.");
//       return;
//     }
//     try {
//       const response = await fetch("http://localhost:5000/api/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ officialEmail, otp }), // Sending OTP to the backend
//       });
  
//       const data = await response.json();
  
//       if (response.ok) {
//         alert("OTP verified! Login successful.");
//         navigate("/home");
//       } else {
//         alert(data.message || "Invalid OTP");
//       }
//     } catch (error) {
//       console.error("OTP verification error:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };
  
//   const handleResendOtp = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/send-otp", { 
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ officialEmail }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("New OTP sent to your email.");
//         setTimeLeft(60); 
//         setIsExpired(false);
//         setOtp(""); 
//       } else {
//         alert(data.message || "Failed to resend OTP");
//       }
//     } catch (error) {
//       console.error("Resend OTP error:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="otp-container">
//       <h2>Enter OTP</h2>
//       <p>OTP has been sent. Please check your registered gmail account</p>

//       <form onSubmit={handleVerifyOtp}>
//         <input
//           type="text"
//           placeholder="Enter OTP"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//           required
//           disabled={isExpired}
//         /><br />

//         {/* {!isExpired ? (
//           <button type="submit" className="btn">Verify OTP</button>
//         ) : (
//           <button type="button" className="btn" onClick={handleResendOtp}>
//             Resend OTP
//           </button>
//         )} */}
//         <button type="submit" className="btn" disabled={isExpired}>
//           Verify OTP
//         </button>

//         <button
//           type="button"
//           className="btn"
//           onClick={handleResendOtp}
//           disabled={!isExpired}
//           style={{ marginLeft: '10px', backgroundColor: isExpired ? '#28a745' : '#ccc', cursor: isExpired ? 'pointer' : 'not-allowed' }}
//         >
//           Resend OTP
//         </button>


//       </form>

//       <div style={{ marginTop: '10px', color: isExpired ? 'red' : 'white' }}>
//         {isExpired ? "OTP expired. Please resend." : `Time left: 00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`}
//       </div>
//     </div>
//   );
// };

// export default Otp;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Otp = () => {
//   const [otp, setOtp] = useState("");
//   const [timeLeft, setTimeLeft] = useState(60); 
//   const [isExpired, setIsExpired] = useState(false);
//   const [officialEmail, setOfficialEmail] = useState("");

//   const navigate = useNavigate();
  
//   // const officialEmail = localStorage.getItem("officialEmail"); 

//   // useEffect(() => {
//   //   if (timeLeft === 0) {
//   //     setIsExpired(true);
//   //   }

//   //   const timer = timeLeft > 0 && setInterval(() => {
//   //     setTimeLeft(timeLeft - 1);
//   //   }, 1000);

//   //   return () => clearInterval(timer); 
//   // }, [timeLeft]);

//   useEffect(() => {
//     const storedEmail = localStorage.getItem("officialEmail");
//     if (storedEmail) {
//       setOfficialEmail(storedEmail);
//     } else {
//       alert("No official email found. Please login again.");
//       navigate("/login");
//     }
//   }, [navigate]);




//   // const handleVerifyOtp = async (e) => {
//   //   e.preventDefault();

//   //   if (isExpired) {
//   //     alert("OTP has expired. Please request a new one.");
//   //     return;
//   //   }

//   //   try {
//   //     const response = await fetch("http://localhost:5000/api/verify-otp", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({ officialEmail, otp }),
//   //     });

//   //     const data = await response.json();

//   //     if (response.ok) {
//   //       alert("OTP verified! Login successful.");
//   //       navigate("/home");
//   //     } else {
//   //       alert(data.message || "Invalid OTP");
//   //     }
//   //   } catch (error) {
//   //     console.error("OTP verification error:", error);
//   //     alert("Something went wrong. Please try again.");
//   //   }
//   // };


//   const handleVerifyOtp = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ officialEmail, otp }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("OTP verified successfully!");
//         localStorage.setItem("isAuthenticated", true);
//         navigate("/home");
//       } else {
//         alert(data.message || "Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       console.error("OTP verification error:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };


//   const handleResendOtp = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/send-otp", { 
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ officialEmail }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("New OTP sent to your registered personal email.");
//         setTimeLeft(60); 
//         setIsExpired(false);
//         setOtp(""); 
//       } else {
//         alert(data.message || "Failed to resend OTP");
//       }
//     } catch (error) {
//       console.error("Resend OTP error:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="otp-container">
//       <h2>Enter OTP</h2>
//       <p>OTP has been sent to your registered personal email.</p>

//       <form onSubmit={handleVerifyOtp}>
//         <input
//           type="text"
//           placeholder="Enter OTP"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//           required
//           disabled={isExpired}
//         /><br />

//         <button type="submit" className="btn" disabled={isExpired}>
//           Verify OTP
//         </button>

//         <button
//           type="button"
//           className="btn"
//           onClick={handleResendOtp}
//           disabled={!isExpired}
//           style={{ marginLeft: '10px', backgroundColor: isExpired ? '#28a745' : '#ccc', cursor: isExpired ? 'pointer' : 'not-allowed' }}
//         >
//           Resend OTP
//         </button>
//       </form>

//       <div style={{ marginTop: '10px', color: isExpired ? 'red' : 'white' }}>
//         {isExpired ? "OTP expired. Please resend." : `Time left: 00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`}
//       </div>
//     </div>
//   );
// };

// export default Otp;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60); 
  const [isExpired, setIsExpired] = useState(false);
  const [officialEmail, setOfficialEmail] = useState("");

  const navigate = useNavigate();
  
  useEffect(() => {
    const storedEmail = localStorage.getItem("officialEmail");
    if (storedEmail) {
      setOfficialEmail(storedEmail);
    } else {
      alert("No official email found. Please login again.");
      navigate("/login");
    }
  }, [navigate]);

  // OTP Verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();  // Prevents the page from refreshing

    try {
      const response = await fetch("http://localhost:8000/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ officialEmail, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("OTP verified successfully! You are now logged in.");
        localStorage.setItem("isAuthenticated", true);
        navigate("/home");
      } else {
        alert(data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Resend OTP
  const handleResendOtp = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/send-otp", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ officialEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("A new OTP has been sent to your registered personal email.");
        setTimeLeft(60); 
        setIsExpired(false);
        setOtp(""); 
      } else {
        alert(data.message || "Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      console.error("Resend OTP error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Timer Logic
  useEffect(() => {
    if (timeLeft === 0) {
      setIsExpired(true);
    }

    const timer = timeLeft > 0 && setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer); 
  }, [timeLeft]);

  return (
    <div className="otp-container">
      <h2>Authority OTP Verification</h2>
      <p>An OTP has been sent to your registered personal email for verification.</p>

      <form onSubmit={handleVerifyOtp}>
        <input
          type="text"
          placeholder="Enter the 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          disabled={isExpired}
        /><br />

        <button type="submit" className="btn" disabled={isExpired}>
          Verify OTP
        </button>

        <button
          type="button"
          className="btn"
          onClick={handleResendOtp}
          disabled={!isExpired}
          style={{ marginLeft: '10px', backgroundColor: isExpired ? '#28a745' : '#ccc', cursor: isExpired ? 'pointer' : 'not-allowed' }}
        >
          Resend OTP
        </button>
      </form>

      <div style={{ marginTop: '10px', color: isExpired ? 'red' : 'white' }}>
        {isExpired ? "OTP expired. Please request a new one." : `Time left: 00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`}
      </div>
    </div>
  );
};

export default Otp;
