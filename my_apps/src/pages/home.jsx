// Home.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";

import laptopImg from "../assets/laptop.jpg";
import dataRecoveryImg from "../assets/data-recovery.jpg";
import technicianImg from "../assets/technician.jpg";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          Welcome to <span className="highlight">Technician Assisting System</span>
        </h1>
        <p>Your trusted platform for computer repairs, data recovery, and expert technical help.</p>
        <p>YOUR DEVICE OUR EXPERTISE</p>
        <button className="cta-button">CONTACT US</button>
      </section>

      {/* Carousel Section */}
      <section className="carousel-heading">
  <h2>Fast and Reliable Repairs for Every Need</h2>
</section>
      <section className="hero-carousel">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
        >
          <div className="carousel-slide">
            <img src={laptopImg} alt="Laptop Repair" />
            <p className="legend">
              Laptop Repair Services
              <button className="carousel-btn">Book Now</button>
            </p>
          </div>
          <div className="carousel-slide">
            <img src={dataRecoveryImg} alt="Data Recovery" />
            <p className="legend">
              Data Recovery Solutions
              <button className="carousel-btn">Explore</button>
            </p>
          </div>
          <div className="carousel-slide">
            <img src={technicianImg} alt="Technician Support" />
            <p className="legend">
              On-Demand Technician
              <button className="carousel-btn">Get Help</button>
            </p>
          </div>
        </Carousel>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Our Service</h4>
            <li>Camera & Lens Repair</li>
            <li>Cleaning Laptops</li>
            <li>Computer Repair</li>
            <li>Data Recovery</li>
            <li>Software Installation</li>
        
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            
              <li>Home</li>
              <li>Services</li>
              <li>Contact</li>
            
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <li>Email: support@technicianassist.com</li>
            <li>Phone: +123 456 7890</li>
          </div>
        </div>
        <hr />
        <p>&copy; {new Date().getFullYear()} Technician Assisting System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
