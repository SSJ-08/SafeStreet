import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Ensure styles are in App.css

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1><i>Welcome to SafeStreet</i></h1>
        <p className="tagline">Making streets safer, one report at a time.</p>

        <div className="button-container">
          <button onClick={() => navigate("/login")} className="btn">Login</button>

          

          <button onClick={() => navigate("/register")} className="btn">Register</button>

        </div>
      </div>
    </div>
  );
};

export default Welcome;
