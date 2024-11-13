
// "use client";
// import { useRouter } from 'next/navigation';

// import { useState } from "react";

// const SetObservation = () => {
//   const router = useRouter()
//   const [numQuestions, setNumQuestions] = useState(1);
//   const [questions, setQuestions] = useState([{ text: "", testCases: [{ input: "", output: "" }], time: "" }]);
//   const [activeTab, setActiveTab] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalQuestionIndex, setModalQuestionIndex] = useState(0);
//   const [showConfirmationModal, setShowConfirmationModal] = useState(false);
//   const [confirmationMessage, setConfirmationMessage] = useState("");
//     const [showOptions, setShowOptions] = useState(false); // Add this state

//   const handleNumQuestionsChange = (e) => {
//     const newNumQuestions = parseInt(e.target.value) || 1;
//     setNumQuestions(newNumQuestions);

//     const newQuestions = [...questions];
//     if (newQuestions.length < newNumQuestions) {
//       while (newQuestions.length < newNumQuestions) {
//         newQuestions.push({ text: "", testCases: [{ input: "", output: "" }], time: "" });
//       }
//     } else {
//       newQuestions.length = newNumQuestions;
//     }
//     setQuestions(newQuestions);
//   };

//   const handleQuestionChange = (index, e) => {
//     const { name, value } = e.target;
//     const newQuestions = [...questions];
//     newQuestions[index][name] = value;
//     setQuestions(newQuestions);
//   };

//   const handleTestCaseChange = (questionIndex, testCaseIndex, e) => {
//     const { name, value } = e.target;
//     const newQuestions = [...questions];
//     newQuestions[questionIndex].testCases[testCaseIndex][name] = value;
//     setQuestions(newQuestions);
//   };

//   const addTestCase = (questionIndex) => {
//     const newQuestions = [...questions];
//     newQuestions[questionIndex].testCases.push({ input: "", output: "" });
//     setQuestions(newQuestions);
//   };

//   const deleteTestCase = (questionIndex, testCaseIndex) => {
//     const newQuestions = [...questions];
//     newQuestions[questionIndex].testCases.splice(testCaseIndex, 1);
//     setQuestions(newQuestions);
//   };

//   const handleAddQuestion = () => {
//     const newNumQuestions = numQuestions + 1;
//     setNumQuestions(newNumQuestions);
//     const newQuestions = [...questions, { text: "", testCases: [{ input: "", output: "" }], time: "" }];
//     setQuestions(newQuestions);
//     setActiveTab(newNumQuestions - 1); // Switch to the newly added question tab
//   };

//   const handlePublish = () => {
//     setConfirmationMessage(`Are you sure you want to publish ${numQuestions} question(s) and schedule observation?`);
//     setShowConfirmationModal(true);
//   };
  
//   const handleConfirmPublish = () => {
//     console.log("Publishing questions:", questions);
//     setConfirmationMessage(`Observation scheduled for ${new Date().toLocaleString()} with ${numQuestions} question(s).`);
//     setShowConfirmationModal(false);
//     setShowOptions(true); // Show options after confirmation

