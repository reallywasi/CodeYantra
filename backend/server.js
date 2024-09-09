// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const userProfileRoutes = require("./routes/userProfile");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/gitbit", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Use user profile routes
// app.use("/api/userProfile", userProfileRoutes);

// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });






// backend/server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());  // To parse JSON bodies

// Routes
app.use('/api/student', studentRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

