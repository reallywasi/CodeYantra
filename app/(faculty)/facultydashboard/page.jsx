// "use client"





// import Router from "next/navigation";
// import React, { useState } from "react";
// import { Bar, Line } from "react-chartjs-2"; // Example chart libraries
// import Chart from "chart.js/auto"; // Import chart library
// import { useRouter } from "next/navigation";

// const FacultyPage = () => {
//   const [showAddObservation, setShowAddObservation] = useState(false);
//   const [newObservation, setNewObservation] = useState({
//     date: "",
//     details: "",
//     numberOfStudents: 0,
//     topic: "",
//     batch: "",
//   });

//   const router =useRouter();
//   const [observationsList, setObservationsList] = useState([
//     {
//       "id": 1,
//       "date": "2024-08-28",
//       "topic": "Introduction to Algorithms",
//       "batch": "Batch A",
//       "details": "Covered basic algorithms and their applications. Included sorting algorithms like Bubble Sort and Merge Sort, and discussed their time complexities."
//     },
//     {
//       "id": 2,
//       "date": "2024-08-29",
//       "topic": "Data Structures Basics",
//       "batch": "Batch B",
//       "details": "Introduced fundamental data structures such as arrays, linked lists, stacks, and queues. Demonstrated practical implementations and use cases."
//     },
//     {
//       "id": 3,
//       "date": "2024-08-30",
//       "topic": "Advanced Data Structures",
//       "batch": "Batch C",
//       "details": "Explored advanced data structures including binary trees, AVL trees, and hash tables. Covered their algorithms and practical applications."
//     },
//     {
//       "id": 4,
//       "date": "2024-08-31",
//       "topic": "Algorithm Design and Analysis",
//       "batch": "Batch D",
//       "details": "Focused on algorithm design techniques such as divide and conquer, dynamic programming, and greedy algorithms. Analyzed algorithm performance and efficiency."
//     },
//     {
//       "id": 5,
//       "date": "2024-09-01",
//       "topic": "Graph Algorithms",
//       "batch": "Batch E",
//       "details": "Covered graph algorithms including Depth-First Search (DFS), Breadth-First Search (BFS), and Dijkstra’s algorithm. Discussed their applications in solving real-world problems."
//     }
//     // More observation objects...
//   ]);

//   const handleAddObservation = () => {
//     // Handle the addition of a new observation
//     setObservationsList([
//       ...observationsList,
//       { ...newObservation, id: Date.now() }, // Add a new observation
//     ]);
//     setShowAddObservation(false);
//     setNewObservation({
//       date: "",
//       details: "",
//       numberOfStudents: 0,
//       topic: "",
//       batch: "",
//     });
//   };

//   const data = {
//     labels: ["Batch A", "Batch B", "Batch C"],
//     datasets: [
//       {
//         label: "Observations Conducted",
//         data: [5, 10, 3],
//         backgroundColor: "rgba(54, 162, 235, 0.6)",
//       },
//     ],
//   };

//   const lineData = {
//     labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
//     datasets: [
//       {
//         label: "Student Observations Trend",
//         data: [10, 15, 20, 25],
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//       },
//     ],
//   };

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Faculty Dashboard</h1>
// {/* Faculty Name and Designation */}
// <div className="text-center mb-6">
//         <p className="text-xl font-semibold text-gray-700">Dr. Virender Kadyan</p>
//         <p className="text-lg text-gray-600">Senior Associate Professor</p>
//       </div>
//       <div className="bg-white p-4 rounded-lg shadow-md mb-6">
//          <h2 className="text-xl font-semibold mb-4 text-center"></h2>
//          <div className="grid grid-cols-3 gap-6">
//            <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
//              <h3 className="text-lg font-semibold">Number of Students</h3>
//              <p className="text-2xl font-bold">120</p>
//            </div>
//            <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
//              <h3 className="text-lg font-semibold">Total Observations</h3>
//              <p className="text-2xl font-bold">32</p>
//            </div>
//            <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center">
//              <h3 className="text-lg font-semibold">Upcoming Observations</h3>
//              <p className="text-2xl font-bold">5</p>
//            </div>
//          </div>
//        </div>

      
  

//        <div className="flex justify-center mb-4 items-center">
//   <button
//     className="bg-gray-800 text-white px-10 py-4 rounded-lg text-lg"
//     onClick={() => router.push('/ObservationDetails')}
//   >
//     Add Observation
//   </button>
// </div>

// {/* Observations Table */}
// <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
//         <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Observations List</h2>
//         <table className="w-full bg-gray-100 rounded-lg overflow-hidden">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="px-4 py-2 text-left">Date</th>
//               <th className="px-4 py-2 text-left">Topic</th>
//               <th className="px-4 py-2 text-left">Batch</th>
//             </tr>
//           </thead>
//           <tbody>
//             {observationsList.map((obs) => (
//               <tr key={obs.id} className="hover:bg-gray-200">
//                 <td className="px-4 py-2">{obs.date}</td>
//                 <td className="px-4 py-2">{obs.topic}</td>
//                 <td className="px-4 py-2">{obs.batch}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {/* Charts Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Observations by Batch</h2>
//           <Bar data={data} />
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Student Observations Trend</h2>
//           <Line data={lineData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FacultyPage;























import React from 'react';
import { FiLogOut, FiHome, FiFileText, FiPlusCircle, FiDatabase, FiSettings } from 'react-icons/fi';

const FacultyDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-red-700">Faculty Dashboard</div>
        <button className="flex items-center text-gray-600 hover:text-red-600">
          <FiLogOut className="mr-2" /> Logout
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <nav className="bg-white w-64 p-6 shadow-md">
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-red-600">
                <FiHome className="mr-2" /> Dashboard Home
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-red-600">
                <FiFileText className="mr-2" /> View Status
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-red-600">
                <FiPlusCircle className="mr-2" /> Create Test
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-red-600">
                <FiDatabase className="mr-2" /> Questions Bank
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-red-600">
                <FiSettings className="mr-2" /> Settings
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Quick Stats Cards */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
              <div className="text-xl font-semibold text-gray-700">Total Students</div>
              <div className="ml-auto text-3xl font-bold text-blue-600">120</div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
              <div className="text-xl font-semibold text-gray-700">Tests Created</div>
              <div className="ml-auto text-3xl font-bold text-green-600">8</div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
              <div className="text-xl font-semibold text-gray-700">Average Marks</div>
              <div className="ml-auto text-3xl font-bold text-red-600">78%</div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between text-gray-700">
                <div>Test "Math Final" created</div>
                <div className="text-sm text-gray-500">2 hours ago</div>
              </li>
              <li className="flex items-center justify-between text-gray-700">
                <div>Question "Algebra Basics" added to Question Bank</div>
                <div className="text-sm text-gray-500">1 day ago</div>
              </li>
              <li className="flex items-center justify-between text-gray-700">
                <div>Test "Science Quiz" published</div>
                <div className="text-sm text-gray-500">3 days ago</div>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Actions</h2>
            <div className="flex space-x-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
                Create New Test
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Add Question
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                View Results
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white p-4 shadow-md text-center text-gray-500">
        © 2024 Faculty Dashboard. All rights reserved.
      </footer>
    </div>
  );
};

export default FacultyDashboard;










