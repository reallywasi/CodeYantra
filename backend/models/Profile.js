
// models/Profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  sapId: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  uniemail: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
  },
  passingOutYear: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
