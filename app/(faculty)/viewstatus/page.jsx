// "use client"; // Ensure this component is rendered client-side

// import { useState } from 'react';

// const ViewStatus = () => {
//   const [selectedCode, setSelectedCode] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   // Hardcoded data for demonstration
//   const studentsAttending = [
//     { id: 1, name: 'Aarav Patel' },
//     { id: 2, name: 'Vivaan Sharma' },
//     { id: 3, name: 'Aditya Singh' },
//     { id: 4, name: 'Vihaan Kapoor' },
//     { id: 5, name: 'Reyansh Gupta' },
//     { id: 6, name: 'Aarav Gupta' },
//     { id: 7, name: 'Ayaan Sharma' },
//     { id: 8, name: 'Ishaan Desai' },
//     { id: 9, name: 'Arjun Reddy' },
//     { id: 10, name: 'Sai Patel' },
//     { id: 11, name: 'Kartik Yadav' },
//     { id: 12, name: 'Rohan Joshi' },
//     { id: 13, name: 'Aryan Mehta' },
//     { id: 14, name: 'Avi Jain' },
//     { id: 15, name: 'Kabir Kumar' },
//     { id: 16, name: 'Nikhil Thakur' },
//     { id: 17, name: 'Raj Singh' },
//     { id: 18, name: 'Rishi Verma' },
//     { id: 19, name: 'Krishna Bhat' },
//     { id: 20, name: 'Shivam Rao' },
//   ];

//   const studentsSubmitted = [
//     { id: 1, name: 'Aarav Patel', code: 'console.log("Hello World");', submittedAt: '2024-08-09 10:30 AM' },
//     { id: 2, name: 'Vivaan Sharma', code: 'console.log("Hello Universe");', submittedAt: '2024-08-09 11:00 AM' },
//     { id: 3, name: 'Aditya Singh', code: 'console.log("Good Morning");', submittedAt: '2024-08-09 11:30 AM' },
//     { id: 4, name: 'Vihaan Kapoor', code: 'console.log("Good Evening");', submittedAt: '2024-08-09 12:00 PM' },
//     { id: 5, name: 'Reyansh Gupta', code: 'console.log("Welcome");', submittedAt: '2024-08-09 12:30 PM' },
//   ];

//   const handleViewCode = (code) => {
//     setSelectedCode(code);
//     setShowModal(true);
//   };

//   return (
//     <div className="p-8 max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
//       <h1 className="text-4xl  text-center font-bold mb-8 text-gray-900">Test Status Overview</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Column 1: Students Attending */}
//         <div className="bg-red-50 p-6 rounded-lg border border-red-200 shadow-md">
//           <h2 className="text-2xl font-semibold mb-6 text-red-700">Students Attending</h2>
//           <div className="max-h-[400px] overflow-y-auto">
//             <ul className="space-y-4">
//               {studentsAttending.map(student => (
//                 <li key={student.id} className="p-4 bg-white border border-red-300 rounded-lg shadow-sm hover:bg-red-100 transition-colors duration-300">
//                   {student.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Column 2: Students Submitted */}
//         <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 shadow-md">
//           <h2 className="text-2xl font-semibold mb-6 text-blue-700">Students Submitted</h2>
//           <div className="max-h-[400px] overflow-y-auto">
//             <ul className="space-y-4">
//               {studentsSubmitted.map(student => (
//                 <li key={student.id} className="p-4 bg-white border border-blue-300 rounded-lg shadow-sm flex justify-between items-center hover:bg-blue-100 transition-colors duration-300">
//                   <div className="text-sm text-blue-900">
//                     <div className="font-semibold">{student.name}</div>
//                     <div className="text-xs text-blue-600">Submitted at: {student.submittedAt}</div>
//                   </div>
//                   <button
//                     onClick={() => handleViewCode(student.code)}
//                     className="ml-4 text-green-600 hover:text-green-800 font-medium text-sm"
//                   >
//                     View Code
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Modal for Viewing Code */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
//             <h3 className="text-2xl font-semibold mb-4 text-gray-900">Submitted Code</h3>
//             <pre className="bg-gray-50 p-4 rounded-md border border-gray-300 overflow-x-auto text-sm text-gray-800">{selectedCode}</pre>
//             <button
//               onClick={() => setShowModal(false)}
//               className="mt-6 bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewStatus;




























































































// "use client"; // Ensure this component is rendered client-side

// import { useState } from 'react';

// const ViewStatus = () => {
//   const [selectedQuestion, setSelectedQuestion] = useState(1);
//   const [selectedCode, setSelectedCode] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [codeRating, setCodeRating] = useState(0);

//   // Hardcoded data for demonstration
//   const questions = {
//     1: [
//       { id: 1, name: 'Aarav Patel', status: 'Doing', code: 'console.log("Hello World");', submittedAt: '2024-08-09 10:30 AM', codeRating: 0 },
//       { id: 2, name: 'Vivaan Sharma', status: 'Done', code: 'console.log("Hello Universe");', submittedAt: '2024-08-09 11:00 AM', codeRating: 0 },
//       { id: 3, name: 'Aditya Singh', status: 'Not Attended', code: 'console.log("Good Morning");', submittedAt: '', codeRating: 0 },
//     ],
//     2: [
//       { id: 4, name: 'Vihaan Kapoor', status: 'Doing', code: 'console.log("Good Evening");', submittedAt: '2024-08-09 12:00 PM', codeRating: 0 },
//       { id: 5, name: 'Reyansh Gupta', status: 'Done', code: 'console.log("Welcome");', submittedAt: '2024-08-09 12:30 PM', codeRating: 0 },
//     ],
//   };

//   const handleViewCode = (student) => {
//     setSelectedStudent(student);
//     setSelectedCode(student.code);
//     setShowModal(true);
//   };

//   const handleRatingChange = (e) => {
//     setCodeRating(Number(e.target.value));
//   };

//   const handleSubmitRating = () => {
//     if (selectedStudent) {
//       // Here you can update the code rating in your database
//       console.log(`Student ID: ${selectedStudent.id}, New Rating: ${codeRating}`);
//     }
//     setShowModal(false);
//   };

//   return (
//     <div className="p-8 max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
//       <h1 className="text-4xl text-center font-bold mb-8 text-gray-900">Test Status Overview</h1>

