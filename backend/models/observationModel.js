// models/observationModel.js

const mongoose = require('mongoose');

const observationSchema = new mongoose.Schema({
  testName: { type: String, required: true },
  observationDateTime: { type: Date, required: true },
  batch: { type: String, required: true },
  marks: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  time: { type: Number, required: true }, // Time in minutes
  programmingLanguage: { type: String, required: true },
  testTopics: { type: String, required: true },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

const Observation = mongoose.model('Observation', observationSchema);

module.exports = Observation;