//   };
  

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const nextQuestion = () => {
//     if (modalQuestionIndex < questions.length - 1) {
//       setModalQuestionIndex(modalQuestionIndex + 1);
//     }
//   };

//   const prevQuestion = () => {
//     if (modalQuestionIndex > 0) {
//       setModalQuestionIndex(modalQuestionIndex - 1);
//     }
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto flex flex-row">
//       {/* Left Side (70%) */}
//       <div className="lg:w-4/12 w-full pr-6">
//         <h1 className="text-2xl font-semibold mb-4">Create Coding   <span className='text-red-800'>Questions</span> </h1>

//         <label htmlFor="numQuestions" className="block mb-2 text-lg font-medium">
//           Number of Questions
//         </label>
//         <input
//           type="number"
//           id="numQuestions"
//           value={numQuestions}
//           onChange={handleNumQuestionsChange}
//           className="block w-full p-2 border border-gray-300 rounded-md mb-4"
//           min="1"
//         />

//         <div className="space-y-2 mb-4">
//           {questions.map((_, questionIndex) => (
//             <button
//               key={questionIndex}
//               onClick={() => setActiveTab(questionIndex)}
//               className={`block w-full px-4 py-2 text-center rounded-md ${activeTab === questionIndex ? 'bg-red-800 text-white hover:bg-red-600' : 'bg-gray-200'}`}
//             >
//               Question {questionIndex + 1}
//             </button>
//           ))}
//         </div>

//         <button
//           type="button"
//           onClick={handleAddQuestion}
//           className="bg-blue-900 w-full text-white p-3 rounded-md hover:bg-blue-800"
//         >
//           Add New Question
//         </button>

//         {/* Test Cases and Time */}
//         <div className="mt-6">
//           {questions.map((question, questionIndex) => (
//             <div
//               key={questionIndex}
//               className={`transition-all duration-300 ${activeTab === questionIndex ? 'block' : 'hidden'}`}
//             >
//               <div className="bg-gray-50 p-4 mb-4 rounded-md">
//                 <label className="block mb-2 text-lg font-medium">Test Cases</label>
//                 {question.testCases.map((testCase, testCaseIndex) => (
//                   <div key={testCaseIndex} className="flex flex-col mb-3">
//                     <input
//                       type="text"
//                       name="input"
//                       value={testCase.input}
//                       onChange={(e) => handleTestCaseChange(questionIndex, testCaseIndex, e)}
//                       placeholder={`Test Case ${testCaseIndex + 1} Input`}
//                       className="block w-full p-3 border border-gray-300 rounded-md mb-2"
//                     />
//                     <input
//                       type="text"
//                       name="output"
//                       value={testCase.output}
//                       onChange={(e) => handleTestCaseChange(questionIndex, testCaseIndex, e)}
//                       placeholder={`Test Case ${testCaseIndex + 1} Output`}
//                       className="block w-full p-3 border border-gray-300 rounded-md mb-2"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => deleteTestCase(questionIndex, testCaseIndex)}
//                       className="text-red-800 text-lg hover:underline"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={() => addTestCase(questionIndex)}
//                   className="text-blue-900 text-lg w-full text-center  hover:underline"
//                 >
//                   Add Test Case
//                 </button>
//               </div>

//               <div className="bg-gray-50 p-4 rounded-md">
//                 <label className="block mb-2 text-lg font-medium">Time (in minutes)</label>
//                 <input
//                   type="number"
//                   name="time"
//                   value={question.time}
//                   onChange={(e) => handleQuestionChange(questionIndex, e)}
//                   placeholder="Enter time in minutes"
//                   className="block w-full p-3 border border-gray-300 rounded-md"
//                   min="0"
//                 />
//               </div>
//             </div>
//           ))}

//           <div className="mt-6 flex px-4">
//             <button
//               type="button"
//               onClick={handlePublish}
//               className="bg-blue-900 text-sm text-white p-4 rounded-md hover:bg-blue-800"
//             >
//               Publish Questions
//             </button>

//             <button
//               type="button"
//               onClick={openModal}
//               className="ml-2 bg-red-800 text-sm text-white p-2 rounded-md hover:bg-red-700"
//             >
//               View Layout
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Vertical Line (30%) */}
//       <div className="hidden lg:block lg:w-1 bg-gray-300"></div>

//       {/* Right Side (70%) */}
//       <div className="lg:w-8/12 w-full pl-6">
//         <div className="bg-gray-50 p-6 rounded-md h-full">
//           <h3 className="text-lg text-center font-semibold mb-4">Enter Question</h3>
//           <textarea
//             value={questions[activeTab].text}
//             onChange={(e) => handleQuestionChange(activeTab, e)}
//             name="text"
//             placeholder="Enter question here..."
//             rows="21"
//             className="block w-full p-3 border border-gray-300 rounded-md"
//           />
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 lg:w-7/12">
//             <h2 className="text-xl font-semibold mb-4">Layout Preview</h2>
//             <div className="flex flex-col lg:flex-row">
//               {/* Left Side (70%) */}
//               <div className="lg:w-7/12 w-full pr-6 border-r border-gray-300">
//                 <h3 className="text-lg font-semibold mb-4">Create Coding Questions</h3>
//                 <div className="space-y-2 mb-4">
//                   {questions.map((_, questionIndex) => (
//                     <button
//                       key={questionIndex}
//                       onClick={() => setActiveTab(questionIndex)}
//                       className={`block w-full px-4 py-2 text-center rounded-md ${modalQuestionIndex === questionIndex ? 'bg-red-800 text-white' : 'bg-blue-900 text-white'}`}
//                     >
//                       Question {questionIndex + 1}
//                     </button>
//                   ))}
//                 </div>
//                 <div className="mt-6">
//                   {questions[modalQuestionIndex] && (
//                     <>
//                       <div className="bg-gray-50 p-4 mb-4 rounded-md">
//                         <h4 className="text-lg font-medium mb-2">Test Cases</h4>
//                         {questions[modalQuestionIndex].testCases.map((testCase, testCaseIndex) => (
//                           <div key={testCaseIndex} className="flex flex-col mb-3">
//                             <p><strong>Input:</strong> {testCase.input}</p>
//                             <p><strong>Output:</strong> {testCase.output}</p>
//                           </div>
//                         ))}
//                       </div>
//                       <div className="bg-gray-50 p-4 rounded-md">
//                         <p><strong>Time:</strong> {questions[modalQuestionIndex].time} minutes</p>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </div>

