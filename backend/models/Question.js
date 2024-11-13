// backend/models/Question.js
const mongoose = require('mongoose');

const TestCaseSchema = new mongoose.Schema({
  input: { type: String, required: true },
  output: { type: String, required: true },
});

const QuestionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  testCases: [TestCaseSchema], // Array of test cases
  time: { type: Number, required: true }, // Time allocated for the question
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
