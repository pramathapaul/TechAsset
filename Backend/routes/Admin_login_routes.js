import express from 'express';
import Admin from '../models/Admin.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, password } = req.body;
    
    const admin = await Admin.findOne({ name, password });
    
    if (!admin) {
      return res.status(401).json({ message: 'Admin not found' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

export default router;
