// routes/observationRoutes.js

const express = require('express');
const Observation = require('../models/observationModel');

const router = express.Router();

// POST: Create a new observation
router.post('/', async (req, res) => {
  const {
    testName,
    observationDateTime,
    batch,
    marks,
    totalQuestions,
    time,
    programmingLanguage,
    testTopics,
  } = req.body;

  try {
    const observation = new Observation({
      testName,
      observationDateTime,
      batch,
      marks,
      totalQuestions,
      time,
      programmingLanguage,
      testTopics,
    });
    await observation.save();
    res.status(201).json(observation);
  } catch (error) {
    res.status(500).json({ error: 'Error creating observation', details: error.message });
  }
});

// GET: Fetch all observations
router.get('/', async (req, res) => {
  try {
    const observations = await Observation.find();
    res.status(200).json(observations);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching observations', details: error.message });
  }
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Observation = require('../models/observationModel');

// // POST endpoint to create a new observation
// router.post('/', async (req, res) => {
//   try {
//     const observationData = req.body;
//     const observation = new Observation(observationData);
//     await observation.save();

//     res.status(201).json({ message: 'Observation saved successfully', observation });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error saving observation', error });
//   }
// });

// module.exports = router;
