"use client";
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import Link from 'next/link';

const Leaderboard = () => {
  const [selectedCode, setSelectedCode] = useState(null);
  const [showCodeModal, setShowCodeModal] = useState(false);

  const leaderboardData = [
    { id: 1, name: 'Aarav Sharma', marks: 95, code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', codeAccess: true },
    { id: 2, name: 'Vivaan Patel', marks: 90, code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', codeAccess: true },
    { id: 3, name: 'Vihaan Agarwal', marks: 85, code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', codeAccess: false },
    { id: 4, name: 'Arjun Singh', marks: 80, code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', codeAccess: true },
    { id: 5, name: 'Reyansh Rao', marks: 75, code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', codeAccess: false },
    { id: 6, name: 'Sai Kumar', marks: 70, code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', codeAccess: true },
    { id: 7, name: 'Ishaan Mehta', marks: 65, code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', codeAccess: false },
    { id: 8, name: 'Rohan Yadav', marks: 60, code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', codeAccess: true },
    { id: 9, name: 'Arnav Gupta', marks: 55, code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', codeAccess: true },
    { id: 10, name: 'Aditya Desai', marks: 50, code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', codeAccess: false },
    { id: 11, name: 'Kabir Kumar', marks: 45, code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', codeAccess: false },
    { id: 12, name: 'Saanvi Mehta', marks: 40, code: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}', codeAccess: true },
    // More students...
  ];

  const handleViewCode = (code) => {
    setSelectedCode(code);
    setShowCodeModal(true);
  };

  const handleCloseCodeModal = () => {
    setShowCodeModal(false);
    setSelectedCode(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-red-800 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
      </header>

      <main className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-y-auto max-h-[calc(100vh-150px)]">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-600">Rank</th>
                  <th className="py-3 px-4 text-left text-gray-600">Student</th>
                  <th className="py-3 px-4 text-left text-gray-600">Marks</th>
                  <th className="py-3 px-4 text-left text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.slice(0, 10).map((student, index) => (
                  <tr
                    key={student.id}
                    className={`hover:bg-gray-50 transition-colors duration-300 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    <td className="py-3 px-4 border-b border-gray-300 text-gray-600">{index + 1}</td>
                    <td className="py-3 px-4 border-b border-gray-300 text-gray-800">{student.name}</td>
                    <td className="py-3 px-4 border-b border-gray-300 text-gray-800">{student.marks}</td>
                    <td className="py-3 px-4 border-b border-gray-300">
                      {student.codeAccess ? (
                        <button
                          onClick={() => handleViewCode(student.code)}
                          className="bg-blue-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                          <FaEye className="inline mr-2" /> View Code
                        </button>
                      ) : (
                        <span className="text-gray-500">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Code Modal */}
        {showCodeModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-3xl">
              <h2 className="text-lg font-semibold mb-4 text-red-800">Student Code</h2>
              <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-lg border border-gray-300 overflow-x-auto">
                {selectedCode}
              </pre>
              <button
                onClick={handleCloseCodeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 mt-4"
              >
                Close
              </button>
            </div>
          </div>
        )}
        <div className="flex justify-end p-4  text-blue-900">
      <Link href="/studentDashboard">
          Go to Dashboard
      </Link>
    </div>      </main>
    </div>
  );
};

export default Leaderboard;
