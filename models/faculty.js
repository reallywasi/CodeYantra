const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  universityEmail: { type: String, required: true },
  sapId: { type: String, required: true },
  batches: { type: [String], required: true },  // Array of strings
  course: { type: String, required: true },
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
