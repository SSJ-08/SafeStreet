
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Otp = () => {
//   const [otp, setOtp] = useState("");
//   const navigate = useNavigate();
//   const email = localStorage.getItem("userEmail"); // get saved email

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, otp }),
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

//   return (
//     <div className="otp-container">
//       <h2>OTP has been sent to your email.
//        <br></br> Please check your registered email.</h2>
//       <form onSubmit={handleVerifyOtp}>
//         <input
//           type="text"
//           placeholder="Enter OTP"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//           required
//         /><br/>
//         <button type="submit" className="btn">Verify OTP</button>
//       </form>
//     </div>
//   );
// };

// export default Otp;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60); // 30 seconds for OTP validity
  const [isExpired, setIsExpired] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail"); // get saved email

  useEffect(() => {
    if (timeLeft === 0) {
      setIsExpired(true);
    }

    const timer = timeLeft > 0 && setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer); // Clean up
  }, [timeLeft]);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (isExpired) {
      alert("OTP has expired. Please request a new one.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("OTP verified! Login successful.");
        navigate("/home");
      } else {
        alert(data.message || "Invalid OTP");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("New OTP sent to your email.");
        setTimeLeft(60); // Reset timer
        setIsExpired(false);
        setOtp(""); // Clear the old OTP input
      } else {
        alert(data.message || "Failed to resend OTP");
      }
    } catch (error) {
      console.error("Resend OTP error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="otp-container">
      <h2>OTP has been sent to your email.
        <br /> Please check your registered email.</h2>

      <form onSubmit={handleVerifyOtp}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          disabled={isExpired}
        /><br />

        {/* {!isExpired ? (
          <button type="submit" className="btn">Verify OTP</button>
        ) : (
          <button type="button" className="btn" onClick={handleResendOtp}>
            Resend OTP
          </button>
        )} */}
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
        {isExpired ? "OTP expired. Please resend." : `Time left: 00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`}
      </div>
    </div>
  );
};

export default Otp;

