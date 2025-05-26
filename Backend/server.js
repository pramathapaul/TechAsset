import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import technicianRoutes from './routes/technicians.js';  
import adminLoginRoutes from './routes/Admin_login_routes.js';
import gettechnician from './routes/Get_technicians.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Error:', err));

  
app.use('/Technician-Register', technicianRoutes);
app.use('/admin-login', adminLoginRoutes);
app.use('/admin-dashboard', gettechnician); 
app.use('/service-request', gettechnician);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
