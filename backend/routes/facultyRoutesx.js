// backend/routes/facultyRoutes.js
const express = require('express');
const Faculty = require('../models/facultyModel'); // Import the Faculty model
const router = express.Router();

// POST request to create a new faculty entry
router.post('/', async (req, res) => {
  try {
    const { fullName, sapId, designation, universityEmail, batches } = req.body;

    // Create a new faculty instance
    const faculty = new Faculty({
      fullName,
      sapId,
      designation,
      universityEmail,
      batches,
    });

    // Save the faculty instance to the database
    await faculty.save();
    res.status(201).json({ message: 'Faculty profile created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating faculty profile', error: error.message });
  }
});

module.exports = router;
