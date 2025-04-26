import React from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { FaRoad } from "react-icons/fa6";

const Sidebar = ({ openSidebarToggle, toggleSidebar }) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-header">
        <img src="/logo.jpg" alt="SafeStreet Logo" className="sidebar-logo" />
      </div>

      <div className="sidebar-title">
        <div className="sidebar-brand">
        <FaRoad className="icon" /><b><i>SAFESTREET</i></b> 
        </div>
        {/* <span className="icon close_icon" onClick={toggleSidebar}>✖</span> */}
      </div>

      <ul className="sidebar-list" onClick={toggleSidebar}>
        <li className="sidebar-list-item">
          <Link to="/">
            <MdSpaceDashboard className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/damage_reports">
            <TbReportSearch className="icon" /> Damage Reports
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/contact">
            <IoMdContact className="icon" /> Contact Us
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
