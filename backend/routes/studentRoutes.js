// // // backend/routes/studentRoutes.js
// // const express = require('express');
// // const StudentProfile = require('../models/StudentProfile');
// // const router = express.Router();

// // // Route to handle POST requests for student profile data
// // router.post('/add', async (req, res) => {
// //   try {
// //     const newProfile = new StudentProfile(req.body);
// //     await newProfile.save();
// //     res.status(201).send({ message: 'Profile saved successfully' });
// //   } catch (error) {
// //     res.status(500).send({ error: 'Error saving profile' });
// //   }
// // });

// // // Route to handle GET requests to fetch student profile
// // router.get('/:id', async (req, res) => {
// //   try {
// //     const profile = await StudentProfile.findById(req.params.id);
// //     if (!profile) return res.status(404).send({ message: 'Profile not found' });
// //     res.send(profile);
// //   } catch (error) {
// //     res.status(500).send({ error: 'Error fetching profile' });
// //   }
// // });

// // module.exports = router;


// const express = require('express');
// const StudentProfile = require('../models/studentProfile');
// const router = express.Router();

// // Route to handle POST requests for adding/updating student profile data
// router.post('/add', async (req, res) => {
//   try {
//     const { studentId, ...profileData } = req.body;
    
//     // Check if the profile already exists
//     let profile = await StudentProfile.findById(studentId);
    
//     if (profile) {
//       // Update existing profile
//       profile = await StudentProfile.findByIdAndUpdate(studentId, profileData, { new: true });
//       res.status(200).send({ message: 'Profile updated successfully', profile });
//     } else {
//       // Create a new profile
//       const newProfile = new StudentProfile({ _id: studentId, ...profileData });
//       await newProfile.save();
//       res.status(201).send({ message: 'Profile created successfully', profile: newProfile });
//     }
//   } catch (error) {
//     res.status(500).send({ error: 'Error saving/updating profile' });
//   }
// });

// // Route to handle GET requests to fetch student profile
// router.get('/:id', async (req, res) => {
//   try {
//     const profile = await StudentProfile.findById(req.params.id);
//     if (!profile) return res.status(404).send({ message: 'Profile not found' });
//     res.send(profile);
//   } catch (error) {
//     res.status(500).send({ error: 'Error fetching profile' });
//   }
// });

// module.exports = router;











// backend/routes/studentRoutes.js
const express = require('express');
const StudentProfile = require('../models/studentProfile');
const router = express.Router();

// Route to handle POST requests for student profile data
router.post('/add', async (req, res) => {
  try {
    const newProfile = new StudentProfile(req.body);
    await newProfile.save();
    res.status(201).send({ message: 'Profile saved successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Error saving profile' });
  }
});

// Route to handle GET requests to fetch student profile
router.get('/:id', async (req, res) => {
  try {
    const profile = await StudentProfile.findById(req.params.id);
    if (!profile) return res.status(404).send({ message: 'Profile not found' });
    res.send(profile);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching profile' });
  }
});

module.exports = router;