//       {/* Question Tabs */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4 text-gray-900">Select Question</h2>
//         <div className="flex space-x-4">
//           {Object.keys(questions).map((questionId) => (
//             <button
//               key={questionId}
//               className={`px-4 py-2 rounded ${selectedQuestion === Number(questionId) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
//               onClick={() => setSelectedQuestion(Number(questionId))}
//             >
//               Question {questionId}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Question Status Lists */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Not Attended */}
//         <div className="bg-red-50 p-6 rounded-lg border border-red-200 shadow-md">
//           <h2 className="text-2xl font-semibold mb-6 text-red-700">Not Attended</h2>
//           <div className="max-h-[400px] overflow-y-auto">
//             <ul className="space-y-4">
//               {questions[selectedQuestion].filter(student => student.status === 'Not Attended').map(student => (
//                 <li key={student.id} className="p-4 bg-white border border-red-300 rounded-lg shadow-sm">
//                   {student.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Doing */}
//         <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 shadow-md">
//           <h2 className="text-2xl font-semibold mb-6 text-yellow-700">Doing</h2>
//           <div className="max-h-[400px] overflow-y-auto">
//             <ul className="space-y-4">
//               {questions[selectedQuestion].filter(student => student.status === 'Doing').map(student => (
//                 <li key={student.id} className="p-4 bg-white border border-yellow-300 rounded-lg shadow-sm">
//                   {student.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Done */}
//         <div className="bg-green-50 p-6 rounded-lg border border-green-200 shadow-md">
//           <h2 className="text-2xl font-semibold mb-6 text-green-700">Done</h2>
//           <div className="max-h-[400px] overflow-y-auto">
//             <ul className="space-y-4">
//               {questions[selectedQuestion].filter(student => student.status === 'Done').map(student => (
//                 <li key={student.id} className="p-4 bg-white border border-green-300 rounded-lg shadow-sm flex justify-between items-center">
//                   <div className="text-sm text-green-800">
//                     <div className="font-semibold">{student.name}</div>
//                     <div className="text-xs text-green-600">Submitted at: {student.submittedAt}</div>
//                   </div>
//                   <button
//                     onClick={() => handleViewCode(student)}
//                     className="ml-4 text-green-600 hover:text-green-800 font-medium text-sm"
//                   >
//                     View Code
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Modal for Viewing Code */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
//             <h3 className="text-2xl font-semibold mb-4 text-gray-900">Submitted Code</h3>
//             <pre className="bg-gray-50 p-4 rounded-md border border-gray-300 overflow-x-auto text-sm text-gray-800">{selectedCode}</pre>
//             {selectedStudent && selectedStudent.status === 'Done' && (
//               <div className="mt-4">
//                 <label htmlFor="codeRating" className="block text-sm font-medium text-gray-700 mb-2">Mark out of 10:</label>
//                 <input
//                   type="number"
//                   id="codeRating"
//                   value={codeRating}
//                   onChange={handleRatingChange}
//                   className="w-full border border-gray-300 rounded-md p-2"
//                   min="0"
//                   max="10"
//                 />
//                 <button
//                   onClick={handleSubmitRating}
//                   className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 >
//                   Submit Rating
//                 </button>
//               </div>
//             )}
//             <button
//               onClick={() => setShowModal(false)}
//               className="mt-6 bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewStatus;























// "use client"; // Ensure this component is rendered client-side

// import { useState } from 'react';

// const ViewStatus = () => {
//   const [selectedQuestion, setSelectedQuestion] = useState(1);
//   const [selectedCode, setSelectedCode] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [marks, setMarks] = useState('');

//   // Hardcoded data for demonstration
//   const questions = {
//     1: [
//       { id: 1, name: 'Aarav Patel', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Aarav!");\n    return 0;\n}', submittedAt: '2024-08-09 10:30 AM', marks: '' },
//       { id: 2, name: 'Vivaan Sharma', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Vivaan!");\n    return 0;\n}', submittedAt: '2024-08-09 11:00 AM', marks: '' },
//       { id: 3, name: 'Aditya Singh', status: 'Not Attended', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Aditya!");\n    return 0;\n}', submittedAt: '', marks: '' },
//       { id: 4, name: 'Ananya Mehta', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Ananya!");\n    return 0;\n}', submittedAt: '2024-08-09 10:45 AM', marks: '' },
//       { id: 5, name: 'Kabir Yadav', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Kabir!");\n    return 0;\n}', submittedAt: '2024-08-09 11:15 AM', marks: '' },
//       { id: 6, name: 'Nisha Kapoor', status: 'Not Attended', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Nisha!");\n    return 0;\n}', submittedAt: '', marks: '' },
//       { id: 7, name: 'Rohan Kumar', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Rohan!");\n    return 0;\n}', submittedAt: '2024-08-09 10:50 AM', marks: '' },
//       { id: 8, name: 'Maya Verma', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Maya!");\n    return 0;\n}', submittedAt: '2024-08-09 11:20 AM', marks: '' },
//     ],
//     2: [
//       { id: 9, name: 'Vihaan Kapoor', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Vihaan!");\n    return 0;\n}', submittedAt: '2024-08-09 12:00 PM', marks: '' },
//       { id: 10, name: 'Reyansh Gupta', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Reyansh!");\n    return 0;\n}', submittedAt: '2024-08-09 12:30 PM', marks: '' },
//       { id: 11, name: 'Saanvi Agarwal', status: 'Not Attended', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Saanvi!");\n    return 0;\n}', submittedAt: '', marks: '' },
//       { id: 12, name: 'Aarav Bansal', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Aarav B!");\n    return 0;\n}', submittedAt: '2024-08-09 12:15 PM', marks: '' },
//       { id: 13, name: 'Tanya Joshi', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Tanya!");\n    return 0;\n}', submittedAt: '2024-08-09 12:45 PM', marks: '' },
//       { id: 14, name: 'Ravi Patel', status: 'Not Attended', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Ravi!");\n    return 0;\n}', submittedAt: '', marks: '' },
//       { id: 15, name: 'Isha Mehta', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Isha!");\n    return 0;\n}', submittedAt: '2024-08-09 01:00 PM', marks: '' },
//     ],
//     3: [
//       { id: 16, name: 'Nikhil Singh', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Nikhil!");\n    return 0;\n}', submittedAt: '2024-08-09 01:15 PM', marks: '' },
//       { id: 17, name: 'Priya Sharma', status: 'Not Attended', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Priya!");\n    return 0;\n}', submittedAt: '', marks: '' },
//       { id: 18, name: 'Karan Yadav', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Karan!");\n    return 0;\n}', submittedAt: '2024-08-09 01:30 PM', marks: '' },
//       { id: 19, name: 'Simran Gupta', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Simran!");\n    return 0;\n}', submittedAt: '2024-08-09 01:45 PM', marks: '' },
//       { id: 20, name: 'Arjun Rao', status: 'Not Attended', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Arjun!");\n    return 0;\n}', submittedAt: '', marks: '' },
//       { id: 21, name: 'Meera Joshi', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Meera!");\n    return 0;\n}', submittedAt: '2024-08-09 02:00 PM', marks: '' },
//       { id: 22, name: 'Raj Patel', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Raj!");\n    return 0;\n}', submittedAt: '2024-08-09 02:15 PM', marks: '' },
//     ],
//     4: [
//       { id: 23, name: 'Kriti Singh', status: 'Not Attended', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Kriti!");\n    return 0;\n}', submittedAt: '', marks: '' },
//       { id: 24, name: 'Aditya Mehta', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Aditya!");\n    return 0;\n}', submittedAt: '2024-08-09 02:30 PM', marks: '' },
//       { id: 25, name: 'Nidhi Sharma', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Nidhi!");\n    return 0;\n}', submittedAt: '2024-08-09 02:45 PM', marks: '' },
//       { id: 26, name: 'Vikram Patel', status: 'Not Attended', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Vikram!");\n    return 0;\n}', submittedAt: '', marks: '' },
//       { id: 27, name: 'Alisha Kapoor', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Alisha!");\n    return 0;\n}', submittedAt: '2024-08-09 03:00 PM', marks: '' },
//       { id: 28, name: 'Shivam Gupta', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Shivam!");\n    return 0;\n}', submittedAt: '2024-08-09 03:15 PM', marks: '' },
//       { id: 29, name: 'Sanya Mehta', status: 'Not Attended', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Sanya!");\n    return 0;\n}', submittedAt: '', marks: '' },
//       { id: 30, name: 'Amit Kumar', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, Amit!");\n    return 0;\n}', submittedAt: '2024-08-09 03:30 PM', marks: '' },
//     ],
//   };

//   const handleViewCode = (student) => {
//     setSelectedStudent(student);
//     setSelectedCode(student.code);
//     setMarks(student.marks);
//     setShowModal(true);
//   };

//   const handleMarksChange = (e) => {
//     setMarks(e.target.value);
//   };

//   const handleSubmitMarks = () => {
//     if (selectedStudent) {
//       // Here you can update the marks in your database
//       console.log(`Student ID: ${selectedStudent.id}, New Marks: ${marks}`);
//       // Update the student data with new marks (for demonstration purposes)
//       selectedStudent.marks = marks;
//     }
//     setShowModal(false);
//   };

//   const getStudentList = (status) => {
//     return questions[selectedQuestion].filter(student => student.status === status);
//   };

