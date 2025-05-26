import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  name: String,
  password: String
}, { collection: 'Admin_Logins' }); // Explicitly link to your collection

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;
