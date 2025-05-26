import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>CONTACT <span className="highlight">US</span></h1>
        <p>We’re here to help you with any questions or support you need.</p>
      </div>

      {/* Contact Information Section */}
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> support@techassist.com</p>
          <p><strong>Phone:</strong> +1 (234) 567-890</p>
          <p><strong>Address:</strong> 81, Nilgunj Road, Agarpara, Kolkata - 7000109</p>

          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Google Map Section */}
      <div className="map-section">
        <iframe
          title="Google Map with Marker"
          src="https://www.google.com/maps?q=22.676184138982187,88.37846051719376&z=17&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>



      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>Technician Assisting System is your go-to solution for reliable and professional tech support. Fast, friendly, and expert service at your fingertips.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>Support</li>
              <li>Services</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <p>&copy; {new Date().getFullYear()} Technician Assisting System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