//               {/* Right Side (30%) */}
//               <div className="lg:w-5/12 w-full pl-6">
//                 <h3 className="text-lg font-semibold mb-4">Question Preview</h3>
//                 <div className="bg-gray-50 p-6 rounded-md">
//                   <textarea
//                     value={questions[modalQuestionIndex].text}
//                     readOnly
//                     rows="21"
//                     className="block w-full p-3 border border-gray-300 rounded-md"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={prevQuestion}
//                 className="bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-800"
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={nextQuestion}
//                 className="bg-red-800 text-white px-8 py-2 rounded-md hover:bg-red-700"
//               >
//                 Next
//               </button>
//               <button
//                 onClick={closeModal}
//                 className="bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-800"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* {showConfirmationModal && (
//   <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//     <div className="bg-white p-6 text-center rounded-lg shadow-md border border-gray-200 w-11/12 lg:w-7/12">
//       <h2 className="text-lg font-semibold mb-4 text-gray-800">Confirm  <span className='text-white bg-red-800 p-2 rounded-md'>Publishing</span>  </h2>
//       <p className="text-gray-600">{confirmationMessage}</p>
//       <div className="flex flex-col gap-3 mt-4">
//         {showOptions ? (
//           <>
//             <button
//               onClick={() => router.push('/facultydashboard')} // Navigate to Dashboard
//               className="bg-blue-900 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               Go to Dashboard
//             </button>
//             <button
//               onClick={() => router.push('/observation-status')} // Navigate to Observation Status
//               className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
//             >
//               View Observation Status
//             </button>
//           </>
//         ) : (
//           <>
//             <button
//               onClick={handleConfirmPublish}
//               className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               Confirm
//             </button>
//             <button
//               onClick={() => setShowConfirmationModal(false)}
//               className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
//             >
//               Cancel
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   </div>
// )} */}

// {showConfirmationModal && (
//       <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//         <div className="bg-white p-6 text-center rounded-lg shadow-md border border-gray-200 w-11/12 lg:w-7/12">
//           <h2 className="text-lg font-semibold mb-4 text-gray-800">
//             Confirm <span className="text-white bg-red-800 p-2 rounded-md">Publishing</span>
//           </h2>
//           <p className="mb-6">{confirmationMessage}</p>
//           <div className="flex justify-center space-x-4">
//             <button
//               onClick={handleConfirmPublish}
//               className="bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-800"
//             >
//               Confirm
//             </button>
//             <button
//               onClick={() => setShowConfirmationModal(false)}
//               className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     )}

//     {/* Options After Confirmation */}
//     {showOptions && (
//       <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 lg:w-7/12 text-center">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Observation Scheduled Successfully!</h3>
//           <p>{confirmationMessage}</p>
//           <div className="mt-6">
//             <button
//               onClick={() => router.push('/facultydashboard')}
//               className="bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-800"
//             >
//               Go to Dashboard
//             </button>
//             <button
//               onClick={() => router.push('/viewstatus')}
//               className="bg-red-900 text-white py-2 px-6 mx-4 rounded-md hover:bg-red-800"
//             >
// View Status
//             </button>
//             <button
//               onClick={() => setShowOptions(false)}
//               className="ml-2 bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     )}
//     </div>
//   );
// };

// export default SetObservation;


























































































// "use client";
// import { useRouter } from 'next/navigation';
// import { useState } from "react";

// const SetObservation = () => {
//   const router = useRouter();
//   const [numQuestions, setNumQuestions] = useState(1);
//   const [questions, setQuestions] = useState([{ text: "", testCases: [{ input: "", output: "" }], time: "" }]);
//   const [activeTab, setActiveTab] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalQuestionIndex, setModalQuestionIndex] = useState(0);
//   const [showConfirmationModal, setShowConfirmationModal] = useState(false);
//   const [confirmationMessage, setConfirmationMessage] = useState("");
//   const [showOptions, setShowOptions] = useState(false); 

//   const handleNumQuestionsChange = (e) => {
//     const newNumQuestions = parseInt(e.target.value) || 1;
//     setNumQuestions(newNumQuestions);

//     const newQuestions = [...questions];
//     if (newQuestions.length < newNumQuestions) {
//       while (newQuestions.length < newNumQuestions) {
//         newQuestions.push({ text: "", testCases: [{ input: "", output: "" }], time: "" });
//       }
//     } else {
//       newQuestions.length = newNumQuestions;
//     }
//     setQuestions(newQuestions);
//   };

