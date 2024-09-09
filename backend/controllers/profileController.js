// backend/controllers/profileController.js
const Profile = require('../models/Profile');

exports.submitProfile = async (req, res) => {
  try {
    console.log('Received profile data:', req.body); // Log the received data

    const { fullName, batch, sapId, rollNo, uniemail, phone, specialization, passingOutYear } = req.body;

    const profile = new Profile({
      fullName,
      batch,
      sapId,
      rollNo,
      uniemail,
      phone,
      specialization,
      passingOutYear,
    });

    await profile.save();

    console.log('Profile saved successfully'); // Log success
    res.status(201).json({ message: 'Profile submitted successfully' });
  } catch (error) {
    console.error('Error saving profile:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
