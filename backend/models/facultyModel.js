// backend/models/facultyModel.js
const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  sapId: { type: String, required: true, unique: true },
  designation: { type: String, required: true },
  universityEmail: { type: String, required: true },
  batches: { type: String, required: true },
}, { timestamps: true });

const Faculty = mongoose.model('Faculty', facultySchema);
module.exports = Faculty;