//   const handleQuestionChange = (index, e) => {
//     const { name, value } = e.target;
//     const newQuestions = [...questions];
//     newQuestions[index][name] = value;
//     setQuestions(newQuestions);
//   };

//   const handleTestCaseChange = (questionIndex, testCaseIndex, e) => {
//     const { name, value } = e.target;
//     const newQuestions = [...questions];
//     newQuestions[questionIndex].testCases[testCaseIndex][name] = value;
//     setQuestions(newQuestions);
//   };

//   const addTestCase = (questionIndex) => {
//     const newQuestions = [...questions];
//     newQuestions[questionIndex].testCases.push({ input: "", output: "" });
//     setQuestions(newQuestions);
//   };

//   const deleteTestCase = (questionIndex, testCaseIndex) => {
//     const newQuestions = [...questions];
//     newQuestions[questionIndex].testCases.splice(testCaseIndex, 1);
//     setQuestions(newQuestions);
//   };

//   const handleAddQuestion = () => {
//     const newNumQuestions = numQuestions + 1;
//     setNumQuestions(newNumQuestions);
//     const newQuestions = [...questions, { text: "", testCases: [{ input: "", output: "" }], time: "" }];
//     setQuestions(newQuestions);
//     setActiveTab(newNumQuestions - 1); // Switch to the newly added question tab
//   };

//   const handlePublish = () => {
//     setConfirmationMessage(`Are you sure you want to publish ${numQuestions} question(s) and schedule observation?`);
//     setShowConfirmationModal(true);
//   };

//   const handleConfirmPublish = () => {
//     console.log("Publishing questions:", questions);
//     setConfirmationMessage(`Observation scheduled for ${new Date().toLocaleString()} with ${numQuestions} question(s).`);
//     setShowConfirmationModal(false);
//     setShowOptions(true);
//   };

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const nextQuestion = () => {
//     if (modalQuestionIndex < questions.length - 1) {
//       setModalQuestionIndex(modalQuestionIndex + 1);
//     }
//   };

//   const prevQuestion = () => {
//     if (modalQuestionIndex > 0) {
//       setModalQuestionIndex(modalQuestionIndex - 1);
//     }
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto flex flex-row">
//       {/* Left Side (70%) */}
//       <div className="lg:w-4/12 w-full pr-6">
//         <h1 className="text-2xl font-semibold mb-4">Create Coding <span className='text-red-800'>Questions</span></h1>

//         <label htmlFor="numQuestions" className="block mb-2 text-lg font-medium">
//           Number of Questions
//         </label>
//         <input
//           type="number"
//           id="numQuestions"
//           value={numQuestions}
//           onChange={handleNumQuestionsChange}
//           className="block w-full p-2 border border-gray-300 rounded-md mb-4"
//           min="1"
//         />

//         <div className="space-y-2 mb-4">
//           {questions.map((_, questionIndex) => (
//             <button
//               key={questionIndex}
//               onClick={() => setActiveTab(questionIndex)}
//               className={`block w-full px-4 py-2 text-center rounded-md ${activeTab === questionIndex ? 'bg-red-800 text-white hover:bg-red-600' : 'bg-gray-200'}`}
//             >
//               Question {questionIndex + 1}
//             </button>
//           ))}
//         </div>

//         <button
//           type="button"
//           onClick={handleAddQuestion}
//           className="bg-blue-900 w-full text-white p-3 rounded-md hover:bg-blue-800"
//         >
//           Add New Question
//         </button>

//         {/* Test Cases and Time */}
//         <div className="mt-6">
//           {questions.map((question, questionIndex) => (
//             <div
//               key={questionIndex}
//               className={`transition-all duration-300 ${activeTab === questionIndex ? 'block' : 'hidden'}`}
//             >
//               <div className="bg-gray-50 p-4 mb-4 rounded-md">
//                 <label className="block mb-2 text-lg font-medium">Test Cases</label>
//                 {question.testCases.map((testCase, testCaseIndex) => (
//                   <div key={testCaseIndex} className="flex flex-col mb-3">
//                     <input
//                       type="text"
//                       name="input"
//                       value={testCase.input}
//                       onChange={(e) => handleTestCaseChange(questionIndex, testCaseIndex, e)}
//                       placeholder={`Test Case ${testCaseIndex + 1} Input`}
//                       className="block w-full p-3 border border-gray-300 rounded-md mb-2"
//                     />
//                     <input
//                       type="text"
//                       name="output"
//                       value={testCase.output}
//                       onChange={(e) => handleTestCaseChange(questionIndex, testCaseIndex, e)}
//                       placeholder={`Test Case ${testCaseIndex + 1} Output`}
//                       className="block w-full p-3 border border-gray-300 rounded-md mb-2"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => deleteTestCase(questionIndex, testCaseIndex)}
//                       className="text-red-800 text-lg hover:underline"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={() => addTestCase(questionIndex)}
//                   className="text-blue-900 text-lg w-full text-center hover:underline"
//                 >
//                   Add Test Case
//                 </button>
//               </div>

//               <div className="bg-gray-50 p-4 rounded-md">
//                 <label className="block mb-2 text-lg font-medium">Time (in minutes)</label>
//                 <input
//                   type="number"
//                   name="time"
//                   value={question.time}
//                   onChange={(e) => handleQuestionChange(questionIndex, e)}
//                   placeholder="Enter time in minutes"
//                   className="block w-full p-3 border border-gray-300 rounded-md"
//                   min="0"
//                 />
//               </div>
//             </div>
//           ))}

//           <div className="mt-6 flex px-4">
//             <button
//               type="button"
//               onClick={handlePublish}
//               className="bg-blue-900 text-sm text-white p-4 rounded-md hover:bg-blue-800"
//             >
//               Publish Questions
//             </button>

//             <button
//               type="button"
//               onClick={openModal}
//               className="ml-2 bg-red-800 text-sm text-white p-2 rounded-md hover:bg-red-700"
//             >
//               View Layout
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Vertical Line (30%) */}
//       <div className="hidden lg:block lg:w-1 bg-gray-300"></div>

