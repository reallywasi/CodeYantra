"use client"; // Ensure this component is rendered client-side

import { useState } from 'react';

const ViewStatus = () => {
  const [selectedCode, setSelectedCode] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Hardcoded data for demonstration
  const studentsAttending = [
    { id: 1, name: 'Aarav Patel' },
    { id: 2, name: 'Vivaan Sharma' },
    { id: 3, name: 'Aditya Singh' },
    { id: 4, name: 'Vihaan Kapoor' },
    { id: 5, name: 'Reyansh Gupta' },
    { id: 6, name: 'Aarav Gupta' },
    { id: 7, name: 'Ayaan Sharma' },
    { id: 8, name: 'Ishaan Desai' },
    { id: 9, name: 'Arjun Reddy' },
    { id: 10, name: 'Sai Patel' },
    { id: 11, name: 'Kartik Yadav' },
    { id: 12, name: 'Rohan Joshi' },
    { id: 13, name: 'Aryan Mehta' },
    { id: 14, name: 'Avi Jain' },
    { id: 15, name: 'Kabir Kumar' },
    { id: 16, name: 'Nikhil Thakur' },
    { id: 17, name: 'Raj Singh' },
    { id: 18, name: 'Rishi Verma' },
    { id: 19, name: 'Krishna Bhat' },
    { id: 20, name: 'Shivam Rao' },
  ];

  const studentsSubmitted = [
    { id: 1, name: 'Aarav Patel', code: 'console.log("Hello World");', submittedAt: '2024-08-09 10:30 AM' },
    { id: 2, name: 'Vivaan Sharma', code: 'console.log("Hello Universe");', submittedAt: '2024-08-09 11:00 AM' },
    { id: 3, name: 'Aditya Singh', code: 'console.log("Good Morning");', submittedAt: '2024-08-09 11:30 AM' },
    { id: 4, name: 'Vihaan Kapoor', code: 'console.log("Good Evening");', submittedAt: '2024-08-09 12:00 PM' },
    { id: 5, name: 'Reyansh Gupta', code: 'console.log("Welcome");', submittedAt: '2024-08-09 12:30 PM' },
  ];

  const handleViewCode = (code) => {
    setSelectedCode(code);
    setShowModal(true);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl  text-center font-bold mb-8 text-gray-900">Test Status Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Column 1: Students Attending */}
        <div className="bg-red-50 p-6 rounded-lg border border-red-200 shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-red-700">Students Attending</h2>
          <div className="max-h-[400px] overflow-y-auto">
            <ul className="space-y-4">
              {studentsAttending.map(student => (
                <li key={student.id} className="p-4 bg-white border border-red-300 rounded-lg shadow-sm hover:bg-red-100 transition-colors duration-300">
                  {student.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 2: Students Submitted */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">Students Submitted</h2>
          <div className="max-h-[400px] overflow-y-auto">
            <ul className="space-y-4">
              {studentsSubmitted.map(student => (
                <li key={student.id} className="p-4 bg-white border border-blue-300 rounded-lg shadow-sm flex justify-between items-center hover:bg-blue-100 transition-colors duration-300">
                  <div className="text-sm text-blue-900">
                    <div className="font-semibold">{student.name}</div>
                    <div className="text-xs text-blue-600">Submitted at: {student.submittedAt}</div>
                  </div>
                  <button
                    onClick={() => handleViewCode(student.code)}
                    className="ml-4 text-green-600 hover:text-green-800 font-medium text-sm"
                  >
                    View Code
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal for Viewing Code */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Submitted Code</h3>
            <pre className="bg-gray-50 p-4 rounded-md border border-gray-300 overflow-x-auto text-sm text-gray-800">{selectedCode}</pre>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewStatus;
