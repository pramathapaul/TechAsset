// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" className="navbar-logo">TechAsset</Link>
        </div>
        <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/service-request" className="nav-link">Service Request</Link>
          </li>
          <li className="nav-item">
            <Link to="/Technician-Register" className="nav-link">Technician Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin-login" className="nav-link">Admin Login</Link>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
