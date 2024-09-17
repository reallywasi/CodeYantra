const mongoose = require('mongoose');

const StudentProfileSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  batch: { type: String, required: true },
  sapId: { type: String, required: true },
  rollNo: { type: String, required: true },
  uniemail: { type: String, required: true },
  phone: { type: String, required: true },
  specialization: { type: String, required: true },
  passingOutYear: { type: String, required: true },
});

module.exports = mongoose.model('StudentProfile', StudentProfileSchema);
