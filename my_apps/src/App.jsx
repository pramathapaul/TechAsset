import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import ServiceRequest from './pages/ServiceRequest';
import TechnicianRegister from './pages/TechnicianRegister';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/service-request" element={<ServiceRequest />} />
          <Route path="/Technician-Register" element={<TechnicianRegister />} />

          {/* Pass setIsLoggedIn to AdminLogin */}
          <Route path="/admin-login" element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />} />

          {/* Protected Route */}
          <Route
            path="/admin-dashboard"
            element={isLoggedIn ? <AdminDashboard /> : <Navigate to="/admin-login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
