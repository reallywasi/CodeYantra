// backend/routes/facultyRoutes.js
const express = require('express');
const Faculty = require('../models/facultyModel');
const router = express.Router();

// POST route to create a new faculty profile
router.post('/', async (req, res) => {
  try {
    const facultyData = req.body;
    const newFaculty = new Faculty(facultyData);
    await newFaculty.save();
    res.status(201).json({ message: 'Faculty profile created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
