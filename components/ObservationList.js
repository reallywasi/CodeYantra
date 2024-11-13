// components/ObservationList.js
"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

const ObservationList = () => {
  const [observations, setObservations] = useState([]);

  const fetchObservations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/observations');
      setObservations(response.data);
    } catch (error) {
      console.error('Error fetching observations:', error);
    }
  };

  useEffect(() => {
    fetchObservations();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Observations</h2>
      <ul className="space-y-4">
        {observations.map((obs) => (
          <li key={obs._id} className="border p-4 rounded">
            <h3 className="font-semibold">{obs.testName}</h3>
            <p>Date & Time: {new Date(obs.observationDateTime).toLocaleString()}</p>
            <p>Batch: {obs.batch}</p>
            <p>Marks: {obs.marks}</p>
            <p>Total Questions: {obs.totalQuestions}</p>
            <p>Time: {obs.time} minutes</p>
            <p>Programming Language: {obs.programmingLanguage}</p>
            <p>Topics: {obs.testTopics}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObservationList;
