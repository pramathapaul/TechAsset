import express from 'express';
import Technician from '../models/Technician.js';

const router = express.Router();

// POST request for registering a technician
router.post('/', async (req, res) => {
  try {
    const { email, storeName } = req.body;

    const existingEmail = await Technician.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const existingStore = await Technician.findOne({ storeName });
    if (existingStore) {
      return res.status(410).json({ message: 'Store already registered' });
    }

    const newTech = new Technician(req.body);
    await newTech.save();

    res.status(201).json({ message: 'Technician registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET request for fetching technician data (admin dashboard)
router.get('/admin-dashboard', async (req, res) => {
  try {
    const technicians = await Technician.find();
    res.json(technicians);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch technicians' });
  }
});

export default router;
