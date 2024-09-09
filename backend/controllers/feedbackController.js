// controllers/feedbackController.js
const Feedback = require('../models/Feedback');

exports.submitFeedback = async (req, res) => {
  try {
    const { responseQuality, userExperience, overallSatisfaction, comments } = req.body;

    // Create a new feedback document based on the form data
    const feedback = new Feedback({
      responseQuality,
      userExperience,
      overallSatisfaction,
      comments,
    });

    // Save the feedback to the database
    await feedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
