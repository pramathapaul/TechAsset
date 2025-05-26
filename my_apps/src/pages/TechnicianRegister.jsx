import React, { useState } from 'react';
import './TechnicianRegister.css';
import axios from 'axios';


const servicesList = [
  'Camera & Lens Repair',
  'Cleaning Laptops',
  'Computer Repair',
  'Data Recovery',
  'Software Installation',
  'Mobile Repair'
];

const TechnicianRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    storeName: '',
    address: '',
    contact: '',
    email: '',
    services: {} // format: { 'Service Name': cost }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => {
      const updatedServices = { ...prev.services };
      if (updatedServices[service] !== undefined) {
        delete updatedServices[service];
      } else {
        updatedServices[service] = '';
      }
      return { ...prev, services: updatedServices };
    });
  };

  const handleServiceCostChange = (service, cost) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: cost
      }
    }));
  };

  const calculateTotalCost = () => {
    return Object.values(formData.services).reduce((total, cost) => {
      const numericCost = parseFloat(cost);
      return total + (isNaN(numericCost) ? 0 : numericCost);
    }, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const transformedServices = Object.entries(formData.services).map(
      ([service_name, cost]) => ({
        service_name,
        cost: parseFloat(cost)
      })
    );
  
    const finalData = {
      ...formData,
      services: transformedServices
    };
  
    console.log("Final submitted data:", finalData); // ✅ Debug
  
    try {
      const res = await axios.post('http://localhost:5000/Technician-Register', finalData);
  
      if (res.status === 201) {
        alert(`Technician ${formData.firstName} ${formData.lastName} registered successfully!\nTotal Cost: ₹${calculateTotalCost()}`);
        setFormData({
          firstName: '',
          middleName: '',
          lastName: '',
          storeName: '',
          address: '',
          contact: '',
          email: '',
          services: {}
        });
      }
    } catch (error) {
      if (error.response?.status === 409) {
        alert('Technician already registered with this email.');
      } else if (error.response?.status === 410) {
        alert('This Store already registered.');
      } else {
        console.error('Error:', error);
        alert('Error submitting form!');
      }
    }
  };
  
    

  return (
    <div className="technician-register-container">
      <h2>Technician Registration</h2>
      <form onSubmit={handleSubmit} className="technician-form">
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="middleName" placeholder="Middle Name" onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input type="text" name="storeName" placeholder="Store Name" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
        <input type="tel" name="contact" placeholder="Contact Number" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />

        <label>Select Services and Enter Price:</label>
        <div className="service-checkboxes">
          {servicesList.map(service => (
            <div key={service} className="service-option">
              <label>
                <input
                  type="checkbox"
                  checked={formData.services[service] !== undefined}
                  onChange={() => handleServiceToggle(service)}
                />
                {service}
              </label>
              {formData.services[service] !== undefined && (
                <input
                  type="number"
                  placeholder="Enter cost"
                  value={formData.services[service]}
                  onChange={(e) => handleServiceCostChange(service, e.target.value)}
                  required
                />
              )}
            </div>
          ))}
        </div>

        {Object.keys(formData.services).length > 0 && (
          <div className="service-cost">
            <h4>Selected Services with Cost:</h4>
            <ul>
              {Object.entries(formData.services).map(([service, cost]) => (
                <li key={service}>{service} — ₹{cost}</li>
              ))}
            </ul>
            
          </div>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default TechnicianRegister;
