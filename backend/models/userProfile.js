const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
  fullName: String,
  batch: String,
  sapId: String,
  rollNo: String,
  email: String,
  phone: String,
  specialization: String,
  passingOutYear: String,
});

module.exports = mongoose.model("UserProfile", userProfileSchema);
