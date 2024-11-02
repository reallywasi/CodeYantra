

// // backend/routes/studentRoutes.js
// const express = require('express');
// const FacultyProfile = require('../models/facultyProfile');
// const router = express.Router();

// // Route to handle POST requests for student profile data
// router.post('/add', async (req, res) => {
//   try {
//     const newProfile = new FacultyProfile(req.body);
//     await newProfile.save();
//     res.status(201).send({ message: ' Faculty Profile saved successfully' });
//   } catch (error) {
//     res.status(500).send({ error: 'Error saving Faculty profile' });
//   }
// });

// // Route to handle GET requests to fetch student profile
// router.get('/:id', async (req, res) => {
//   try {
//     const profile = await FacultyProfile.findById(req.params.id);
//     if (!profile) return res.status(404).send({ message: 'Profile not found' });
//     res.send(profile);
//   } catch (error) {
//     res.status(500).send({ error: 'Error fetching profile' });
//   }
// });

// module.exports = router;










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
