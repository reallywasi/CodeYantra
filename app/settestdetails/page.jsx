"use client"; // Ensure this component is rendered client-side

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SetTestDetails = () => {
  const router = useRouter();
  const [testName, setTestName] = useState('');
  const [testDate, setTestDate] = useState('');
  const [batch, setBatch] = useState('');
  const [marks, setMarks] = useState('');
  const [totalQuestions, setTotalQuestions] = useState('');
  const [time, setTime] = useState('');
  const [programmingLanguage, setProgrammingLanguage] = useState('');
  const [testTopics, setTestTopics] = useState('');

  const handleSubmit = () => {
    // Perform any necessary validation or submission logic here

    // Navigate to /settest
    router.push('/settest');
  };

  return (
    <div className="p-8 max-w-6xl mx-auto bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Set Test Details</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column 1 */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="space-y-4">
            <div>
              <label htmlFor="testName" className="block text-sm font-medium text-gray-700 mb-2">
                Test Name
              </label>
              <input
                type="text"
                id="testName"
                value={testName}
                onChange={(e) => setTestName(e.target.value)}
                placeholder="Enter test name"
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="testDate" className="block text-sm font-medium text-gray-700 mb-2">
                Test Date
              </label>
              <input
                type="date"
                id="testDate"
                value={testDate}
                onChange={(e) => setTestDate(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="batch" className="block text-sm font-medium text-gray-700 mb-2">
                Batch
              </label>
              <input
                type="text"
                id="batch"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                placeholder="Enter batch"
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="marks" className="block text-sm font-medium text-gray-700 mb-2">
                Marks
              </label>
              <input
                type="number"
                id="marks"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                placeholder="Enter marks"
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                min="0"
              />
            </div>

            <div>
              <label htmlFor="totalQuestions" className="block text-sm font-medium text-gray-700 mb-2">
                Total Questions
              </label>
              <input
                type="number"
                id="totalQuestions"
                value={totalQuestions}
                onChange={(e) => setTotalQuestions(e.target.value)}
                placeholder="Enter total number of questions"
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                min="0"
              />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="space-y-4">
            <div>
              <label htmlFor="programmingLanguage" className="block text-sm font-medium text-gray-700 mb-2">
                Programming Language
              </label>
              <input
                type="text"
                id="programmingLanguage"
                value={programmingLanguage}
                onChange={(e) => setProgrammingLanguage(e.target.value)}
                placeholder="Enter programming language"
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="testTopics" className="block text-sm font-medium text-gray-700 mb-2">
                Test Topics
              </label>
              <textarea
                id="testTopics"
                value={testTopics}
                onChange={(e) => setTestTopics(e.target.value)}
                placeholder="Enter test topics"
                rows="4"
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                Time (in minutes)
              </label>
              <input
                type="number"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Enter time in minutes"
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                min="0"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        Set Test
      </button>
    </div>
  );
};

export default SetTestDetails;
