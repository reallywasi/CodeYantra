// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to the "feedback" database in MongoDB
    const conn = await mongoose.connect('mongodb://localhost:27017/student', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
