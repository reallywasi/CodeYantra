
"use client"; 
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ObservationDetails = () => {
  const router = useRouter();
  const [testName, setTestName] = useState('');
  const [observationDateTime, setObservationDateTime] = useState('');
  const [batch, setBatch] = useState('');
  const [marks, setMarks] = useState('');
  const [totalQuestions, setTotalQuestions] = useState('');
  const [time, setTime] = useState('');
  const [programmingLanguage, setProgrammingLanguage] = useState('');
  const [testTopics, setTestTopics] = useState('');

  const handleSubmit = () => {

    router.push('/SetObservation');
  };

  return (
    <div className="p-8 max-w-6xl mx-auto bg-white rounded-lg shadow-2xl">
      <h1 className="text-4xl font-extrabold mb-10 text-dark-red">Enter Observation   <span className=' text-red-800'>Details</span>  </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Column 1 */}
        <div className="bg-gray-100 p-8 rounded-lg border border-gray-300 shadow-md">
          <div className="space-y-6">
            <div>
              <label htmlFor="testName" className="block text-lg font-semibold text-dark-red mb-2">
                Observation Name
              </label>
              <input
                type="text"
                id="testName"
                value={testName}
                onChange={(e) => setTestName(e.target.value)}
                placeholder="Enter Observation name"
                className="block w-full p-4 border border-gray-400 rounded-md shadow-sm focus:ring-dark-red focus:border-dark-red sm:text-md"
              />
            </div>

            <div>
              <label htmlFor="observationDateTime" className="block text-lg font-semibold text-dark-red mb-2">
                Observation Date and Time
              </label>
              <input
                type="datetime-local"
                id="observationDateTime"
                value={observationDateTime}
                onChange={(e) => setObservationDateTime(e.target.value)}
                className="block w-full p-4 border border-gray-400 rounded-md shadow-sm focus:ring-dark-red focus:border-dark-red sm:text-md"
              />
            </div>

            <div>
              <label htmlFor="batch" className="block text-lg font-semibold text-dark-red mb-2">
                Batch
              </label>
              <input
                type="text"
                id="batch"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                placeholder="Enter batch"
                className="block w-full p-4 border border-gray-400 rounded-md shadow-sm focus:ring-dark-red focus:border-dark-red sm:text-md"
              />
            </div>

            <div>
              <label htmlFor="marks" className="block text-lg font-semibold text-dark-red mb-2">
                Total Marks
              </label>
              <input
                type="number"
                id="marks"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                placeholder="Enter marks"
                className="block w-full p-4 border border-gray-400 rounded-md shadow-sm focus:ring-dark-red focus:border-dark-red sm:text-md"
                min="0"
              />
            </div>

            <div>
              <label htmlFor="totalQuestions" className="block text-lg font-semibold text-dark-red mb-2">
                Total Questions
              </label>
              <input
                type="number"
                id="totalQuestions"
                value={totalQuestions}
                onChange={(e) => setTotalQuestions(e.target.value)}
                placeholder="Enter total number of questions"
                className="block w-full p-4 border border-gray-400 rounded-md shadow-sm focus:ring-dark-red focus:border-dark-red sm:text-md"
                min="0"
              />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-gray-100 p-8 rounded-lg border border-gray-300 shadow-md">
          <div className="space-y-6">
            <div>
              <label htmlFor="programmingLanguage" className="block text-lg font-semibold text-dark-red mb-2">
                Programming Language
              </label>
              <input
                type="text"
                id="programmingLanguage"
                value={programmingLanguage}
                onChange={(e) => setProgrammingLanguage(e.target.value)}
                placeholder="Enter programming language"
                className="block w-full p-4 border border-gray-400 rounded-md shadow-sm focus:ring-dark-red focus:border-dark-red sm:text-md"
              />
            </div>

            <div>
              <label htmlFor="testTopics" className="block text-lg font-semibold text-dark-red mb-2">
                Test Topics
              </label>
              <textarea
                id="testTopics"
                value={testTopics}
                onChange={(e) => setTestTopics(e.target.value)}
                placeholder="Enter test topics"
                rows="4"
                className="block w-full p-4 border border-gray-400 rounded-md shadow-sm focus:ring-dark-red focus:border-dark-red sm:text-md"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-lg font-semibold text-dark-red mb-2">
                Time (in minutes)
              </label>
              <input
                type="number"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Enter time in minutes"
                className="block w-full p-4 border border-gray-400 rounded-md shadow-sm focus:ring-dark-red focus:border-dark-red sm:text-md"
                min="0"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="mt-10 bg-red-800 text-white py-4 px-8 rounded-md shadow-lg hover:bg-red-600 focus:ring-2 focus:ring-light-red focus:outline-none transition ease-in-out duration-200"
      >
        Set Observation
      </button>
    </div>
  );
};

export default ObservationDetails;

