"use client"
// pages/rankings.jsx

import { useState } from 'react';

const sampleData = [
  {
    observation: 'Weekly Observation 1 - AI/ML Batch 8',
    rankings: [
      { name: 'Amit Kumar', specialization: 'AI/ML', batch: '8', rank: 1 },
      { name: 'Ravi Patel', specialization: 'AI/ML', batch: '8', rank: 2 },
      { name: 'Pooja Sharma', specialization: 'AI/ML', batch: '8', rank: 3 },
      { name: 'Neha Singh', specialization: 'AI/ML', batch: '8', rank: 4 },
      { name: 'Rohit Verma', specialization: 'AI/ML', batch: '8', rank: 5 },
      { name: 'Sita Yadav', specialization: 'AI/ML', batch: '8', rank: 6 },
      { name: 'Vikram Singh', specialization: 'AI/ML', batch: '8', rank: 7 },
      { name: 'Anjali Gupta', specialization: 'AI/ML', batch: '8', rank: 8 },
      { name: 'Rajesh Reddy', specialization: 'AI/ML', batch: '8', rank: 9 },
      { name: 'Priya Desai', specialization: 'AI/ML', batch: '8', rank: 10 },
      { name: 'Karan Sharma', specialization: 'AI/ML', batch: '8', rank: 11 },
      { name: 'Sheetal Rai', specialization: 'AI/ML', batch: '8', rank: 12 },
      { name: 'Ravi Kumar', specialization: 'AI/ML', batch: '8', rank: 13 },
      { name: 'Kriti Verma', specialization: 'AI/ML', batch: '8', rank: 14 },
      { name: 'Saurabh Yadav', specialization: 'AI/ML', batch: '8', rank: 15 },
    ],
  },
  {
    observation: 'Weekly Observation 2 - DevOps Batch 6',
    rankings: [
      { name: 'Raj Malhotra', specialization: 'DevOps', batch: '6', rank: 1 },
      { name: 'Kavita Patel', specialization: 'DevOps', batch: '6', rank: 2 },
      { name: 'Sandeep Kumar', specialization: 'DevOps', batch: '6', rank: 3 },
      { name: 'Rekha Singh', specialization: 'DevOps', batch: '6', rank: 4 },
      { name: 'Manoj Gupta', specialization: 'DevOps', batch: '6', rank: 5 },
      { name: 'Anita Mehta', specialization: 'DevOps', batch: '6', rank: 6 },
      { name: 'Deepak Verma', specialization: 'DevOps', batch: '6', rank: 7 },
      { name: 'Rita Sharma', specialization: 'DevOps', batch: '6', rank: 8 },
      { name: 'Ashok Kumar', specialization: 'DevOps', batch: '6', rank: 9 },
      { name: 'Seema Patel', specialization: 'DevOps', batch: '6', rank: 10 },
      { name: 'Sushil Yadav', specialization: 'DevOps', batch: '6', rank: 11 },
      { name: 'Meena Singh', specialization: 'DevOps', batch: '6', rank: 12 },
      { name: 'Ramesh Rao', specialization: 'DevOps', batch: '6', rank: 13 },
      { name: 'Geeta Gupta', specialization: 'DevOps', batch: '6', rank: 14 },
      { name: 'Vijay Reddy', specialization: 'DevOps', batch: '6', rank: 15 },
    ],
  },
  {
    observation: 'Weekly Observation 3 - Web Development Batch 4',
    rankings: [
      { name: 'Aarav Singh', specialization: 'Web Development', batch: '4', rank: 1 },
      { name: 'Isha Desai', specialization: 'Web Development', batch: '4', rank: 2 },
      { name: 'Mohan Sharma', specialization: 'Web Development', batch: '4', rank: 3 },
      { name: 'Tanu Yadav', specialization: 'Web Development', batch: '4', rank: 4 },
      { name: 'Alok Patel', specialization: 'Web Development', batch: '4', rank: 5 },
      { name: 'Neelam Gupta', specialization: 'Web Development', batch: '4', rank: 6 },
      { name: 'Ravi Reddy', specialization: 'Web Development', batch: '4', rank: 7 },
      { name: 'Sushma Singh', specialization: 'Web Development', batch: '4', rank: 8 },
      { name: 'Nitin Kumar', specialization: 'Web Development', batch: '4', rank: 9 },
      { name: 'Pallavi Mehta', specialization: 'Web Development', batch: '4', rank: 10 },
      { name: 'Vikash Rai', specialization: 'Web Development', batch: '4', rank: 11 },
      { name: 'Simran Patel', specialization: 'Web Development', batch: '4', rank: 12 },
      { name: 'Ashok Sharma', specialization: 'Web Development', batch: '4', rank: 13 },
      { name: 'Shreya Singh', specialization: 'Web Development', batch: '4', rank: 14 },
      { name: 'Rohit Gupta', specialization: 'Web Development', batch: '4', rank: 15 },
    ],
  },
  // Add additional hardcoded data for 17 more observations
  // Example for next observation
  {
    observation: 'Weekly Observation 4 - Data Science Batch 5',
    rankings: [
      { name: 'Sanjay Verma', specialization: 'Data Science', batch: '5', rank: 1 },
      { name: 'Poonam Yadav', specialization: 'Data Science', batch: '5', rank: 2 },
      { name: 'Ravi Patel', specialization: 'Data Science', batch: '5', rank: 3 },
      { name: 'Aarti Sharma', specialization: 'Data Science', batch: '5', rank: 4 },
      { name: 'Nikhil Singh', specialization: 'Data Science', batch: '5', rank: 5 },
      { name: 'Neha Gupta', specialization: 'Data Science', batch: '5', rank: 6 },
      { name: 'Rakesh Kumar', specialization: 'Data Science', batch: '5', rank: 7 },
      { name: 'Simran Desai', specialization: 'Data Science', batch: '5', rank: 8 },
      { name: 'Rajesh Kumar', specialization: 'Data Science', batch: '5', rank: 9 },
      { name: 'Anushka Reddy', specialization: 'Data Science', batch: '5', rank: 10 },
      { name: 'Kunal Singh', specialization: 'Data Science', batch: '5', rank: 11 },
      { name: 'Madhuri Patel', specialization: 'Data Science', batch: '5', rank: 12 },
      { name: 'Ajay Gupta', specialization: 'Data Science', batch: '5', rank: 13 },
      { name: 'Nidhi Sharma', specialization: 'Data Science', batch: '5', rank: 14 },
      { name: 'Vivek Reddy', specialization: 'Data Science', batch: '5', rank: 15 },
    ],
  },
  // Repeat this pattern to add 16 more observations
];

