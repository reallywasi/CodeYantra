// routes/feedbackRoutes.js
const express = require('express');
const { submitFeedback } = require('../controllers/feedbackController');
const router = express.Router();

// POST route to handle feedback submission
router.post('/feedback', submitFeedback);

module.exports = router;
