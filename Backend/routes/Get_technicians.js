//Get_technicians

import express from 'express';
import Technician from '../models/Technician.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const technicians = await Technician.find();
      res.json(technicians);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch technicians' });
    }
  });
  
export default router;