const getColorByRank = (rank) => {
  if (rank <= 5) return 'bg-green-100'; // Top 5
  if (rank <= 10) return 'bg-blue-100'; // Mid 5
  return 'bg-red-100'; // Bottom 5
};

const RankingsPage = () => {
  const [activeObservation, setActiveObservation] = useState(null);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-7xl w-full">
        <h1 className="text-4xl font-semibold text-gray-800 mb-10 text-center">Assessment Rankings</h1>
        <div className="space-y-8">
          {sampleData.map(({ observation, rankings }) => (
            <div key={observation} className="border border-gray-300 rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-6 bg-gray-200 text-gray-800 font-medium rounded-t-lg hover:bg-gray-300 transition-colors duration-300"
                onClick={() => setActiveObservation(activeObservation === observation ? null : observation)}
              >
                {observation}
              </button>
              {activeObservation === observation && (
                <div className="p-6 bg-white rounded-b-lg">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border-b px-4 py-2 text-left text-gray-600">Rank</th>
                        <th className="border-b px-4 py-2 text-left text-gray-600">Name</th>
                        <th className="border-b px-4 py-2 text-left text-gray-600">Specialization</th>
                        <th className="border-b px-4 py-2 text-left text-gray-600">Batch</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rankings.map(({ name, specialization, batch, rank }) => (
                        <tr key={name} className={`hover:bg-gray-50 ${getColorByRank(rank)}`}>
                          <td className="border-b px-4 py-2 text-gray-700">{rank}</td>
                          <td className="border-b px-4 py-2 text-gray-700">{name}</td>
                          <td className="border-b px-4 py-2 text-gray-700">{specialization}</td>
                          <td className="border-b px-4 py-2 text-gray-700">{batch}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RankingsPage;