//       {/* Right Side (70%) */}
//       <div className="lg:w-8/12 w-full pl-6">
//         <div className="bg-gray-50 p-6 rounded-md h-full">
//           <h3 className="text-lg text-center font-semibold mb-4">Enter Question</h3>
//           <textarea
//             value={questions[activeTab].text}
//             onChange={(e) => handleQuestionChange(activeTab, e)}
//             name="text"
//             placeholder="Enter question here..."
//             rows="21"
//             className="w-full p-3 border border-gray-300 rounded-md mb-4"
//           />
//         </div>
//       </div>

//       {/* Confirmation Modal */}
//       {showConfirmationModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white rounded-md shadow-lg p-6">
//             <h3 className="text-xl font-semibold mb-4">{confirmationMessage}</h3>
//             <div className="flex justify-around">
//               <button
//                 onClick={handleConfirmPublish}
//                 className="bg-green-600 text-white p-2 rounded-md hover:bg-green-500"
//               >
//                 Confirm
//               </button>
//               <button
//                 onClick={() => setShowConfirmationModal(false)}
//                 className="bg-red-600 text-white p-2 rounded-md hover:bg-red-500"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modal for Layout Preview */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white rounded-md p-4 w-full max-w-lg">
//             <h2 className="text-xl mb-4">Layout Preview</h2>
//             <div className="overflow-y-auto max-h-96">
//               {questions.map((question, index) => (
//                 <div key={index} className="border-b py-2">
//                   <h3 className="font-semibold">Question {index + 1}</h3>
//                   <p>{question.text}</p>
//                   {question.testCases.map((testCase, testCaseIndex) => (
//                     <div key={testCaseIndex} className="ml-4">
//                       <p>Input: {testCase.input}</p>
//                       <p>Output: {testCase.output}</p>
//                     </div>
//                   ))}
//                   <p>Time: {question.time} minutes</p>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={nextQuestion}
//                 className="mr-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500"
//               >
//                 Next
//               </button>
//               <button
//                 onClick={prevQuestion}
//                 className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500"
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={closeModal}
//                 className="ml-2 bg-red-600 text-white p-2 rounded-md hover:bg-red-500"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SetObservation;






































































































// "use client";
// import { useRouter } from 'next/navigation';
// import { useState } from "react";

// const SetObservation = () => {
//   const router = useRouter();
//   const [numQuestions, setNumQuestions] = useState(1);
//   const [questions, setQuestions] = useState([{ text: "", testCases: [{ input: "", output: "" }], time: "" }]);
//   const [activeTab, setActiveTab] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalQuestionIndex, setModalQuestionIndex] = useState(0);
//   const [showConfirmationModal, setShowConfirmationModal] = useState(false);
//   const [confirmationMessage, setConfirmationMessage] = useState("");
//   const [showOptions, setShowOptions] = useState(false); 

//   const handleNumQuestionsChange = (e) => {
//     const newNumQuestions = parseInt(e.target.value) || 1;
//     setNumQuestions(newNumQuestions);

//     const newQuestions = [...questions];
//     if (newQuestions.length < newNumQuestions) {
//       while (newQuestions.length < newNumQuestions) {
//         newQuestions.push({ text: "", testCases: [{ input: "", output: "" }], time: "" });
//       }
//     } else {
//       newQuestions.length = newNumQuestions;
//     }
//     setQuestions(newQuestions);
//   };

