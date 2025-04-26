import { useState, useEffect } from "react";
import "./App.css";
import Header from "./assets/header";
import Sidebar from "./assets/sidebar";
import Home from "./assets/home";
import Damage_Reports from "./assets/damage_reports";
import Welcome from "./assets/welcome";
import Login from "./assets/login";
import ForgotPassword from "./assets/forgotpassword";
import Register from "./assets/register";
import Contact from "./assets/contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="grid-container">
        <Header openSidebar={toggleSidebar} />

        {isMobile && (
          <button className="hamburger-button" onClick={toggleSidebar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        )}

        <Sidebar openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/damage_reports" element={<Damage_Reports />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