//   const getTotalCount = (status) => {
//     return getStudentList(status).length;
//   };

//   return (
//     <div>
//     <div className="p-8 max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
//       <h1 className="text-4xl text-center font-bold mb-8 text-gray-900">Test Status Overview</h1>

//       {/* Question Tabs */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4 text-gray-900">Select Question</h2>
//         <div className="flex space-x-4">
//           {Object.keys(questions).map((questionId) => (
//             <button
//               key={questionId}
//               className={`px-4 py-2 rounded ${selectedQuestion === Number(questionId) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
//               onClick={() => setSelectedQuestion(Number(questionId))}
//             >
//               Question {questionId}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Question Status Lists */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Not Attended */}
//         <div className="bg-red-50 p-6 rounded-lg border border-red-200 shadow-md">
//           <h2 className="text-2xl font-semibold mb-6 text-red-700">
//             Not Attended <span className="text-red-900 font-medium">({getTotalCount('Not Attended')})</span>
//           </h2>
//           <div className="max-h-[400px] overflow-y-auto">
//             <ul className="space-y-4">
//               {getStudentList('Not Attended').slice(0, 10).map(student => (
//                 <li key={student.id} className="p-4 bg-white border border-red-300 rounded-lg shadow-sm">
//                   {student.name}
//                 </li>
//               ))}
//             </ul>
//             {getTotalCount('Not Attended') > 10 && (
//               <p className="text-center text-gray-600 mt-4">Scroll to see more...</p>
//             )}
//           </div>
//         </div>

//         {/* Doing */}
//         <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 shadow-md">
//           <h2 className="text-2xl font-semibold mb-6 text-yellow-700">
//             Doing <span className="text-yellow-900 font-medium">({getTotalCount('Doing')})</span>
//           </h2>
//           <div className="max-h-[400px] overflow-y-auto">
//             <ul className="space-y-4">
//               {getStudentList('Doing').slice(0, 10).map(student => (
//                 <li key={student.id} className="p-4 bg-white border border-yellow-300 rounded-lg shadow-sm">
//                   {student.name}
//                 </li>
//               ))}
//             </ul>
//             {getTotalCount('Doing') > 10 && (
//               <p className="text-center text-gray-600 mt-4">Scroll to see more...</p>
//             )}
//           </div>
//         </div>