//   const handleQuestionChange = (index, e) => {
//     const { name, value } = e.target;
//     const newQuestions = [...questions];
//     newQuestions[index][name] = value;
//     setQuestions(newQuestions);
//   };

//   const handleTestCaseChange = (questionIndex, testCaseIndex, e) => {
//     const { name, value } = e.target;
//     const newQuestions = [...questions];
//     newQuestions[questionIndex].testCases[testCaseIndex][name] = value;
//     setQuestions(newQuestions);
//   };

//   const addTestCase = (questionIndex) => {
//     const newQuestions = [...questions];
//     newQuestions[questionIndex].testCases.push({ input: "", output: "" });
//     setQuestions(newQuestions);
//   };

//   const deleteTestCase = (questionIndex, testCaseIndex) => {
//     const newQuestions = [...questions];
//     newQuestions[questionIndex].testCases.splice(testCaseIndex, 1);
//     setQuestions(newQuestions);
//   };

//   const handleAddQuestion = () => {
//     const newNumQuestions = numQuestions + 1;
//     setNumQuestions(newNumQuestions);
//     const newQuestions = [...questions, { text: "", testCases: [{ input: "", output: "" }], time: "" }];
//     setQuestions(newQuestions);
//     setActiveTab(newNumQuestions - 1); // Switch to the newly added question tab
//   };

//   const handlePublish = () => {
//     setConfirmationMessage(`Are you sure you want to publish ${numQuestions} question(s) and schedule observation?`);
//     setShowConfirmationModal(true);
//   };

//   const handleConfirmPublish = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/submitQuestions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ questions }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to publish questions');
//       }

//       console.log("Publishing questions:", questions);
//       setConfirmationMessage(`Observation scheduled for ${new Date().toLocaleString()} with ${numQuestions} question(s).`);
//       setShowConfirmationModal(false);
//       setShowOptions(true);
//     } catch (error) {
//       console.error('Error publishing questions:', error);
//       setConfirmationMessage('An error occurred while publishing questions.');
//     }
//   };

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const nextQuestion = () => {
//     if (modalQuestionIndex < questions.length - 1) {
//       setModalQuestionIndex(modalQuestionIndex + 1);
//     }
//   };

//   const prevQuestion = () => {
//     if (modalQuestionIndex > 0) {
//       setModalQuestionIndex(modalQuestionIndex - 1);
//     }
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto flex flex-row">
//       {/* Left Side (70%) */}
//       <div className="lg:w-4/12 w-full pr-6">
//         <h1 className="text-2xl font-semibold mb-4">Create Coding <span className='text-red-800'>Questions</span></h1>

//         <label htmlFor="numQuestions" className="block mb-2 text-lg font-medium">
//           Number of Questions
//         </label>
//         <input
//           type="number"
//           id="numQuestions"
//           value={numQuestions}
//           onChange={handleNumQuestionsChange}
//           className="block w-full p-2 border border-gray-300 rounded-md mb-4"
//           min="1"
//         />

//         <div className="space-y-2 mb-4">
//           {questions.map((_, questionIndex) => (
//             <button
//               key={questionIndex}
//               onClick={() => setActiveTab(questionIndex)}
//               className={`block w-full px-4 py-2 text-center rounded-md ${activeTab === questionIndex ? 'bg-red-800 text-white hover:bg-red-600' : 'bg-gray-200'}`}
//             >
//               Question {questionIndex + 1}
//             </button>
//           ))}
//         </div>

//         <button
//           type="button"
//           onClick={handleAddQuestion}
//           className="bg-blue-900 w-full text-white p-3 rounded-md hover:bg-blue-800"
//         >
//           Add New Question
//         </button>

//         {/* Test Cases and Time */}
//         <div className="mt-6">
//           {questions.map((question, questionIndex) => (
//             <div
//               key={questionIndex}
//               className={`transition-all duration-300 ${activeTab === questionIndex ? 'block' : 'hidden'}`}
//             >
//               <div className="bg-gray-50 p-4 mb-4 rounded-md">
//                 <label className="block mb-2 text-lg font-medium">Test Cases</label>
//                 {question.testCases.map((testCase, testCaseIndex) => (
//                   <div key={testCaseIndex} className="flex flex-col mb-3">
//                     <input
//                       type="text"
//                       name="input"
//                       value={testCase.input}
//                       onChange={(e) => handleTestCaseChange(questionIndex, testCaseIndex, e)}
//                       placeholder={`Test Case ${testCaseIndex + 1} Input`}
//                       className="block w-full p-3 border border-gray-300 rounded-md mb-2"
//                     />
//                     <input
//                       type="text"
//                       name="output"
//                       value={testCase.output}
//                       onChange={(e) => handleTestCaseChange(questionIndex, testCaseIndex, e)}
//                       placeholder={`Test Case ${testCaseIndex + 1} Output`}
//                       className="block w-full p-3 border border-gray-300 rounded-md mb-2"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => deleteTestCase(questionIndex, testCaseIndex)}
//                       className="text-red-800 text-lg hover:underline"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={() => addTestCase(questionIndex)}
//                   className="text-blue-900 text-lg w-full text-center hover:underline"
//                 >
//                   Add Test Case
//                 </button>
//               </div>

//               <div className="bg-gray-50 p-4 rounded-md">
//                 <label className="block mb-2 text-lg font-medium">Time (in minutes)</label>
//                 <input
//                   type="number"
//                   name="time"
//                   value={question.time}
//                   onChange={(e) => handleQuestionChange(questionIndex, e)}
//                   placeholder="Enter time in minutes"
//                   className="block w-full p-3 border border-gray-300 rounded-md"
//                   min="0"
//                 />
//               </div>
//             </div>
//           ))}

//           <div className="mt-6 flex px-4">
//             <button
//               type="button"
//               onClick={handlePublish}
//               className="bg-blue-900 text-sm text-white p-4 rounded-md hover:bg-blue-800"
//             >
//               Publish Questions
//             </button>

//             <button
//               type="button"
//               onClick={openModal}
//               className="ml-2 bg-red-800 text-sm text-white p-2 rounded-md hover:bg-red-700"
//             >
//               View Layout
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Vertical Line (30%) */}
//       <div className="hidden lg:block lg:w-1 bg-gray-300"></div>

