import { useEffect, useState } from 'react';
import styles from './ServiceRequest.module.css';

const ServiceRequest = () => {
  const [technicians, setTechnicians] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    location: '',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [matchedTechnicians, setMatchedTechnicians] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/service-request')
      .then((res) => res.json())
      .then((data) => {
        setTechnicians(data);
      })
      .catch((err) => console.error('Error loading JSON:', err));
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
  
    setFormData(updatedFormData);
  
    if (
      (name === 'service' || name === 'location') &&
      updatedFormData.service.trim().length > 0 &&
      updatedFormData.location.trim().length > 0
    ) {
      const requestedService = updatedFormData.service.trim().toLowerCase();
      const userLocation = updatedFormData.location.trim().toLowerCase();
  
      const matched = technicians
        .filter(
          (tech) =>
            tech.address?.trim().toLowerCase() === userLocation &&
            Array.isArray(tech.services) &&
            tech.services.some(
              (s) => s.service_name.trim().toLowerCase() === requestedService
            )
        )
        .sort((a, b) => {
          const aCost = a.services.find(
            (s) => s.service_name.trim().toLowerCase() === requestedService
          )?.cost ?? Infinity;
  
          const bCost = b.services.find(
            (s) => s.service_name.trim().toLowerCase() === requestedService
          )?.cost ?? Infinity;
  
          return aCost - bCost;
        });
  
      setMatchedTechnicians(matched);
    }
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={styles.container}>
      {!isSubmitted ? (
        <div>
          <h2>Service Request Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Name:</label>
              <input
                className={styles.input}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email:</label>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Service Needed:</label>
              <input
                className={styles.input}
                type="text"
                name="service"
                value={formData.service}
                onChange={handleChange}
                placeholder="e.g., Mobile Repair"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Location:</label>
              <input
                className={styles.input}
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., Kolkata"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Description:</label>
              <textarea
                className={styles.textarea}
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <button className={styles.button} type="submit">Submit Request</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Service Request Submitted!</h2>
          <p>
            Thank you, {formData.name}. Based on your request for <strong>{formData.service}</strong>, here are some matching technicians:
          </p>
          {matchedTechnicians.length > 0 ? (
            <ul className={styles.technicianList}>
              {matchedTechnicians.map((tech, index) => (
                <li key={index}>
                  <strong>Shop Name : {tech.storeName}</strong><br />
                  Shop Owner: {tech.firstName} {tech.middleName ? tech.middleName : ' '} {tech.lastName}<br />
                  Address: {tech.address}<br />
                  Contact Number: {tech.contact}<br />
                  <u>Service Cost:</u> {
                    tech.services.find(s =>
                      s.service_name.trim().toLowerCase() === formData.service.trim().toLowerCase()
                    )?.cost ?? 'N/A'
                  } Rs
                </li>
              ))}
            </ul>
          ) : (
            <p>No technicians found for that service.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceRequest;