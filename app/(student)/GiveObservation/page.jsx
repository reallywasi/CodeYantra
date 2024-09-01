"use client";
import React, { useState, useEffect } from 'react';
import CodeEditor from '../../../components/CodeEditor'; // Adjust the import path as necessary
import { FaClock } from 'react-icons/fa'; // Import the clock icon from react-icons
import { useRouter } from 'next/navigation';

const GiveObservation = () => {
  const [questions, setQuestions] = useState([
    {
      "_id": "1",
      "title": "Two Sum - Basic",
      "description": "You are given an array of integers `nums` and a `target` integer. Your task is to return the indices of the two numbers such that they add up to the target value. Assume each input has exactly one solution, and you cannot use the same element twice.",
      "example": "Input: nums = [3, 2, 4], target = 6. Output: [1, 2]"
    },
    {
      "_id": "2",
      "title": "Two Sum - Alternate Approach",
      "description": "Given an array `nums` and an integer `target`, find two distinct indices in the array such that the numbers at these indices add up to the target. Each input will have one valid solution, and using the same number twice is not allowed.",
      "example": "Input: nums = [5, 7, 3, 8], target = 10. Output: [0, 3]"
    },
    {
      "_id": "3",
      "title": "Two Sum - Advanced",
      "description": "You need to identify the indices of two unique numbers in the array `nums` that sum up to the `target`. The problem guarantees exactly one solution per input, and each element can be used only once in the solution.",
      "example": "Input: nums = [1, 8, 6, 3], target = 9. Output: [1, 2]"
    }
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [codes, setCodes] = useState({});
  const [timeLeft, setTimeLeft] = useState(3600); // Example: 60 minutes in seconds
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [autoSubmitMessage, setAutoSubmitMessage] = useState(false);

  const router = useRouter();

  // Initialize codes state with empty strings for each question
  useEffect(() => {
    const initialCodes = {};
    questions.forEach(q => {
      initialCodes[q._id] = `// Write your C++ code here...\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!";\n    return 0;\n}`; // Example C++ code
    });
    setCodes(initialCodes);
  }, [questions]);

  // Handle code change for the current question
  const handleCodeChange = (value) => {
    const currentQuestionId = questions[currentQuestionIndex]._id;
    setCodes({
      ...codes,
      [currentQuestionId]: value || '',
    });
  };

  // Handle form submission for the entire test
  const handleSubmitTest = async () => {
    console.log("Submitting the entire test:", codes);
    // Redirect to leaderboard
    router.push('/leaderboard');
  };

  // Handle form submission for a single question
  const handleSubmit = async () => {
    console.log("Submitting code for question:", codes);
  };

  // Handle navigation
  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(Math.max(currentQuestionIndex - 1, 0));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(Math.min(currentQuestionIndex + 1, questions.length - 1));
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  // Timer countdown logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Automatically submit the test when time runs out
      handleSubmitTest();
      setAutoSubmitMessage(true);
    }
  }, [timeLeft]);

  // Convert seconds to MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Confirmation dialog logic
  const handleConfirmSubmit = () => {
    setShowConfirmation(false);
    handleSubmitTest();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Sticky Timer Navbar at the Top */}
      <div className="sticky top-0 w-full p-4 bg-gray-900 text-white flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <FaClock className="text-yellow-500" /> {/* Clock Icon */}
          <span className="text-lg font-semibold">Time Left: {formatTime(timeLeft)}</span>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Left side: Question Tiles and Problem Statement */}
        <div className="w-1/3 p-6 bg-white border-r border-gray-300 flex flex-col">
          {/* Question Tiles */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Questions</h1>
            <div className="bg-gray-50 p-4 rounded-lg shadow-lg border border-gray-300 flex-grow overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {questions.map((question, index) => (
                  <div
                    key={question._id}
                    className={`cursor-pointer p-4 text-sm rounded-lg transition-colors duration-300 ${currentQuestionIndex === index ? 'bg-red-800 text-white' : 'hover:bg-red-100'}`}
                    onClick={() => handleQuestionClick(index)}
                  >
                    <p className="font-semibold">Question {index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 flex-grow">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">{questions[currentQuestionIndex]?.title}</h1>
            <p className="text-lg mb-4 text-gray-700">{questions[currentQuestionIndex]?.description}</p>
            <h3 className="font-semibold text-gray-800 mb-2">Example:</h3>
            <p className="text-gray-700 mb-4">{questions[currentQuestionIndex]?.example}</p>
          </div>
        </div>

        {/* Right side: Code Editor */}
        <div className="w-2/3 p-6 flex flex-col">
          {/* Code Editor */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-300 flex-1 mb-4">
            <CodeEditor
              value={codes[questions[currentQuestionIndex]?._id] || ''}
              onChange={handleCodeChange}
              language="cpp" // Set language to C++
            />
          </div>

          {/* Navigation, Submit, and Submit Test */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className={`px-6 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                currentQuestionIndex === 0 ? 'bg-gray-400 text-white' : 'bg-red-800 text-white hover:bg-red-700'
              }`}
            >
              Previous
            </button>
            <div className="flex gap-4">
              <button
                onClick={handleSubmit}
                className="bg-green-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Submit
              </button>
              <button
                onClick={() => console.log('Compile & Run logic here')}
                className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Compile & Run
              </button>
            </div>
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
              className={`px-6 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                currentQuestionIndex === questions.length - 1 ? 'bg-gray-400 text-white' : 'bg-red-800 text-white hover:bg-red-700'
              }`}
            >
              Next
            </button>
          </div>

          <button
            onClick={() => setShowConfirmation(true)}
            className="bg-red-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 mb-4"
          >
            Submit Test
          </button>

          {/* Confirmation Dialog */}
          {showConfirmation && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-lg font-semibold mb-4">Are you sure you want to submit the test?</h2>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={handleConfirmSubmit}
                    className="bg-green-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    Submit Test
                  </button>
                  <button
                    onClick={() => setShowConfirmation(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Automatic Submission Message */}
          {autoSubmitMessage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-lg font-semibold mb-4">Test has been submitted automatically due to time expiration.</h2>
                <button
                  onClick={() => router.push('/leaderboard')}
                  className="bg-green-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  View Leaderboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GiveObservation;