//       {/* Right Side (70%) */}
//       <div className="lg:w-8/12 w-full pl-6">
//         <div className="bg-gray-50 p-6 rounded-md h-full">
//           <h3 className="text-lg text-center font-semibold mb-4">Enter Question</h3>
//           <textarea
//             value={questions[activeTab].text}
//             onChange={(e) => handleQuestionChange(activeTab, e)}
//             className="w-full h-40 p-3 border border-gray-300 rounded-md mb-4"
//             placeholder="Type your question here..."
//           />
//         </div>
//       </div>

//       {/* Confirmation Modal */}
//       {showConfirmationModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-md p-6 w-1/3">
//             <h2 className="text-lg font-semibold">{confirmationMessage}</h2>
//             <div className="mt-4 flex justify-around">
//               <button
//                 className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500"
//                 onClick={handleConfirmPublish}
//               >
//                 Confirm
//               </button>
//               <button
//                 className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
//                 onClick={() => setShowConfirmationModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Options After Publishing */}
//       {showOptions && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-md p-6 w-1/3">
//             <h2 className="text-lg font-semibold">{confirmationMessage}</h2>
//             <button
//               className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-500"
//               onClick={() => {
//                 router.push("/settest");
//               }}
//             >
//               Set Test
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Modal for View Layout */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-md p-6 w-3/4 max-w-3xl">
//             <h3 className="text-lg font-semibold mb-4">Preview Layout</h3>
//             <div className="space-y-4">
//               {questions.map((question, index) => (
//                 <div key={index} className="p-4 border rounded-md">
//                   <h4 className="font-semibold">Question {index + 1}</h4>
//                   <p>{question.text}</p>
//                   <h5 className="font-semibold">Test Cases:</h5>
//                   <ul>
//                     {question.testCases.map((testCase, i) => (
//                       <li key={i}>
//                         Input: {testCase.input}, Output: {testCase.output}
//                       </li>
//                     ))}
//                   </ul>
//                   <p>Time: {question.time} minutes</p>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-4 flex justify-between">
//               <button onClick={prevQuestion} disabled={modalQuestionIndex === 0} className="text-blue-500 hover:underline">
//                 Previous
//               </button>
//               <button onClick={nextQuestion} disabled={modalQuestionIndex === questions.length - 1} className="text-blue-500 hover:underline">
//                 Next
//               </button>
//               <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400">
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SetObservation;


















"use client";
import { useRouter } from 'next/navigation';
import { useState } from "react";

