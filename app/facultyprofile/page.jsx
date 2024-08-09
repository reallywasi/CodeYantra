"use client";

import { useState } from "react";

const FacultyPage = () => {
  const [numQuestions, setNumQuestions] = useState(1);
  const [questions, setQuestions] = useState([{ text: "", testCases: [""], time: "" }]);
  const [activeTab, setActiveTab] = useState(0);

  const handleNumQuestionsChange = (e) => {
    const newNumQuestions = parseInt(e.target.value) || 1;
    setNumQuestions(newNumQuestions);

    const newQuestions = [...questions];
    if (newQuestions.length < newNumQuestions) {
      while (newQuestions.length < newNumQuestions) {
        newQuestions.push({ text: "", testCases: [""], time: "" });
      }
    } else {
      newQuestions.length = newNumQuestions;
    }
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index, e) => {
    const { name, value } = e.target;
    const newQuestions = [...questions];
    newQuestions[index][name] = value;
    setQuestions(newQuestions);
  };

  const handleTestCaseChange = (questionIndex, testCaseIndex, e) => {
    const { value } = e.target;
    const newQuestions = [...questions];
    newQuestions[questionIndex].testCases[testCaseIndex] = value;
    setQuestions(newQuestions);
  };

  const addTestCase = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].testCases.push("");
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    const newNumQuestions = numQuestions + 1;
    setNumQuestions(newNumQuestions);
    const newQuestions = [...questions, { text: "", testCases: [""], time: "" }];
    setQuestions(newQuestions);
    setActiveTab(newNumQuestions - 1); // Switch to the newly added question tab
  };

  const handlePublish = () => {
    console.log("Publishing questions:", questions);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto flex flex-col lg:flex-row">
      <div className="flex flex-row w-full">
        {/* Left Side */}
        <div className="flex flex-col lg:w-3/5 w-full pr-6 border-r border-gray-300">
          <h1 className="text-2xl font-semibold mb-4">Create Coding Questions</h1>

          <label htmlFor="numQuestions" className="block mb-2 text-sm font-medium">
            Number of Questions
          </label>
          <input
            type="number"
            id="numQuestions"
            value={numQuestions}
            onChange={handleNumQuestionsChange}
            className="block w-full p-2 border border-gray-300 rounded-md mb-4"
            min="1"
          />

          <div className="space-y-2 mb-4">
            {questions.map((_, questionIndex) => (
              <button
                key={questionIndex}
                onClick={() => setActiveTab(questionIndex)}
                className={`block w-full px-4 py-2 text-left rounded-md ${activeTab === questionIndex ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                Question {questionIndex + 1}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleAddQuestion}
            className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700"
          >
            Add New Question
          </button>

          {/* Question Entry Area */}
          <div className="mt-6">
            {questions.map(
                
                (question, questionIndex) => 
            
            (
              <div
                key={questionIndex}
                className={`transition-all duration-300 ${activeTab === questionIndex ? 'block' : 'hidden'}`}
              >
                <div className="bg-gray-100 p-6 mb-4 rounded-md">
                  <label className="block mb-2 text-lg font-medium">Question {questionIndex + 1}</label>
                  <textarea
                    name="text"
                    value={question.text}
                    onChange={(e) => handleQuestionChange(questionIndex, e)}
                    placeholder="Enter question text here"
                    className="block w-full h-60 p-4 border border-gray-300 rounded-md resize-none"
                  />
                </div>
              </div>
            ))
            
            }
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-2/5 w-full pl-6 flex flex-col">
          {questions.map((question, questionIndex) => (
            <div
              key={questionIndex}
              className={`transition-all duration-300 ${activeTab === questionIndex ? 'block' : 'hidden'}`}
            >
              <div className="bg-gray-50 p-6 mb-4 rounded-md">
                <label className="block mb-2 text-lg font-medium">Test Cases</label>
                {question.testCases.map((testCase, testCaseIndex) => (
                  <input
                    key={testCaseIndex}
                    type="text"
                    value={testCase}
                    onChange={(e) => handleTestCaseChange(questionIndex, testCaseIndex, e)}
                    placeholder={`Test Case ${testCaseIndex + 1}`}
                    className="block w-full p-3 border border-gray-300 rounded-md mb-3"
                  />
                ))}
                <button
                  type="button"
                  onClick={() => addTestCase(questionIndex)}
                  className="text-blue-600 hover:underline"
                >
                  Add Test Case
                </button>
              </div>

              <div className="bg-gray-50 p-6 rounded-md">
                <label className="block mb-2 text-lg font-medium">Time (in minutes)</label>
                <input
                  type="number"
                  name="time"
                  value={question.time}
                  onChange={(e) => handleQuestionChange(questionIndex, e)}
                  placeholder="Enter time in minutes"
                  className="block w-full p-3 border border-gray-300 rounded-md"
                  min="0"
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={handlePublish}
            className="mt-6 bg-blue-600 text-white p-4 rounded-md hover:bg-blue-700"
          >
            Publish Questions
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
