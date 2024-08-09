"use client";

import { useState } from "react";

const FacultyPage = () => {
  const [numQuestions, setNumQuestions] = useState(1);
  const [questions, setQuestions] = useState([{ text: "", testCases: [""], time: "" }]);
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalQuestionIndex, setModalQuestionIndex] = useState(0);

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const nextQuestion = () => {
    if (modalQuestionIndex < questions.length - 1) {
      setModalQuestionIndex(modalQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (modalQuestionIndex > 0) {
      setModalQuestionIndex(modalQuestionIndex - 1);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto flex flex-row">
      {/* Left Side (70%) */}
      <div className="lg:w-4/12 w-full pr-6">
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
              className={`block w-full px-4 py-2 text-center rounded-md ${activeTab === questionIndex ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Question {questionIndex + 1}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleAddQuestion}
          className="bg-green-600 w-full text-white p-3 rounded-md hover:bg-green-700"
        >
          Add New Question
        </button>

        {/* Test Cases and Time */}
        <div className="mt-6">
          {questions.map((question, questionIndex) => (
            <div
              key={questionIndex}
              className={`transition-all duration-300 ${activeTab === questionIndex ? 'block' : 'hidden'}`}
            >
              <div className="bg-gray-50 p-4 mb-4 rounded-md">
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

              <div className="bg-gray-50 p-4 rounded-md">
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

          <div className="mt-6 flex px-4">
            <button
              type="button"
              onClick={handlePublish}
              className="bg-blue-600 text-sm text-white p-4 rounded-md hover:bg-blue-700"
            >
              Publish Questions
            </button>

            <button
              type="button"
              onClick={openModal}
              className="ml-2 bg-gray-600 text-sm text-white p-2 rounded-md hover:bg-gray-700"
            >
              View Layout
            </button>
          </div>
        </div>
      </div>

      {/* Vertical Line (30%) */}
      <div className="hidden lg:block lg:w-1 bg-gray-300"></div>

      {/* Right Side (70%) */}
      <div className="lg:w-8/12 w-full pl-6">
        <div className="bg-gray-50 p-6 rounded-md h-full">
          <h3 className="text-lg text-center font-semibold mb-4">Enter Question</h3>
          <textarea
            value={questions[activeTab].text}
            onChange={(e) => handleQuestionChange(activeTab, e)}
            name="text"
            placeholder="Enter question here..."
            rows="21"
            className="block w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 lg:w-7/12">
            <h2 className="text-xl font-semibold mb-4">Layout Preview</h2>
            <div className="flex flex-col lg:flex-row">
              {/* Left Side (70%) */}
              <div className="lg:w-7/12 w-full pr-6 border-r border-gray-300">
                <h3 className="text-lg font-semibold mb-4">Create Coding Questions</h3>
                <div className="space-y-2 mb-4">
                  {questions.map((_, questionIndex) => (
                    <div
                      key={questionIndex}
                      className={`transition-all duration-300 ${modalQuestionIndex === questionIndex ? 'block' : 'hidden'}`}
                    >
                      <div className="bg-gray-100 p-4 mb-4 rounded-md">
                        <h4 className="text-md font-medium">Question {questionIndex + 1}</h4>
                        <p className="mt-2">{questions[questionIndex].text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={prevQuestion}
                    disabled={modalQuestionIndex === 0}
                    className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextQuestion}
                    disabled={modalQuestionIndex === questions.length - 1}
                    className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
                  >
                    Next
                  </button>
                </div>
              </div>

              {/* Right Side (30%) */}
              <div className="lg:w-5/12 w-full pl-6">
              {questions[modalQuestionIndex].testCases.map((testCase, testCaseIndex) => (
                  <div key={testCaseIndex} className="bg-gray-100 p-4 mb-4 rounded-md">
                    <h4 className="text-md font-medium">Test Case {testCaseIndex + 1}</h4>
                    <p>{testCase}</p>
                  </div>
                ))}
                <div className="bg-gray-100 p-4 rounded-md mt-4">
                  <h4 className="text-md font-medium">Time</h4>
                  <p className="mt-2">{questions[modalQuestionIndex].time} minutes</p>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={closeModal}
              className="mt-4 bg-red-600 text-white p-3 rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyPage;
