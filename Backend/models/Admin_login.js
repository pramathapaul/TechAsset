import mongoose from "mongoose";

const admin_login = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
});

const Admin_Login = mongoose.model('Admin_Logins', admin_login);
export default Admin_Login;