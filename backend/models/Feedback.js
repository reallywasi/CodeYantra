// backend/models/Feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  responseQuality: {
    type: String,
    required: true,
  },
  userExperience: {
    type: String,
    required: true,
  },
  overallSatisfaction: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model('Feedback', feedbackSchema); // Changed model name to 'Feedback'

module.exports = Feedback;
