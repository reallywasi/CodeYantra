// "use client";
// import React, { useState } from 'react';
// import CodeEditor from '../../components/CodeEditor'; // Adjust the import path as necessary

// const CodingPage = () => {
//   const [code, setCode] = useState(`// Write your C++ code here...\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!";\n    return 0;\n}`); // Example C++ code

//   const handleCodeChange = (value) => {
//     setCode(value || '');
//   };

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row bg-gray-200">
//       {/* Left side: Instructions or Problem Statement */}
//       <div className="lg:w-1/2 p-6 bg-white border-b lg:border-r border-gray-300 lg:border-b-0">
//         <h1 className="text-2xl font-bold mb-4 text-gray-800">Problem Statement</h1>
//         <div className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-300">
//           <h2 className="text-xl font-semibold mb-3 text-gray-900">Two Sum</h2>
//           <p className="text-lg mb-4 text-gray-700">Solved | Easy</p>
//           <h3 className="font-semibold text-gray-800 mb-2">Hint:</h3>
//           <p className="text-gray-700 mb-4">
//             Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//             You may assume that each input would have exactly one solution, and you may not use the same element twice.
//             You can return the answer in any order.
//           </p>
//           <h3 className="font-semibold text-gray-800 mb-2">Example:</h3>
//           <ul className="list-disc list-inside mb-4 text-gray-700">
//             <li>
//               <strong className="text-gray-900">Input:</strong> nums = [2,7,11,15], target = 9<br />
//               <strong className="text-gray-900">Output:</strong> [0,1]<br />
//               <strong className="text-gray-900">Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
//             </li>
//             <li>
//               <strong className="text-gray-900">Input:</strong> nums = [3,2,4], target = 6<br />
//               <strong className="text-gray-900">Output:</strong> [1,2]
//             </li>
//             <li>
//               <strong className="text-gray-900">Input:</strong> nums = [3,3], target = 6<br />
//               <strong className="text-gray-900">Output:</strong> [0,1]
//             </li>
//           </ul>
//           <h3 className="font-semibold text-gray-800 mb-2">Constraints:</h3>
        
//           <h3 className="font-semibold text-gray-800 mb-2">Follow-up:</h3>
//           <p className="text-gray-700">Can you come up with an algorithm that is less than O(n<sup>2</sup>) time complexity?</p>
//         </div>
//       </div>

//       {/* Right side: Code Editor */}
//       <div className="lg:w-1/2 p-6 lg:pl-0 flex flex-col">
//         <div className="mb-4">
//           <h2 className="text-xl font-semibold text-gray-800">Test Name</h2>
//         </div>
//         <CodeEditor
//           value={code}
//           onChange={handleCodeChange}
//           language="cpp" // Set language to C++
//         />
//       </div>

//       <div className="mt-4 flex gap-4">
//           <button
//             className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
//           >
//             Submit
//           </button>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             Compile & Run
//           </button>
//         </div>
//     </div>
//   );
// };

// export default CodingPage;

"use client";
import React, { useState } from 'react';
import CodeEditor from '../../components/CodeEditor'; // Adjust the import path as necessary

const CodingPage = () => {
  const [code, setCode] = useState(`// Write your C++ code here...\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!";\n    return 0;\n}`); // Example C++ code

  const handleCodeChange = (value) => {
    setCode(value || '');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-200">
      {/* Left side: Instructions or Problem Statement */}
      <div className="lg:w-1/2 p-6 bg-white border-b lg:border-r border-gray-300 lg:border-b-0">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Problem Statement</h1>
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">Two Sum</h2>
          <p className="text-lg mb-4 text-gray-700">Solved | Easy</p>
          <h3 className="font-semibold text-gray-800 mb-2">Hint:</h3>
          <p className="text-gray-700 mb-4">
            Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
            You may assume that each input would have exactly one solution, and you may not use the same element twice.
            You can return the answer in any order.
          </p>
          <h3 className="font-semibold text-gray-800 mb-2">Example:</h3>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>
              <strong className="text-gray-900">Input:</strong> nums = [2,7,11,15], target = 9<br />
              <strong className="text-gray-900">Output:</strong> [0,1]<br />
              <strong className="text-gray-900">Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
            </li>
            <li>
              <strong className="text-gray-900">Input:</strong> nums = [3,2,4], target = 6<br />
              <strong className="text-gray-900">Output:</strong> [1,2]
            </li>
            <li>
              <strong className="text-gray-900">Input:</strong> nums = [3,3], target = 6<br />
              <strong className="text-gray-900">Output:</strong> [0,1]
            </li>
          </ul>
          <h3 className="font-semibold text-gray-800 mb-2">Follow-up:</h3>
          <p className="text-gray-700">Can you come up with an algorithm that is less than O(n<sup>2</sup>) time complexity?</p>
        </div>
      </div>

      {/* Right side: Code Editor */}
      <div className="lg:w-1/2 p-6 lg:pl-0 flex flex-col">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 text-center">Test Name</h2>
        </div>
        <CodeEditor
          value={code}
          onChange={handleCodeChange}
          language="cpp" // Set language to C++
        />
        <div className="mt-4 flex gap-4 px-2">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Submit
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Compile & Run
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodingPage;
