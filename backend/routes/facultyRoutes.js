

// backend/routes/studentRoutes.js
const express = require('express');
const FacultyProfile = require('../models/facultyProfile');
const router = express.Router();

// Route to handle POST requests for student profile data
router.post('/add', async (req, res) => {
  try {
    const newProfile = new FacultyProfile(req.body);
    await newProfile.save();
    res.status(201).send({ message: ' Faculty Profile saved successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Error saving Faculty profile' });
  }
});

// Route to handle GET requests to fetch student profile
router.get('/:id', async (req, res) => {
  try {
    const profile = await FacultyProfile.findById(req.params.id);
    if (!profile) return res.status(404).send({ message: 'Profile not found' });
    res.send(profile);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching profile' });
  }
});

module.exports = router;