const SetObservation = () => {
  const router = useRouter();
  const [numQuestions, setNumQuestions] = useState(1);
  const [questions, setQuestions] = useState([{ text: "", testCases: [{ input: "", output: "" }], time: "" }]);
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalQuestionIndex, setModalQuestionIndex] = useState(0);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [showOptions, setShowOptions] = useState(false); 

  const handleNumQuestionsChange = (e) => {
    const newNumQuestions = parseInt(e.target.value) || 1;
    setNumQuestions(newNumQuestions);

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
    const newNumQuestions = numQuestions + 1;
    setNumQuestions(newNumQuestions);
    const newQuestions = [...questions, { text: "", testCases: [{ input: "", output: "" }], time: "" }];
    setQuestions(newQuestions);
    setActiveTab(newNumQuestions - 1); // Switch to the newly added question tab
  };

  const handlePublish = () => {
    setConfirmationMessage(`Are you sure you want to publish ${numQuestions} question(s) and schedule observation?`);
    setShowConfirmationModal(true);
  };

  const handleConfirmPublish = async () => {
    try {
      const response = await fetch('/api/submitQuestions', {  // Change URL to relative path
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questions }),
      });

      if (!response.ok) {
        throw new Error('Failed to publish questions');
      }

      const data = await response.json(); // Assuming your API returns JSON response
      console.log("Publishing questions:", questions);
      setConfirmationMessage(`Observation scheduled for ${new Date().toLocaleString()} with ${numQuestions} question(s).`);
      setShowConfirmationModal(false);
      setShowOptions(true);
    } catch (error) {
      console.error('Error publishing questions:', error);
      setConfirmationMessage('An error occurred while publishing questions.');
    }
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
        <h1 className="text-2xl font-semibold mb-4">Create Coding <span className='text-red-800'>Questions</span></h1>

        <label htmlFor="numQuestions" className="block mb-2 text-lg font-medium">
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
              className={`block w-full px-4 py-2 text-center rounded-md ${activeTab === questionIndex ? 'bg-red-800 text-white hover:bg-red-600' : 'bg-gray-200'}`}
            >
              Question {questionIndex + 1}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleAddQuestion}
          className="bg-blue-900 w-full text-white p-3 rounded-md hover:bg-blue-800"
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
                  <div key={testCaseIndex} className="flex flex-col mb-3">
                    <input
                      type="text"
                      name="input"
                      value={testCase.input}
                      onChange={(e) => handleTestCaseChange(questionIndex, testCaseIndex, e)}
                      placeholder={`Test Case ${testCaseIndex + 1} Input`}
                      className="block w-full p-3 border border-gray-300 rounded-md mb-2"
                    />
                    <input
                      type="text"
                      name="output"
                      value={testCase.output}
                      onChange={(e) => handleTestCaseChange(questionIndex, testCaseIndex, e)}
                      placeholder={`Test Case ${testCaseIndex + 1} Output`}
                      className="block w-full p-3 border border-gray-300 rounded-md mb-2"
                    />
                    <button
                      type="button"
                      onClick={() => deleteTestCase(questionIndex, testCaseIndex)}
                      className="text-red-800 text-lg hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addTestCase(questionIndex)}
                  className="text-blue-900 text-lg w-full text-center hover:underline"
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
              className="bg-blue-900 text-sm text-white p-4 rounded-md hover:bg-blue-800"
            >
              Publish Questions
            </button>

            <button
              type="button"
              onClick={openModal}
              className="ml-2 bg-red-800 text-sm text-white p-2 rounded-md hover:bg-red-700"
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
          <h3 className="text-lg text-center font-medium">Live Preview of Questions</h3>
          <div className="mt-4">
            {questions.map((question, index) => (
              <div key={index} className="border-b border-gray-300 py-2">
                <h4 className="text-lg font-bold">Question {index + 1}:</h4>
                <p className="text-md">{question.text}</p>
                {question.testCases.map((testCase, testCaseIndex) => (
                  <div key={testCaseIndex}>
                    <p>Input: {testCase.input}</p>
                    <p>Output: {testCase.output}</p>
                  </div>
                ))}
                <p>Time: {question.time} minutes</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for confirmation */}
      {showConfirmationModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-md shadow-lg">
            <h3 className="text-lg font-bold mb-4">{confirmationMessage}</h3>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleConfirmPublish}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400"
              >
                Yes
              </button>
              <button
                onClick={() => setShowConfirmationModal(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for question preview */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-md shadow-lg">
            <h3 className="text-lg font-bold">Preview of Question {modalQuestionIndex + 1}</h3>
            <p>{questions[modalQuestionIndex].text}</p>
            {questions[modalQuestionIndex].testCases.map((testCase, index) => (
              <div key={index}>
                <p>Input: {testCase.input}</p>
                <p>Output: {testCase.output}</p>
              </div>
            ))}
            <div className="flex justify-between mt-4">
              <button onClick={prevQuestion} disabled={modalQuestionIndex === 0} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400">Previous</button>
              <button onClick={nextQuestion} disabled={modalQuestionIndex === questions.length - 1} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400">Next</button>
            </div>
            <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetObservation;


