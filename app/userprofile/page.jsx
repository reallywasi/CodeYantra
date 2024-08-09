"use client"
import { useState } from 'react';

function UserProfile() {
  const [batch, setBatch] = useState('');
  const [sapId, setSapId] = useState('');
  const [rollNo, setRollNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ batch, sapId, rollNo });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="batch" className="block text-sm font-medium text-gray-600">Batch</label>
          <input
            type="text"
            id="batch"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your batch"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sapId" className="block text-sm font-medium text-gray-600">SAP ID</label>
          <input
            type="text"
            id="sapId"
            value={sapId}
            onChange={(e) => setSapId(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your SAP ID"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="rollNo" className="block text-sm font-medium text-gray-600">Roll No</label>
          <input
            type="text"
            id="rollNo"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your Roll No"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserProfile;
