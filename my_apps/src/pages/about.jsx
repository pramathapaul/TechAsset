import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./About.css";

import technicianImg from "../assets/technician.jpg";
import laptopImg from "../assets/laptop.jpg";
import dataRecoveryImg from "../assets/data-recovery.jpg";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About <span className="highlight">Technician Assisting System</span></h1>
        <p>Your one-stop solution for all technical assistance needs.</p>
        <p>Get Solution for All Electric Devices</p>
     </section>

      {/* Carousel Section */}
      <section className="about-carousel">
        <h2 className="carousel-heading">What We Offer</h2>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
        >
          <div className="carousel-slide">
            <img src={technicianImg} alt="Expert Technicians" />
            <p className="legend">Certified Technicians at Your Service</p>
          </div>
          <div className="carousel-slide">
            <img src={laptopImg} alt="Laptop Repair" />
            <p className="legend">Fast & Efficient Laptop Repairs</p>
          </div>
          <div className="carousel-slide">
            <img src={dataRecoveryImg} alt="Data Recovery" />
            <p className="legend">Professional Data Recovery Solutions</p>
          </div>
        </Carousel>
      </section>

      {/* About Content Section */}
      <section className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            Technician Assisting System is dedicated to simplifying your digital life. We connect you with verified professionals to solve computer problems, recover lost data, and provide personalized technical support.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To be the most reliable and trusted partner for individuals and businesses needing high-quality tech repair and support services.
          </p>
        </div>
        <div className="about-section">
          <h2>10+ Years Experiences</h2>
          <p>
            Work With the client to set short- term and long- term financial golas.
          </p>
        </div>
        <div className="about-section">
          <h2>Skilled Technicians</h2>
          <p>
            Our team comprises skilled professionals with extensive traning & certifications.
        
          </p>
        </div>
        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Certified, experienced technicians</li>
            <li>Affordable and transparent pricing</li>
            <li>Quick turnaround on all repairs</li>
            <li>Remote and onsite support options</li>
            <li>Excellent customer service</li>
          </ul>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="reviews-container">
          <div className="review-card">
            <p>"Super quick service! My laptop was fixed within a day and the technician was very polite. Highly recommended!"</p>
            <h4>- Riya Patel</h4>
          </div>
          <div className="review-card">
            <p>"Lost all hope on recovering my photos but these guys recovered everything. Lifesavers!"</p>
            <h4>- Arjun Mehra</h4>
          </div>
          <div className="review-card">
            <p>"Affordable and transparent pricing. No hidden charges. I’m a repeat customer!"</p>
            <h4>- Priya Singh</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Our Services</h4>
            <li>Computer Repair</li>
            <li>Laptop Cleaning</li>
            <li>Data Recovery</li>
            <li>Camera & Lens Repair</li>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
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

export default About;
