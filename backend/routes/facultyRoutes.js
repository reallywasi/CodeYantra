

// // // backend/routes/studentRoutes.js
// // const express = require('express');
// // const FacultyProfile = require('../models/facultyProfile');
// // const router = express.Router();

// // // Route to handle POST requests for student profile data
// // router.post('/add', async (req, res) => {
// //   try {
// //     const newProfile = new FacultyProfile(req.body);
// //     await newProfile.save();
// //     res.status(201).send({ message: ' Faculty Profile saved successfully' });
// //   } catch (error) {
// //     res.status(500).send({ error: 'Error saving Faculty profile' });
// //   }
// // });

// // // Route to handle GET requests to fetch student profile
// // router.get('/:id', async (req, res) => {
// //   try {
// //     const profile = await FacultyProfile.findById(req.params.id);
// //     if (!profile) return res.status(404).send({ message: 'Profile not found' });
// //     res.send(profile);
// //   } catch (error) {
// //     res.status(500).send({ error: 'Error fetching profile' });
// //   }
// // });

// // module.exports = router;










// // backend/routes/facultyRoutes.js
// const express = require('express');
// const Faculty = require('../models/facultyModel'); // Import the Faculty model
// const router = express.Router();

// // POST request to create a new faculty entry
// router.post('/', async (req, res) => {
//   try {
//     const { fullName, sapId, designation, universityEmail, batches } = req.body;

//     // Create a new faculty instance
//     const faculty = new Faculty({
//       fullName,
//       sapId,
//       designation,
//       universityEmail,
//       batches,
//     });

//     // Save the faculty instance to the database
//     await faculty.save();
//     res.status(201).json({ message: 'Faculty profile created successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating faculty profile', error: error.message });
//   }
// });

// module.exports = router;
































// backend/routes/facultyRoutes.js
const express = require('express');
const Faculty = require('../models/facultyModel'); // Adjust the path if needed

const router = express.Router();

// Create a new faculty member
router.post('/add', async (req, res) => {
    const { fullName, sapId, designation, universityEmail, batches } = req.body;

    // Validate required fields
    if (!fullName || !sapId || !designation || !universityEmail || !batches) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newFaculty = new Faculty({
            fullName,
            sapId,
            designation,
            universityEmail,
            batches,
        });

        const savedFaculty = await newFaculty.save();
        res.status(201).json(savedFaculty);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
});

// Get all faculty members
router.get('/', async (req, res) => {
    try {
        const faculties = await Faculty.find();
        res.status(200).json(faculties);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
});

// Get a specific faculty member by SAP ID
router.get('/:sapId', async (req, res) => {
    try {
        const faculty = await Faculty.findOne({ sapId: req.params.sapId });
        if (!faculty) {
            return res.status(404).json({ message: 'Faculty member not found' });
        }
        res.status(200).json(faculty);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
});

// Update a faculty member by SAP ID
router.put('/update/:sapId', async (req, res) => {
    const { fullName, designation, universityEmail, batches } = req.body;

    try {
        const updatedFaculty = await Faculty.findOneAndUpdate(
            { sapId: req.params.sapId },
            { fullName, designation, universityEmail, batches },
            { new: true, runValidators: true }
        );

        if (!updatedFaculty) {
            return res.status(404).json({ message: 'Faculty member not found' });
        }
        res.status(200).json(updatedFaculty);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
});

// Delete a faculty member by SAP ID
router.delete('/delete/:sapId', async (req, res) => {
    try {
        const deletedFaculty = await Faculty.findOneAndDelete({ sapId: req.params.sapId });
        if (!deletedFaculty) {
            return res.status(404).json({ message: 'Faculty member not found' });
        }
        res.status(200).json({ message: 'Faculty member deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
