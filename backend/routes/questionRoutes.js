// backend/routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const Question = require('../models/Question'); // Import your Question model

// POST route to create new questions
router.post('/', async (req, res) => {
  const { questions } = req.body; // Expecting an array of questions

  try {
    // Save each question to the database
    const savedQuestions = await Question.insertMany(questions);
    res.status(201).json({ message: 'Questions saved successfully', data: savedQuestions });
  } catch (error) {
    console.error('Error saving questions:', error);
    res.status(500).json({ message: 'Failed to save questions', error: error.message });
  }
});

module.exports = router;
