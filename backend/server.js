
// // backend/server.js
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config');
// const studentRoutes = require('./routes/studentRoutes');
// const feedbackRoutes=require('./routes/feedbackRoutes');
// const facultyRoutes = require('./routes/facultyRoutes');

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());  // To parse JSON bodies

// // Routes
// app.use('/api/student', studentRoutes);
// app.use('/api/feedback',feedbackRoutes);
// app.use('/api/faculty',facultyRoutes);

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// backend/server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config');
const studentRoutes = require('./routes/studentRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const facultyRoutes = require('./routes/facultyRoutes');
const questionRoutes = require('./routes/questionRoutes'); // Import question routes

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());  // To parse JSON bodies

// Routes
app.use('/api/student', studentRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/questions', questionRoutes); // Use question routes

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
