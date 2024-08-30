
import mongoose from 'mongoose';

const observationSchema = new mongoose.Schema({
  observationName: {
    type: String,
    required: true,
    trim: true,
  },
  observationDate: {
    type: Date,
    required: true,
  },
  batch: {
    type: String,
    required: true,
    trim: true,
  },
  marks: {
    type: Number,
    required: true,
    min: 0,
  },
  totalQuestions: {
    type: Number,
    required: true,
    min: 0,
  },
  time: {
    type: Number,
    required: true,
    min: 0,
  },
  programmingLanguage: {
    type: String,
    required: true,
    trim: true,
  },
  testTopics: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, 
});

const Observation = mongoose.model('Observation', observationSchema);

export default Observation;