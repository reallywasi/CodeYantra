// components/ObservationForm.js
"use client"
import { useState } from 'react';
import axios from 'axios';

const ObservationForm = () => {
  const [testName, setTestName] = useState('');
  const [observationDateTime, setObservationDateTime] = useState('');
  const [batch, setBatch] = useState('');
  const [marks, setMarks] = useState('');
  const [totalQuestions, setTotalQuestions] = useState('');
  const [time, setTime] = useState('');
  const [programmingLanguage, setProgrammingLanguage] = useState('');
  const [testTopics, setTestTopics] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/observations', {
        testName,
        observationDateTime,
        batch,
        marks,
        totalQuestions,
        time,
        programmingLanguage,
        testTopics,
      });
      console.log('Observation created:', response.data);
      // Reset form fields
      setTestName('');
      setObservationDateTime('');
      setBatch('');
      setMarks('');
      setTotalQuestions('');
      setTime('');
      setProgrammingLanguage('');
      setTestTopics('');
    } catch (error) {
      console.error('Error creating observation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Test Name"
        value={testName}
        onChange={(e) => setTestName(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <input
        type="datetime-local"
        value={observationDateTime}
        onChange={(e) => setObservationDateTime(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Batch"
        value={batch}
        onChange={(e) => setBatch(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Total Questions"
        value={totalQuestions}
        onChange={(e) => setTotalQuestions(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Time (minutes)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Programming Language"
        value={programmingLanguage}
        onChange={(e) => setProgrammingLanguage(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Test Topics"
        value={testTopics}
        onChange={(e) => setTestTopics(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">Submit Observation</button>
    </form>
  );
};

export default ObservationForm;
