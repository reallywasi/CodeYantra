"use client";
import React, { useState } from 'react';
import CodeEditor from '../../../components/CodeEditor'; // Adjust the import path as necessary

const GiveObservation = () => {
  // Example questions array; replace with your actual data
  const [questions, setQuestions] = useState(
    [
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
    ]
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [codes, setCodes] = useState({});

  // Initialize codes state with empty strings for each question
  React.useEffect(() => {
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

  // Handle form submission
  const handleSubmit = async () => {
    const currentQuestionId = questions[currentQuestionIndex]._id;
    // Replace with your submission logic
    console.log(`Submitting code for question ${currentQuestionId}:`, codes[currentQuestionId]);
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

  return (
    <div className="min-h-screen flex bg-gray-100">
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
                  className={`cursor-pointer p-4 text-sm rounded-lg transition-colors duration-300 ${currentQuestionIndex === index ? 'bg-blue-100 text-blue-800' : 'hover:bg-blue-50 hover:text-blue-600'}`}
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

        {/* Navigation and Submit */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePreviousQuestion}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Previous
          </button>
          <div className="flex gap-4">
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Submit
            </button>
            <button
              onClick={() => console.log('Compile & Run logic here')}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Compile & Run
            </button>
          </div>
          <button
            onClick={handleNextQuestion}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiveObservation;
