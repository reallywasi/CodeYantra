// backend/models/studentProfile.js
const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
  fullName: String,
  batch: String,
  sapId: String,
  rollNo: String,
  uniEmail: String,
  phone: String,
  specialization: String,
  passingOutYear: String
});

const StudentProfile = mongoose.model('StudentProfile', studentProfileSchema);

module.exports = StudentProfile;
