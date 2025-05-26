import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [technicianData, setTechnicianData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTechnicianData = async () => {
      try {
        const response = await fetch('http://localhost:5000/admin-dashboard');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setTechnicianData(data);
        setFilteredData(data); // initialize
      } catch (err) {
        console.error('Error fetching technicians:', err);
        setError('Failed to load technicians data');
      }
    };

    fetchTechnicianData();
  }, []);

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    const filtered = technicianData.filter((tech) =>
      tech.storeName.toLowerCase().includes(term) ||
      tech.firstName.toLowerCase().includes(term) ||
      (tech.middleName && tech.middleName.toLowerCase().includes(term)) ||
      tech.lastName.toLowerCase().includes(term) ||
      tech.address.toLowerCase().includes(term)
    );
    setFilteredData(filtered);
  };

  return (
    <div className='dashboard-container'>
      <h2>Admin Dashboard</h2>

      <div className="search-row">
        <input
          type="text"
          placeholder="Search by Store Name, Name or Address"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="search-button" id='search-button' onClick={handleSearch}>Search</button>
      </div>

      {error && <p>{error}</p>}
      {filteredData.length > 0 ? (
        filteredData.map((tech, index) => (
          <div className="technician-card" key={index}>
            <h3>{tech.storeName}</h3>
            <h5>Shop Owner: {tech.firstName} {tech.middleName ? tech.middleName : ' '} {tech.lastName}</h5>
            <p>Email: {tech.email}</p>
            <p>Localhost: {tech.address}</p>
            <p>Contact: {tech.contact}</p>
            <p>Services:</p>
            <ul className="service-list">
              {tech.services.map((service, idx) => (
                <li key={idx}>{service.service_name} - ₹{service.cost}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No technicians found.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