//         {/* Done */}
//         <div className="bg-green-50 p-6 rounded-lg border border-green-200 shadow-md">
//           <h2 className="text-2xl font-semibold mb-6 text-green-700">
//             Done <span className="text-green-900 font-medium">({getTotalCount('Done')})</span>
//           </h2>
//           <div className="max-h-[400px] overflow-y-auto">
//             <ul className="space-y-4">
//               {getStudentList('Done').slice(0, 10).map(student => (
//                 <li key={student.id} className="p-4 bg-white border border-green-300 rounded-lg shadow-sm flex justify-between items-center">
//                   <div className="text-sm text-green-800">
//                     <div className="font-semibold">{student.name}</div>
//                     <div className="text-xs text-green-600">Submitted at: {student.submittedAt}</div>
//                   </div>
//                   <button
//                     onClick={() => handleViewCode(student)}
//                     className="ml-4 text-green-600 hover:text-green-800 font-medium text-sm"
//                   >
//                     View Code
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             {getTotalCount('Done') > 10 && (
//               <p className="text-center text-gray-600 mt-4">Scroll to see more...</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Modal for Viewing Code */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
//             <h3 className="text-2xl font-semibold mb-4 text-gray-900">Submitted Code</h3>
//             <pre className="bg-gray-50 p-4 rounded-md border border-gray-300 overflow-x-auto text-sm text-gray-800">{selectedCode}</pre>
//             {selectedStudent && selectedStudent.status === 'Done' && (
//               <div className="mt-4">
//                 <label htmlFor="marks" className="block text-sm font-medium text-gray-700 mb-2">Enter Marks:</label>
//                 <input
//                   type="text"
//                   id="marks"
//                   value={marks}
//                   onChange={handleMarksChange}
//                   className="w-full border border-gray-300 rounded-md p-2"
//                 />
//               </div>
//             )}
//             <div className="flex justify-end space-x-4 mt-6">
//               <button
//                 onClick={handleSubmitMarks}
//                 className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               >
//                 Submit Marks
//               </button>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="bg-gray-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

  
//     </div>
//     <div className=' flex items-center justify-center w-full py-20'>
//         Here comes Compiler
//       </div>
//     </div>
//   );
// };

// export default ViewStatus;



















// This UI is to be reviewed by VK Sir

// "use client"; // Ensure this component is rendered client-side

// import { useState } from 'react';

// const ViewStatus = () => {
//   const [selectedQuestion, setSelectedQuestion] = useState(1);
//   const [selectedStatus, setSelectedStatus] = useState('Not Attended');
//   const [selectedCode, setSelectedCode] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [marks, setMarks] = useState('');

//   // Hardcoded data for demonstration
//   const questions = {
//     1: [
//       { id: 1, name: 'Aarav Patel', status: 'Not Attended', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 2, name: 'Vivaan Sharma', status: 'Doing', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 3, name: 'Aditya Singh', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '2024-08-09 10:30 AM', marks: '' },
//     ],
//     2: [
//       { id: 4, name: 'Vihaan Kapoor', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '2024-08-09 11:00 AM', marks: '' },
//       { id: 5, name: 'Reyansh Gupta', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '', marks: '' },
//     ],
//   };

//   const handleViewCode = (student) => {
//     setSelectedStudent(student);
//     setSelectedCode(student.code);
//     setMarks(student.marks);
//     setShowModal(true);
//   };

//   const handleMarksChange = (e) => {
//     setMarks(e.target.value);
//   };

//   const handleSubmitMarks = () => {
//     if (selectedStudent) {
//       // Here you can update the marks in your database
//       console.log(`Student ID: ${selectedStudent.id}, New Marks: ${marks}`);
//       // Update the student data with new marks (for demonstration purposes)
//       selectedStudent.marks = marks;
//     }
//     setShowModal(false);
//   };

//   const getStudentList = (status) => {
//     return questions[selectedQuestion].filter(student => student.status === status);
//   };

//   const getTotalCount = (status) => {
//     return getStudentList(status).length;
//   };

//   return (
//     <div className="flex h-screen font-sans">
//       {/* Left Column for Status */}
//       <div className="w-1/4 bg-red-50 p-4 border-r border-red-200">
//         <h2 className="text-xl font-semibold mb-6 text-red-700">Status</h2>
//         <ul className="space-y-2">
//           {['Not Attended', 'Doing', 'Done'].map(status => (
//             <li key={status}>
//               <button
//                 onClick={() => setSelectedStatus(status)}
//                 className={`w-full px-4 py-2 text-left rounded-lg ${selectedStatus === status ? 'bg-red-500 text-white' : 'bg-red-100 text-red-800'} hover:bg-red-400 transition-colors duration-300`}
//               >
//                 {status}
//                 <span className="ml-2 text-sm text-red-600">({getTotalCount(status)})</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Column for Questions and Student List */}
//       <div className="w-3/4 p-8 bg-red-50">
//         {/* Question Tiles */}
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold mb-4 text-red-700">Questions</h2>
//           <ul className="flex space-x-4">
//             {Object.keys(questions).map(questionId => (
//               <li key={questionId}>
//                 <button
//                   onClick={() => setSelectedQuestion(parseInt(questionId))}
//                   className={`px-4 py-2 rounded-lg ${selectedQuestion === parseInt(questionId) ? 'bg-red-500 text-white' : 'bg-red-200 text-red-800'} hover:bg-red-400 transition-colors duration-300`}
//                 >
//                   Question {questionId}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Student List for Selected Status */}
//         <div className={`bg-white p-6 rounded-lg border border-gray-200 shadow-md`}>
//           <h2 className="text-xl font-semibold mb-6 text-red-700">
//             {selectedStatus} <span className="text-gray-600 font-medium">({getTotalCount(selectedStatus)})</span>
//           </h2>
//           <div className="max-h-[400px] overflow-y-auto">
//             <ul className="space-y-4">
//               {getStudentList(selectedStatus).slice(0, 10).map(student => (
//                 <li key={student.id} className={`p-4 bg-white border border-gray-300 rounded-lg shadow-sm ${selectedStatus === 'Done' ? 'flex justify-between items-center' : ''}`}>
//                   <div className={`${selectedStatus === 'Done' ? 'text-sm text-gray-800' : ''}`}>
//                     <div className="font-semibold">{student.name}</div>
//                     {selectedStatus === 'Done' && (
//                       <div className="text-xs text-gray-600">Submitted at: {student.submittedAt}</div>
//                     )}
//                   </div>
//                   {selectedStatus === 'Done' && (
//                     <button
//                       onClick={() => handleViewCode(student)}
//                       className="ml-4 text-red-600 hover:text-red-800 font-medium text-sm"
//                     >
//                       View Code
//                     </button>
//                   )}
//                 </li>
//               ))}
//             </ul>
//             {getTotalCount(selectedStatus) > 10 && (
//               <p className="text-center text-gray-600 mt-4">Scroll to see more...</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Modal for Viewing Code */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
//             <h3 className="text-xl font-semibold mb-4 text-red-700">Submitted Code</h3>
//             <pre className="bg-gray-100 p-4 rounded-md border border-gray-300 overflow-x-auto text-sm text-gray-800">{selectedCode}</pre>
//             {selectedStudent && selectedStudent.status === 'Done' && (
//               <div className="mt-4">
//                 <label htmlFor="marks" className="block text-sm font-medium text-gray-700 mb-2">Enter Marks:</label>
//                 <input
//                   type="text"
//                   id="marks"
//                   value={marks}
//                   onChange={handleMarksChange}
//                   className="w-full border border-gray-300 rounded-md p-2"
//                 />
//               </div>
//             )}
//             <div className="flex justify-end space-x-4 mt-6">
//               <button
//                 onClick={handleSubmitMarks}
//                 className="bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
//               >
//                 Submit Marks
//               </button>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="bg-gray-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
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

// export default ViewStatus;



















// "use client"; // Ensure this component is rendered client-side

// import { useState } from 'react';

// const ViewStatus = () => {
//   const [selectedQuestion, setSelectedQuestion] = useState(1);
//   const [selectedStatus, setSelectedStatus] = useState('Not Attended');
//   const [selectedCode, setSelectedCode] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [marks, setMarks] = useState('');

//   // Hardcoded data for demonstration
//   const questions = {
//     1: [
//       { id: 1, name: 'Aarav Patel', status: 'Not Attended', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 2, name: 'Vivaan Sharma', status: 'Doing', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 3, name: 'Aditya Singh', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '2024-08-09 10:30 AM', marks: '' },
//     ],
//     2: [
//       { id: 4, name: 'Vihaan Kapoor', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '2024-08-09 11:00 AM', marks: '' },
//       { id: 5, name: 'Reyansh Gupta', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '', marks: '' },
//     ],
//   };

//   const handleViewCode = (student) => {
//     setSelectedStudent(student);
//     setSelectedCode(student.code);
//     setMarks(student.marks);
//     setShowModal(true);
//   };

//   const handleMarksChange = (e) => {
//     setMarks(e.target.value);
//   };

//   const handleSubmitMarks = () => {
//     if (selectedStudent) {
//       // Here you can update the marks in your database
//       console.log(`Student ID: ${selectedStudent.id}, New Marks: ${marks}`);
//       // Update the student data with new marks (for demonstration purposes)
//       selectedStudent.marks = marks;
//     }
//     setShowModal(false);
//   };

//   const getStudentList = (status) => {
//     return questions[selectedQuestion].filter(student => student.status === status);
//   };

//   const getTotalCount = (status) => {
//     return getStudentList(status).length;
//   };

//   return (
//     <div className="flex h-screen font-sans bg-gray-50">
//       {/* Left Column for Status */}
//       <div className="w-1/4 bg-red-50 p-4 border-r border-red-200">
//         <h2 className="text-xl font-semibold mb-6 text-red-700">Status</h2>
//         <ul className="space-y-2">
//           {['Not Attended', 'Doing', 'Done'].map(status => (
//             <li key={status}>
//               <button
//                 onClick={() => setSelectedStatus(status)}
//                 className={`w-full px-4 py-2 text-left rounded-lg ${selectedStatus === status ? 'bg-red-500 text-white' : 'bg-red-100 text-red-800'} hover:bg-red-400 transition-colors duration-300`}
//               >
//                 {status}
//                 <span className="ml-2 text-sm text-red-600">({getTotalCount(status)})</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Column for Questions and Student List */}
//       <div className="w-3/4 p-8">
//         {/* Question Tiles */}
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold mb-4 text-red-700">Questions</h2>
//           <ul className="flex space-x-4">
//             {Object.keys(questions).map(questionId => (
//               <li key={questionId}>
//                 <button
//                   onClick={() => setSelectedQuestion(parseInt(questionId))}
//                   className={`px-4 py-2 rounded-lg ${selectedQuestion === parseInt(questionId) ? 'bg-red-500 text-white' : 'bg-red-200 text-red-800'} hover:bg-red-400 transition-colors duration-300`}
//                 >
//                   Question {questionId}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Student List for Selected Status */}
//         <div className={`bg-white p-6 rounded-lg border border-gray-200 shadow-md`}>
//           <h2 className="text-xl font-semibold mb-6 text-red-700">
//             {selectedStatus} <span className="text-gray-600 font-medium">({getTotalCount(selectedStatus)})</span>
//           </h2>
//           <div className="max-h-[400px] overflow-y-auto">
//             <ul className="space-y-4">
//               {getStudentList(selectedStatus).slice(0, 10).map(student => (
//                 <li key={student.id} className={`p-4 border rounded-lg shadow-sm ${selectedStatus === 'Done' ? 'bg-green-50 border-green-300 text-green-800' : selectedStatus === 'Doing' ? 'bg-blue-50 border-blue-300 text-blue-800' : 'bg-red-50 border-red-300 text-red-800'}`}>
//                   <div className={`${selectedStatus === 'Done' ? 'text-sm text-gray-800' : ''}`}>
//                     <div className="font-semibold">{student.name}</div>
//                     {selectedStatus === 'Done' && (
//                       <div className="text-xs text-gray-600">Submitted at: {student.submittedAt}</div>
//                     )}
//                   </div>
//                   {selectedStatus === 'Done' && (
//                     <button
//                       onClick={() => handleViewCode(student)}
//                       className="ml-4 text-red-600 hover:text-red-800 font-medium text-sm"
//                     >
//                       View Code
//                     </button>
//                   )}
//                 </li>
//               ))}
//             </ul>
//             {getTotalCount(selectedStatus) > 10 && (
//               <p className="text-center text-gray-600 mt-4">Scroll to see more...</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Modal for Viewing Code */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
//             <h3 className="text-xl font-semibold mb-4 text-red-700">Submitted Code</h3>
//             <pre className="bg-gray-100 p-4 rounded-md border border-gray-300 overflow-x-auto text-sm text-gray-800">{selectedCode}</pre>
//             {selectedStudent && selectedStudent.status === 'Done' && (
//               <div className="mt-4">
//                 <label htmlFor="marks" className="block text-sm font-medium text-gray-700 mb-2">Enter Marks:</label>
//                 <input
//                   type="text"
//                   id="marks"
//                   value={marks}
//                   onChange={handleMarksChange}
//                   className="w-full border border-gray-300 rounded-md p-2"
//                 />
//               </div>
//             )}
//             <div className="flex justify-end space-x-4 mt-6">
//               <button
//                 onClick={handleSubmitMarks}
//                 className="bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
//               >
//                 Submit Marks
//               </button>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="bg-gray-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
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

// export default ViewStatus;













// SHOW THIS TOO


// "use client"; // Ensure this component is rendered client-side

// import { useState } from 'react';

// const ViewStatus = () => {
//   const [selectedQuestion, setSelectedQuestion] = useState(1);
//   const [selectedStatus, setSelectedStatus] = useState('Not Attended');
//   const [selectedCode, setSelectedCode] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [marks, setMarks] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');

//   // Hardcoded data for demonstration
//   const questions = {
//     "1": [
//       { id: 1, name: 'Aarav Patel', sapId: '500110709', status: 'Not Attended', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 2, name: 'Vivaan Sharma', sapId: '500110710', status: 'Doing', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 3, name: 'Aditya Singh', sapId: '500110711', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '10:30 AM', marks: '' },
//       { id: 4, name: 'Aarav Patel', sapId: '500110712', status: 'Not Attended', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 5, name: 'Vivaan Sharma', sapId: '500110713', status: 'Doing', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 6, name: 'Aditya Singh', sapId: '500110714', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '10:30 AM', marks: '' },
//       { id: 7, name: 'Aarav Patel', sapId: '500110715', status: 'Not Attended', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 8, name: 'Vivaan Sharma', sapId: '500110716', status: 'Doing', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 9, name: 'Aditya Singh', sapId: '500110717', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '10:30 AM', marks: '' },
//       { id: 10, name: 'Aarav Patel', sapId: '500110718', status: 'Not Attended', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 11, name: 'Vivaan Sharma', sapId: '500110719', status: 'Doing', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 12, name: 'Aditya Singh', sapId: '500110720', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '10:30 AM', marks: '' }
//     ],
//     "2": [
//       { id: 4, name: 'Vihaan Kapoor', sapId: '500110721', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '11:00 AM', marks: '' },
//       { id: 5, name: 'Reyansh Gupta', sapId: '500110722', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '', marks: '' },
//       { id: 6, name: 'Vihaan Kapoor', sapId: '500110723', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '11:00 AM', marks: '' },
//       { id: 7, name: 'Reyansh Gupta', sapId: '500110724', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '', marks: '' },
//       { id: 8, name: 'Vihaan Kapoor', sapId: '500110725', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '11:00 AM', marks: '' },
//       { id: 9, name: 'Reyansh Gupta', sapId: '500110726', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '', marks: '' },
//       { id: 10, name: 'Vihaan Kapoor', sapId: '500110727', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '11:00 AM', marks: '' },
//       { id: 11, name: 'Reyansh Gupta', sapId: '500110728', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '', marks: '' },
//       { id: 12, name: 'Vihaan Kapoor', sapId: '500110729', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '11:00 AM', marks: '' },
//       { id: 13, name: 'Reyansh Gupta', sapId: '500110730', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '', marks: '' }
//     ]
//   };  

//   const handleViewCode = (student) => {
//     setSelectedStudent(student);
//     setSelectedCode(student.code);
//     setMarks(student.marks);
//     setShowModal(true);
//   };

//   const handleMarksChange = (e) => {
//     setMarks(e.target.value);
//   };

//   const handleSubmitMarks = () => {
//     if (selectedStudent) {
//       // Here you can update the marks in your database
//       console.log(`Student ID: ${selectedStudent.id}, New Marks: ${marks}`);
//       // Update the student data with new marks (for demonstration purposes)
//       selectedStudent.marks = marks;
//     }
//     setShowModal(false);
//   };

//   const getStudentList = (status) => {
//     return questions[selectedQuestion]
//       .filter(student => student.status === status)
//       .filter(student => student.name.toLowerCase().includes(searchQuery.toLowerCase()));
//   };

//   const getTotalCount = (status) => {
//     return getStudentList(status).length;
//   };

//   return (
//     <div className="flex h-screen font-sans bg-gray-50">
//       {/* Left Column for Status */}
//       <div className="w-1/4 bg-red-50 p-4 border-r border-red-200">
//         <h2 className="text-xl font-semibold mb-6 text-red-800">Status</h2>
//         <ul className="space-y-2">
//           {['Not Attended', 'Doing', 'Done'].map(status => (
//             <li key={status}>
//               <button
//                 onClick={() => setSelectedStatus(status)}
//                 className={`w-full px-4 py-2 text-left rounded-lg ${selectedStatus === status ? 'bg-red-500 text-white' : 'bg-red-100 text-red-800'} hover:bg-red-400 transition-colors duration-300`}
//               >
//                 {status}
//                 <span className="ml-2 text-sm text-red-800">({getTotalCount(status)})</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Column for Questions and Student List */}
//       <div className="w-3/4 p-8">
//         {/* Question Tiles */}
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold mb-4 text-red-800">Questions</h2>
//           <ul className="flex space-x-4 mb-6">
//             {Object.keys(questions).map(questionId => (
//               <li key={questionId}>
//                 <button
//                   onClick={() => setSelectedQuestion(parseInt(questionId))}
//                   className={`px-4 py-2 rounded-lg ${selectedQuestion === parseInt(questionId) ? 'bg-red-500 text-white' : 'bg-red-200 text-red-800'} hover:bg-red-400 transition-colors duration-300`}
//                 >
//                   Question {questionId}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Search Input */}
//           <div className="mb-8">
//             <input
//               type="text"
//               placeholder="Search students..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full border border-gray-300 rounded-md p-2"
//             />
//           </div>
          
//           {/* Student List for Selected Status */}
//           <div className={`bg-white p-6 rounded-lg border border-gray-200 shadow-md`}>
//             <h2 className="text-xl font-semibold mb-6 text-red-700">
//               {selectedStatus} <span className="text-gray-600 font-medium">({getTotalCount(selectedStatus)})</span>
//             </h2>
//             <div className="max-h-[400px] overflow-y-auto">
//               <ul className="space-y-4">
//                 {getStudentList(selectedStatus).slice(0, 10).map(student => (
//                   <li key={student.id} className={`p-4 border rounded-lg shadow-sm flex items-center justify-between ${selectedStatus === 'Done' ? 'bg-green-50 border-green-300 text-green-800' : selectedStatus === 'Doing' ? 'bg-blue-50 border-blue-300 text-blue-800' : 'bg-red-50 border-red-300 text-red-800'}`}>
//                     <div className="flex flex-col">
//                       <div className="font-semibold">{student.name}</div>
//                       <div className="text-sm text-gray-600">SAP ID: {student.sapId}</div>
//                       {selectedStatus === 'Done' && (
//                         <div className="text-xs text-gray-600">Submitted at: {student.submittedAt}</div>
//                       )}
//                     </div>
//                     {selectedStatus === 'Done' && (
//                       <button
//                         onClick={() => handleViewCode(student)}
//                         className="text-red-700 hover:text-red-800 font-medium text-sm"
//                       >
//                         View Code
//                       </button>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//               {getTotalCount(selectedStatus) > 10 && (
//                 <p className="text-center text-gray-600 mt-4">Scroll to see more...</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal for Viewing Code */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
//             <h3 className="text-xl font-semibold mb-4 text-red-700">Submitted Code</h3>
//             <pre className="bg-gray-100 p-4 rounded-md border border-gray-300 overflow-x-auto text-sm text-gray-800">{selectedCode}</pre>
//             {selectedStudent && selectedStudent.status === 'Done' && (
//               <div className="mt-4">
//                 <label htmlFor="marks" className="block text-sm font-medium text-gray-700 mb-2">Enter Marks:</label>
//                 <input
//                   type="text"
//                   id="marks"
//                   value={marks}
//                   onChange={handleMarksChange}
//                   className="w-full border border-gray-300 rounded-md p-2"
//                 />
//               </div>
//             )}
//             <div className="flex justify-end space-x-4 mt-6">
//               <button
//                 onClick={handleSubmitMarks}
//                 className="bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
//               >
//                 Submit Marks
//               </button>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="bg-gray-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
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

// export default ViewStatus;







// "use client"; // Ensure this component is rendered client-side

// import { useState } from 'react';

// const ViewStatus = () => {
//   const [selectedQuestion, setSelectedQuestion] = useState(1);
//   const [selectedStatus, setSelectedStatus] = useState('Not Attended');
//   const [selectedCode, setSelectedCode] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [marks, setMarks] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');

//   // Hardcoded data for demonstration
//   const questions = {
//     1: [
//       { id: 1, name: 'Aarav Patel', sapId: '202101', status: 'Not Attended', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 2, name: 'Vivaan Sharma', sapId: '202102', status: 'Doing', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 3, name: 'Aditya Singh', sapId: '202103', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '10:30 AM', marks: '85' },
//     ],
//     2: [
//       { id: 4, name: 'Vihaan Kapoor', sapId: '202104', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '11:00 AM', marks: '90' },
//       { id: 5, name: 'Reyansh Gupta', sapId: '202105', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '', marks: '' },
//     ],
//   };

//   const handleViewCode = (student) => {
//     setSelectedStudent(student);
//     setSelectedCode(student.code);
//     setMarks(student.marks);
//     setShowModal(true);
//   };

//   const handleMarksChange = (e) => {
//     setMarks(e.target.value);
//   };

//   const handleSubmitMarks = () => {
//     if (selectedStudent) {
//       // Here you can update the marks in your database
//       console.log(`Student ID: ${selectedStudent.id}, New Marks: ${marks}`);
//       // Update the student data with new marks (for demonstration purposes)
//       selectedStudent.marks = marks;
//     }
//     setShowModal(false);
//   };

//   const getStudentList = (status) => {
//     return questions[selectedQuestion]
//       .filter(student => student.status === status)
//       .filter(student => student.name.toLowerCase().includes(searchQuery.toLowerCase()));
//   };

//   const getTotalCount = (status) => {
//     return getStudentList(status).length;
//   };

//   return (
//     <div className="flex h-screen font-sans bg-gray-50">
//       {/* Left Column for Status */}
//       <div className="w-1/4 bg-gray-800 p-4 border-r border-gray-700">
//         <h2 className="text-xl font-semibold mb-6 text-white">Status</h2>
//         <ul className="space-y-2">
//           {['Not Attended', 'Doing', 'Done'].map(status => (
//             <li key={status}>
//               <button
//                 onClick={() => setSelectedStatus(status)}
//                 className={`w-full px-4 py-2 text-left rounded-lg ${selectedStatus === status ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300'} hover:bg-red-500 transition-colors duration-300`}
//               >
//                 {status}
//                 <span className="ml-2 text-sm">{getTotalCount(status)}</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Column for Questions and Student List */}
//       <div className="w-3/4 p-8">
//         {/* Question Tiles */}
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold mb-4 text-red-700">Questions</h2>
//           <ul className="flex space-x-4 mb-6">
//             {Object.keys(questions).map(questionId => (
//               <li key={questionId}>
//                 <button
//                   onClick={() => setSelectedQuestion(parseInt(questionId))}
//                   className={`px-4 py-2 rounded-lg ${selectedQuestion === parseInt(questionId) ? 'bg-red-800 text-white' : 'bg-gray-900 text-gray-300'} hover:bg-red-700 transition-colors duration-300`}
//                 >
//                   Question {questionId}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Search Input */}
//           <div className="mb-8">
//             <input
//               type="text"
//               placeholder="Search students..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full border border-gray-300 rounded-md p-2"
//             />
//           </div>
          
//           {/* Student List for Selected Status */}
//           <div className={`bg-white p-6 rounded-lg border border-gray-200 shadow-md`}>
//             <h2 className="text-xl font-semibold mb-6 text-red-700">
//               {selectedStatus} <span className="text-gray-600 font-medium">({getTotalCount(selectedStatus)})</span>
//             </h2>
//             <div className="max-h-[400px] overflow-y-auto">
//               <ul className="space-y-4">
//                 {getStudentList(selectedStatus).slice(0, 10).map(student => (
//                   <li key={student.id} className={`p-4 border rounded-lg shadow-sm flex items-center justify-between ${selectedStatus === 'Done' ? 'bg-green-50 border-green-300 text-green-800' : selectedStatus === 'Doing' ? 'bg-blue-50 border-blue-300 text-blue-800' : 'bg-red-50 border-red-300 text-red-800'}`}>
//                     <div className="flex flex-col space-y-1">
//                       <div className="flex items-center space-x-4">
//                         <div className="font-semibold">{student.name}</div>
//                         <div className="text-sm text-gray-600">SAP ID: {student.sapId}</div>
//                       </div>
//                       {selectedStatus === 'Done' && (
//                         <div className="text-xs text-gray-600">Marks: {student.marks}</div>
//                       )}
//                       {selectedStatus === 'Done' && (
//                         <div className="text-xs text-gray-600">Submitted at: {student.submittedAt}</div>
//                       )}
//                     </div>
//                     {selectedStatus === 'Done' && (
//                       <button
//                         onClick={() => handleViewCode(student)}
//                         className="text-red-600 hover:text-red-800 font-medium text-sm"
//                       >
//                         View Code
//                       </button>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//               {getTotalCount(selectedStatus) > 10 && (
//                 <p className="text-center text-gray-600 mt-4">Scroll to see more...</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal for Viewing Code */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
//             <h3 className="text-xl font-semibold mb-4 text-red-700">Submitted Code</h3>
//             <pre className="bg-gray-100 p-4 rounded-md border border-gray-300 overflow-x-auto text-sm text-gray-800">{selectedCode}</pre>
//             {selectedStudent && selectedStudent.status === 'Done' && (
//               <div className="mt-4">
//                 <label htmlFor="marks" className="block text-sm font-medium text-gray-700 mb-2">Enter Marks:</label>
//                 <input
//                   type="text"
//                   id="marks"
//                   value={marks}
//                   onChange={handleMarksChange}
//                   className="w-full border border-gray-300 rounded-md p-2"
//                 />
//               </div>
//             )}
//             <div className="flex justify-end space-x-4 mt-6">
//               <button
//                 onClick={handleSubmitMarks}
//                 className="bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
//               >
//                 Submit Marks
//               </button>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="bg-gray-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
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

// export default ViewStatus;







// "use client"; // Ensure this component is rendered client-side

// import { useState } from 'react';

// const ViewStatus = () => {
//   const [selectedQuestion, setSelectedQuestion] = useState(1);
//   const [selectedStatus, setSelectedStatus] = useState('Not Attended');
//   const [selectedCode, setSelectedCode] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [marks, setMarks] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [viewingLeaderboard, setViewingLeaderboard] = useState(false);
//   const [codeToShare, setCodeToShare] = useState('');
//   const [studentsToShare, setStudentsToShare] = useState([]);

//   // Hardcoded data for demonstration
//   const questions = {
//     1: [
//       { id: 1, name: 'Aarav Patel', sapId: '202101', status: 'Not Attended', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 2, name: 'Vivaan Sharma', sapId: '202102', status: 'Doing', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
//       { id: 3, name: 'Aditya Singh', sapId: '202103', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '10:30 AM', marks: '85' },
//     ],
//     2: [
//       { id: 4, name: 'Vihaan Kapoor', sapId: '202104', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '11:00 AM', marks: '90' },
//       { id: 5, name: 'Reyansh Gupta', sapId: '202105', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '', marks: '' },
//     ],
//   };

//   const handleViewCode = (student) => {
//     setSelectedStudent(student);
//     setSelectedCode(student.code);
//     setMarks(student.marks);
//     setShowModal(true);
//   };

//   const handleMarksChange = (e) => {
//     setMarks(e.target.value);
//   };

//   const handleSubmitMarks = () => {
//     if (selectedStudent) {
//       // Here you can update the marks in your database
//       console.log(`Student ID: ${selectedStudent.id}, New Marks: ${marks}`);
//       // Update the student data with new marks (for demonstration purposes)
//       selectedStudent.marks = marks;
//     }
//     setShowModal(false);
//   };

//   const handleShareCode = () => {
//     // Here you can implement code sharing logic
//     console.log(`Code shared with students: ${studentsToShare.join(', ')}`);
//     setStudentsToShare([]);
//     setCodeToShare('');
//   };

//   const getStudentList = (status) => {
//     return questions[selectedQuestion]
//       .filter(student => student.status === status)
//       .filter(student => student.name.toLowerCase().includes(searchQuery.toLowerCase()));
//   };

//   const getTotalCount = (status) => {
//     return getStudentList(status).length;
//   };

//   const getLeaderboard = () => {
//     return questions[selectedQuestion]
//       .filter(student => student.status === 'Done')
//       .sort((a, b) => parseInt(b.marks) - parseInt(a.marks))
//       .filter(student => student.name.toLowerCase().includes(searchQuery.toLowerCase()));
//   };

//   return (
//     <div className="flex h-screen font-sans bg-gray-50">
//       {/* Left Column for Status */}
//       <div className="w-1/4 bg-gray-800 p-4 border-r border-gray-700">
//         <h2 className="text-xl font-semibold mb-6 text-white">Status</h2>
//         <ul className="space-y-2">
//           {['Not Attended', 'Doing', 'Done', 'Leaderboard'].map(status => (
//             <li key={status}>
//               <button
//                 onClick={() => {
//                   if (status === 'Leaderboard') {
//                     setViewingLeaderboard(true);
//                     setSelectedStatus('');
//                   } else {
//                     setSelectedStatus(status);
//                     setViewingLeaderboard(false);
//                   }
//                 }}
//                 className={`w-full px-4 py-2 text-left rounded-lg ${viewingLeaderboard ? (status === 'Leaderboard' ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300') : (selectedStatus === status ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300')} hover:bg-red-500 transition-colors duration-300`}
//               >
//                 {status}
//                 <span className="ml-2 text-sm">{status !== 'Leaderboard' && getTotalCount(status)}</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Column for Questions and Student List */}
//       <div className="w-3/4 p-8">
//         {/* Question Tiles */}
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold mb-4 text-red-700">Questions</h2>
//           <ul className="flex space-x-4 mb-6">
//             {Object.keys(questions).map(questionId => (
//               <li key={questionId}>
//                 <button
//                   onClick={() => setSelectedQuestion(parseInt(questionId))}
//                   className={`px-4 py-2 rounded-lg ${selectedQuestion === parseInt(questionId) ? 'bg-red-800 text-white' : 'bg-gray-900 text-gray-300'} hover:bg-red-700 transition-colors duration-300`}
//                 >
//                   Question {questionId}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Search Input */}
//           <div className="mb-8">
//             <input
//               type="text"
//               placeholder="Search students..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full border border-gray-300 rounded-md p-2"
//             />
//           </div>
          
//           {/* Student List for Selected Status */}
//           <div className={`bg-white p-6 rounded-lg border border-gray-200 shadow-md`}>
//             <h2 className="text-xl font-semibold mb-6 text-red-700">
//               {viewingLeaderboard ? 'Leaderboard' : selectedStatus} <span className="text-gray-600 font-medium">{!viewingLeaderboard && `(${getTotalCount(selectedStatus)})`}</span>
//             </h2>
//             <div className="max-h-[400px] overflow-y-auto">
//               <ul className="space-y-4">
//                 {viewingLeaderboard ? getLeaderboard().slice(0, 10).map((student, index) => (
//                   <li key={student.id} className={`p-4 border rounded-lg shadow-sm bg-red-50 border-red-300 text-red-800 flex items-center justify-between`}>
//                     <div className="flex flex-col space-y-1">
//                       <div className="flex items-center space-x-4">
//                         <div className="font-semibold">{index + 1}. {student.name}</div>
//                         <div className="text-sm text-gray-600">SAP ID: {student.sapId}</div>
//                       </div>
//                       <div className="text-xs text-gray-600">Marks: {student.marks}</div>
//                     </div>
//                     <div>
//                       <button
//                         onClick={() => handleViewCode(student)}
//                         className="text-red-600 hover:text-red-800 font-medium text-sm mr-2"
//                       >
//                         View Code
//                       </button>
//                       <button
//                         onClick={() => {
//                           setCodeToShare(student.code);
//                           setStudentsToShare(getLeaderboard().map(s => s.id));
//                         }}
//                         className="text-blue-600 hover:text-blue-800 font-medium text-sm"
//                       >
//                         Share Code
//                       </button>
//                     </div>
//                   </li>
//                 )) : getStudentList(selectedStatus).slice(0, 10).map(student => (
//                   <li key={student.id} className={`p-4 border rounded-lg shadow-sm ${selectedStatus === 'Done' ? 'bg-green-50 border-green-300 text-green-800' : selectedStatus === 'Doing' ? 'bg-blue-50 border-blue-300 text-blue-800' : 'bg-red-50 border-red-300 text-red-800'} flex items-center justify-between`}>
//                     <div className="flex flex-col space-y-1">
//                       <div className="flex items-center space-x-4">
//                         <div className="font-semibold">{student.name}</div>
//                         <div className="text-sm text-gray-600">SAP ID: {student.sapId}</div>
//                       </div>
//                       {selectedStatus === 'Done' && <div className="text-xs text-gray-600">Marks: {student.marks}</div>}
//                       {selectedStatus === 'Done' && <div className="text-xs text-gray-600">Submitted At: {student.submittedAt}</div>}
//                     </div>
//                     <div>
//                       {selectedStatus === 'Done' && (
//                         <button
//                           onClick={() => handleViewCode(student)}
//                           className="text-red-600 hover:text-red-800 font-medium text-sm mr-2"
//                         >
//                           View Code
//                         </button>
//                       )}
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Code and Adding Marks Modal */}
//       {showModal && selectedStudent && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-w-2xl">
//             <h3 className="text-lg font-semibold mb-4 text-red-700">Code and Marks for {selectedStudent.name}</h3>
//             <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">{selectedCode}</pre>
//             <div className="mt-4">
//               <label className="block text-sm font-medium text-gray-700">Marks</label>
//               <input
//                 type="number"
//                 value={marks}
//                 onChange={handleMarksChange}
//                 className="w-full border border-gray-300 rounded-md p-2 mt-1"
//               />
//             </div>
//             <div className="mt-4 flex justify-end space-x-4">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={handleSubmitMarks}
//                 className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//               >
//                 Submit Marks
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Share Code Modal */}
//       {codeToShare && studentsToShare.length > 0 && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-w-2xl">
//             <h3 className="text-lg font-semibold mb-4 text-blue-700">Share Code</h3>
//             <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">{codeToShare}</pre>
//             <div className="mt-4">
//               <label className="block text-sm font-medium text-gray-700">Select Students</label>
//               <select
//                 multiple
//                 value={studentsToShare}
//                 onChange={(e) => setStudentsToShare(Array.from(e.target.selectedOptions, option => parseInt(option.value)))}
//                 className="w-full border border-gray-300 rounded-md p-2 mt-1"
//               >
//                 {getLeaderboard().map(student => (
//                   <option key={student.id} value={student.id}>{student.name} (SAP ID: {student.sapId})</option>
//                 ))}
//               </select>
//             </div>
//             <div className="mt-4 flex justify-end space-x-4">
//               <button
//                 onClick={() => setCodeToShare('')}
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleShareCode}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 Share Code
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewStatus;


















































