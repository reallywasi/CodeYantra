// backend/routes/feedbackRoutes.js
const express = require('express');
const { submitFeedback } = require('../controllers/feedbackController');
const router = express.Router();

// POST route to handle feedback submission
router.post('/', submitFeedback); // Correct route for handling feedback

module.exports = router;
