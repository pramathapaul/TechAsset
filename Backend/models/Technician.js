import mongoose from 'mongoose';

const technicianSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  storeName: { type: String, unique: true },
  address: String,
  contact: String,
  email: { type: String, unique: true },
  services: [
    {
      service_name: String,
      cost: Number
    }
  ]
});

const Technician = mongoose.model('Technicians', technicianSchema);
export default Technician;
