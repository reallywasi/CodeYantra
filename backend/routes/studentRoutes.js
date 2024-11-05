// backend/routes/studentRoutes.js
const express = require('express');
const Student = require('../models/studentModel'); // Adjust the path if needed

const router = express.Router();

// Create a new student
router.post('/add', async (req, res) => {
    const { fullName, sapId, rollNumber, batch, passingOutYear, universityEmail } = req.body;

    // Validate required fields
    if (!fullName || !sapId || !rollNumber || !batch || !passingOutYear || !universityEmail) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newStudent = new Student({
            fullName,
            sapId,
            rollNumber,
            batch,
            passingOutYear,
            universityEmail,
        });

        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
});

// Get all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
});

// Get a specific student by SAP ID
router.get('/:sapId', async (req, res) => {
    try {
        const student = await Student.findOne({ sapId: req.params.sapId });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
});

// Update a student by SAP ID
router.put('/update/:sapId', async (req, res) => {
    const { fullName, rollNumber, batch, passingOutYear, universityEmail } = req.body;

    try {
        const updatedStudent = await Student.findOneAndUpdate(
            { sapId: req.params.sapId },
            { fullName, rollNumber, batch, passingOutYear, universityEmail },
            { new: true, runValidators: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(updatedStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
});

// Delete a student by SAP ID
router.delete('/delete/:sapId', async (req, res) => {
    try {
        const deletedStudent = await Student.findOneAndDelete({ sapId: req.params.sapId });
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
