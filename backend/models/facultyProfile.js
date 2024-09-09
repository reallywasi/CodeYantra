// backend/models/studentProfile.js
const mongoose = require('mongoose');

const facultyProfileSchema = new mongoose.Schema({
  // _id: String, 
  fullName: String,
  batch: String,
  sapId: String,
  rollNo: String,
  uniEmail: String,
  phone: String,
  specialization: String,
  passingOutYear: String,
  // profileCompleted: { type: Boolean, default: false }, // New field to track profile completion

});

const FacultyProfile = mongoose.model('FacultyProfile', facultyProfileSchema);

module.exports = FacultyProfile;