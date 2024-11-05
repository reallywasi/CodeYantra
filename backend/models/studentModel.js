
// backend/models/studentModel.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  sapId: { type: String, required: true, unique: true },
  rollNumber: { type: String, required: true, unique: true },
  batch: { type: String, required: true },
  passingOutYear: { type: Number, required: true },
  universityEmail: { type: String, required: true },
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema, 'studentprofiles');
module.exports = Student;
