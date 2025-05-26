import React, { useEffect } from 'react';
import './Gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your local images
import img1 from '../assets/gallery/technician1.jpg';
import img2 from '../assets/gallery/computer-repair.jpg';
import img3 from '../assets/gallery/hardware-check.jpg';
import img4 from '../assets/gallery/network-setup.jpg';
import img5 from '../assets/gallery/software-installation.jpg';
import img6 from '../assets/gallery/maintenance.jpg';

const images = [
  {
    id: 1,
    src: img1,
    alt: 'Technician at work',
    caption: 'On-site Technician Support',
  },
  {
    id: 2,
    src: img2,
    alt: 'Computer Repair',
    caption: 'PC & Laptop Repair',
  },
  {
    id: 3,
    src: img3,
    alt: 'Hardware Check',
    caption: 'Hardware Diagnosis',
  },
  {
    id: 4,
    src: img4,
    alt: 'Network Setup',
    caption: 'Network Configuration',
  },
  {
    id: 5,
    src: img5,
    alt: 'Software Installation',
    caption: 'App Installation Services',
  },
  {
    id: 6,
    src: img6,
    alt: 'Maintenance',
    caption: 'Regular Maintenance',
  },
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Trigger animation only once
    });
  }, []);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our Work Gallery</h1>
      <p className="gallery-subtitle">Real photos from our technicians in action</p>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item"
            data-aos="fade-up"              // Animation effect
            data-aos-delay={index * 150}    // Staggered delay based on the index
          >
            <img src={image.src} alt={image.alt} />
            <p className="image-caption">{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