"use client"; // Ensure this component is rendered client-side

import { useState } from 'react';

const ViewStatus = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState('Not Attended');
  const [selectedCode, setSelectedCode] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false); // New state for sharing modal
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [marks, setMarks] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewingLeaderboard, setViewingLeaderboard] = useState(false);
  const [codeToShare, setCodeToShare] = useState('');
  const [studentsToShare, setStudentsToShare] = useState([]);

  // Hardcoded data for demonstration
  const questions = {
    1: [
      { id: 1, name: 'Aarav Patel', sapId: '202101', status: 'Not Attended', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
      { id: 2, name: 'Vivaan Sharma', sapId: '202102', status: 'Doing', code: '/* C code to print Hello World */', submittedAt: '', marks: '' },
      { id: 3, name: 'Aditya Singh', sapId: '202103', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '10:30 AM', marks: '85' },
    ],
    2: [
      { id: 4, name: 'Vihaan Kapoor', sapId: '202104', status: 'Done', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '11:00 AM', marks: '90' },
      { id: 5, name: 'Reyansh Gupta', sapId: '202105', status: 'Doing', code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', submittedAt: '', marks: '' },
    ],
  };

  const handleViewCode = (student) => {
    setSelectedStudent(student);
    setSelectedCode(student.code);
    setMarks(student.marks);
    setShowModal(true);
  };

  const handleMarksChange = (e) => {
    setMarks(e.target.value);
  };

  const handleSubmitMarks = () => {
    if (selectedStudent) {
      console.log(`Student ID: ${selectedStudent.id}, New Marks: ${marks}`);
      selectedStudent.marks = marks;
    }
    setShowModal(false);
  };

  const handleShareCode = (code) => {
    setCodeToShare(code);
    setShowShareModal(true);
  };

  const handleSelectStudent = (studentId) => {
    setStudentsToShare(prev =>
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleShareCodeWithStudents = () => {
    console.log(`Code shared with students: ${studentsToShare.join(', ')}`);
    setShowShareModal(false);
    setStudentsToShare([]);
    setCodeToShare('');
  };

  const getStudentList = (status) => {
    return questions[selectedQuestion]
      .filter(student => student.status === status)
      .filter(student => student.name.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  const getTotalCount = (status) => {
    return getStudentList(status).length;
  };

  const getLeaderboard = () => {
    return questions[selectedQuestion]
      .filter(student => student.status === 'Done')
      .sort((a, b) => parseInt(b.marks) - parseInt(a.marks))
      .filter(student => student.name.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  const getAllStudents = () => {
    return questions[selectedQuestion]
      .filter(student => student.name.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  return (
    <div className="flex h-screen font-sans bg-gray-50">
      <div className="w-1/4 bg-gray-800 p-4 border-r border-gray-700">
        <h2 className="text-xl font-semibold mb-6 text-white">Status</h2>
        <ul className="space-y-2">
          {['Not Attended', 'Doing', 'Done', 'Leaderboard'].map(status => (
            <li key={status}>
              <button
                onClick={() => {
                  if (status === 'Leaderboard') {
                    setViewingLeaderboard(true);
                    setSelectedStatus('');
                  } else {
                    setSelectedStatus(status);
                    setViewingLeaderboard(false);
                  }
                }}
                className={`w-full px-4 py-2 text-left rounded-lg ${viewingLeaderboard ? (status === 'Leaderboard' ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300') : (selectedStatus === status ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300')} hover:bg-red-500 transition-colors duration-300`}
              >
                {status}
                <span className="ml-2 text-sm">{status !== 'Leaderboard' && getTotalCount(status)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 p-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-red-700">Questions</h2>
          <ul className="flex space-x-4 mb-6">
            {Object.keys(questions).map(questionId => (
              <li key={questionId}>
                <button
                  onClick={() => setSelectedQuestion(parseInt(questionId))}
                  className={`px-4 py-2 rounded-lg ${selectedQuestion === parseInt(questionId) ? 'bg-red-800 text-white' : 'bg-gray-900 text-gray-300'} hover:bg-red-700 transition-colors duration-300`}
                >
                  Question {questionId}
                </button>
              </li>
            ))}
          </ul>

          <div className="mb-8">
            <input
              type="text"
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className={`bg-white p-6 rounded-lg border border-gray-200 shadow-md`}>
            <h2 className="text-xl font-semibold mb-6 text-red-700">
              {viewingLeaderboard ? 'Leaderboard' : selectedStatus} <span className="text-gray-600 font-medium">{!viewingLeaderboard && `(${getTotalCount(selectedStatus)})`}</span>
            </h2>
            <div className="max-h-[400px] overflow-y-auto">
              <ul className="space-y-4">
                {viewingLeaderboard ? getLeaderboard().slice(0, 10).map((student, index) => (
                  <li key={student.id} className={`p-4 border rounded-lg shadow-sm bg-red-50 border-red-300 text-red-800 flex items-center justify-between`}>
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-4">
                        <div className="font-semibold">{index + 1}. {student.name}</div>
                        <div className="text-sm text-gray-600">SAP ID: {student.sapId}</div>
                      </div>
                      <div className="text-xs text-gray-600">Marks: {student.marks}</div>
                    </div>
                    <div>
                      <button
                        onClick={() => handleViewCode(student)}
                        className="text-red-600 hover:text-red-800 font-medium text-sm mr-2"
                      >
                        View Code
                      </button>
                      <button
                        onClick={() => handleShareCode(student.code)}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Share Code
                      </button>
                    </div>
                  </li>
                )) : getStudentList(selectedStatus).slice(0, 10).map(student => (
                  <li key={student.id} className={`p-4 border rounded-lg shadow-sm ${selectedStatus === 'Done' ? 'bg-green-50 border-green-300 text-green-800' : selectedStatus === 'Doing' ? 'bg-blue-50 border-blue-300 text-blue-800' : 'bg-gray-50 border-gray-300 text-gray-800'} flex items-center justify-between`}>
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-4">
                        <div className="font-semibold">{student.name}</div>
                        <div className="text-sm text-gray-600">SAP ID: {student.sapId}</div>
                      </div>
                      {student.status === 'Done' && <div className="text-xs text-gray-600">Marks: {student.marks}</div>}
                    </div>
                    <div>
                      <button
                        onClick={() => handleViewCode(student)}
                        className="text-red-600 hover:text-red-800 font-medium text-sm mr-2"
                      >
                        View Code
                      </button>
                      <button
                        onClick={() => handleShareCode(student.code)}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Share Code
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* View Code Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-red-700">{selectedStudent.name}'s Code</h2>
            <pre className="bg-gray-100 p-4 rounded-lg border text-sm mb-4 whitespace-pre-wrap">{selectedCode}</pre>
            <div className="mb-4">
              <label htmlFor="marks" className="block text-sm font-medium text-gray-700 mb-2">
                Marks:
              </label>
              <input
                type="text"
                id="marks"
                value={marks}
                onChange={handleMarksChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleSubmitMarks}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                Submit
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Code Modal */}
      {showShareModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Share Code</h2>
            <p className="mb-4">Select the students you want to share the code with:</p>
            <div className="mb-4 max-h-64 overflow-y-auto">
              {getAllStudents().map(student => (
                <div key={student.id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={studentsToShare.includes(student.id)}
                    onChange={() => handleSelectStudent(student.id)}
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-700">{student.name} (SAP ID: {student.sapId})</label>
                </div>
              ))}
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleShareCodeWithStudents}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Share
              </button>
              <button
                onClick={() => setShowShareModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewStatus;

