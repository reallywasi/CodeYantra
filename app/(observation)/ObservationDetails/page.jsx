"use client";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { MdDelete } from "react-icons/md";

import axios from 'axios'; // Import Axios

const ObservationAndQuestions = () => {
  const router = useRouter();
  const [testName, setTestName] = useState('');
  const [observationDateTime, setObservationDateTime] = useState('');
  const [batch, setBatch] = useState('');
  const [marks, setMarks] = useState('');
  const [totalQuestions, setTotalQuestions] = useState(1);
  const [questions, setQuestions] = useState([{ text: "", testCases: [{ input: "", output: "" }], time: "" }]);
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handleNumQuestionsChange = (e) => {
    const newNumQuestions = parseInt(e.target.value) || 1;
    setTotalQuestions(newNumQuestions);

    const newQuestions = [...questions];
    if (newQuestions.length < newNumQuestions) {
      while (newQuestions.length < newNumQuestions) {
        newQuestions.push({ text: "", testCases: [{ input: "", output: "" }], time: "" });
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
    const { name, value } = e.target;
    const newQuestions = [...questions];
    newQuestions[questionIndex].testCases[testCaseIndex][name] = value;
    setQuestions(newQuestions);
  };

  const addTestCase = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].testCases.push({ input: "", output: "" });
    setQuestions(newQuestions);
  };

  const deleteTestCase = (questionIndex, testCaseIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].testCases.splice(testCaseIndex, 1);
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    const newNumQuestions = totalQuestions + 1;
    setTotalQuestions(newNumQuestions);
    const newQuestions = [...questions, { text: "", testCases: [{ input: "", output: "" }], time: "" }];
    setQuestions(newQuestions);
    setActiveTab(newNumQuestions - 1); // Switch to the newly added question tab
  };

  const deleteQuestion = (index) => {
    const newQuestions = questions.filter((_, questionIndex) => questionIndex !== index);
    setQuestions(newQuestions);
    setTotalQuestions(newQuestions.length);
    setActiveTab(newQuestions.length > 0 ? Math.max(0, index - 1) : 0); // Switch to the previous tab or first if none left
  };

  const handlePublish = () => {
    setConfirmationMessage(`Are you sure you want to publish ${totalQuestions} question(s) and schedule observation?`);
    setShowConfirmationModal(true);
  };

  const handleConfirmPublish = async () => {
    try {
      // Prepare the data to be sent to the API
      const payload = {
        testName,
        observationDateTime,
        batch,
        marks,
        totalQuestions,
        questions,
      };

      // Make an API call to publish the questions
      const response = await axios.post('/api/observations', payload);

      console.log("Publishing questions response:", response.data);
      setConfirmationMessage(`Observation scheduled for ${new Date().toLocaleString()} with ${totalQuestions} question(s).`);
      setShowConfirmationModal(false);
      setShowOptions(true);
    } catch (error) {
      console.error("Error publishing questions:", error);
      setConfirmationMessage("An error occurred while publishing. Please try again.");
    }
  };

  const handleSubmit = () => {
    router.push('/SetObservation');
  };

  return (
    <div className="p-8 w-full  mx-auto bg-white rounded-lg shadow-2xl">
      <h1 className="text-4xl font-extrabold mb-10 text-dark-red">Enter Observation <span className='text-red-800'>Details</span></h1>
      <div className="grid grid-cols-3 gap-8">
        {/* Observation Details Column */}
        <div className="col-span-1 bg-gray-100 p-8 rounded-lg border border-gray-300 shadow-md">
        <div className="space-y-6">
            <div>
              <label htmlFor="testName" className="block text-lg font-semibold text-dark-red mb-2">Observation Name</label>
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
              <label htmlFor="observationDateTime" className="block text-lg font-semibold text-dark-red mb-2">Observation Date and Time</label>
              <input
                type="datetime-local"
                id="observationDateTime"
                value={observationDateTime}
                onChange={(e) => setObservationDateTime(e.target.value)}
                className="block w-full p-4 border border-gray-400 rounded-md shadow-sm focus:ring-dark-red focus:border-dark-red sm:text-md"
              />
            </div>

            <div>
              <label htmlFor="batch" className="block text-lg font-semibold text-dark-red mb-2">Batch</label>
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
              <label htmlFor="marks" className="block text-lg font-semibold text-dark-red mb-2">Total Marks</label>
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
          </div>
        </div>

        {/* Question Creation Column */}
        <div className="col-span-2 bg-gray-100 p-8 rounded-lg border border-gray-300 shadow-md overflow-auto max-h-[600px]">
  <h2 className="text-2xl font-semibold mb-4">
    Create Coding <span className='text-red-800'>Questions</span>
  </h2>

  <div className="flex flex-wrap space-x-2 space-y-2 mb-4">
    {questions.map((_, questionIndex) => (
      <div key={questionIndex} className="flex items-center bg-gray-200 rounded-md p-2">
        <button
          onClick={() => setActiveTab(questionIndex)}
          className={`block px-4 py-2 rounded-md ${activeTab === questionIndex ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-transparent'}`}
        >
          Question {questionIndex + 1}
        </button>
        <button
          type="button"
          onClick={() => deleteQuestion(questionIndex)}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 ml-2"
        >
<MdDelete />
</button>
      </div>
    ))}
  </div>

  <button
    type="button"
    onClick={handleAddQuestion}
    className="bg-red-900 w-full text-white p-3 rounded-md hover:bg-red-800 mb-4"
  >
    Add New Question
  </button>

  {/* Question Details */}
  <div className="mt-4 max-h-[400px] overflow-y-auto">
    {questions.map((question, questionIndex) => (
      activeTab === questionIndex && (
        <div key={questionIndex} className="mb-4">
          <label className="block text-lg font-medium">Question {questionIndex + 1}:</label>
          <textarea
            name="text"
            value={question.text}
            onChange={(e) => handleQuestionChange(questionIndex, e)}
            className="block w-full p-2 border border-gray-300 rounded-md mb-2"
            rows="7"
            placeholder="Enter question text"
          />
          <div>
            <h3 className="text-md font-medium">Test Cases:</h3>
            {question.testCases.map((testCase, testCaseIndex) => (
              <div key={testCaseIndex} className="flex items-start mb-2">
                <input
                  name="input"
                  value={testCase.input}
                  onChange={(e) => handleTestCaseChange(questionIndex, testCaseIndex, e)}
                  className="block w-full p-2 border border-gray-300 rounded-md mb-2 mr-2"
                  placeholder="Input"
                />
                <input
                  name="output"
                  value={testCase.output}
                  onChange={(e) => handleTestCaseChange(questionIndex, testCaseIndex, e)}
                  className="block w-full p-2 border border-gray-300 rounded-md mb-2 mr-2"
                  placeholder="Expected Output"
                />
                <button
                  type="button"
                  onClick={() => deleteTestCase(questionIndex, testCaseIndex)}
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                >
<MdDelete />
</button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addTestCase(questionIndex)}
              className="bg-blue-900 text-white p-2 rounded-md hover:bg-blue-800"
            >
              Add Test Case
            </button>
          </div>
        </div>
      )
    ))}
  </div>
</div>


      </div>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={handlePublish}
          className="bg-red-900 text-white p-4 px-6 rounded-md shadow hover:bg-red-700 transition duration-200"
        >
          Publish Questions
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h3 className="text-lg font-semibold mb-4">{confirmationMessage}</h3>
            <div className="flex justify-around">
              <button
                onClick={() => setShowConfirmationModal(false)}
                className="bg-gray-300 text-gray-800 p-3 px-8 rounded-md hover:bg-gray-400 transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmPublish}
                className="bg-red-900 text-white p-3  px-8 rounded-md shadow hover:bg-red-700 transition duration-200"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Options Modal */}
      {showOptions && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">What would you like to do next?</h2>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => router.push('/SetObservation')}
                className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500"
              >
                View Observations
              </button>
              <button
                onClick={() => setShowOptions(false)}
                className="bg-gray-400 text-white p-2 rounded-md hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ObservationAndQuestions;
