// "use client"
// import React, { useState } from 'react';
// import { Line, Bar, Doughnut, Radar, PolarArea, Bubble, Scatter, Area, Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement, RadarController, PolarAreaController, BubbleController, ScatterController } from 'chart.js';
// import Modal from 'react-modal';


// ChartJS.register(
//     CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend,
//     ArcElement, RadarController, PolarAreaController, BubbleController, ScatterController
//   );
// const Dashboard = () => {
//   const [isProblemModalOpen, setIsProblemModalOpen] = useState(false);
//   const [isContestModalOpen, setIsContestModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     problemTitle: '',
//     description: '',
//     difficulty: 'Easy',
//   });
//   const [contestData, setContestData] = useState({
//     contestTitle: '',
//     date: '',
//     duration: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleContestChange = (e) => {
//     const { name, value } = e.target;
//     setContestData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmitProblem = (e) => {
//     e.preventDefault();
//     console.log('Problem Form submitted:', formData);
//     setIsProblemModalOpen(false);
//   };

//   const handleSubmitContest = (e) => {
//     e.preventDefault();
//     console.log('Contest Form submitted:', contestData);
//     setIsContestModalOpen(false);
//   };

//   const lineChartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     datasets: [{
//       label: 'Monthly Sales',
//       data: [30, 45, 60, 50, 70, 90, 100],
//       borderColor: '#4A90E2',
//       backgroundColor: 'rgba(74, 144, 226, 0.2)',
//       fill: true,
//       tension: 0.1,
//     }]
//   };
  
//   const barChartData = {
//     labels: ['Q1', 'Q2', 'Q3', 'Q4'],
//     datasets: [{
//       label: 'Quarterly Revenue',
//       data: [5000, 7000, 6000, 8000],
//       backgroundColor: '#E94E77',
//     }]
//   };
  
//   const doughnutChartData = {
//     labels: ['Red', 'Blue', 'Yellow'],
//     datasets: [{
//       data: [300, 50, 100],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//     }]
//   };
  
//   const radarChartData = {
//     labels: ['Strength', 'Speed', 'Endurance', 'Agility', 'Skill'],
//     datasets: [{
//       label: 'Player A',
//       data: [6, 5, 7, 8, 5],
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: '#FF6384',
//       borderWidth: 1,
//     }]
//   };
  
//   const polarAreaChartData = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
//     }]
//   };
  
//   const bubbleChartData = {
//     datasets: [{
//       label: 'Demo Bubble Chart',
//       data: [
//         { x: 10, y: 20, r: 15 },
//         { x: 15, y: 10, r: 20 },
//         { x: 20, y: 30, r: 25 },
//       ],
//       backgroundColor: '#4A90E2',
//     }]
//   };
  
//   const scatterChartData = {
//     datasets: [{
//       label: 'Scatter Data',
//       data: [
//         { x: 10, y: 20 },
//         { x: 15, y: 10 },
//         { x: 20, y: 30 },
//       ],
//       backgroundColor: '#E94E77',
//     }]
//   };
  
//   const areaChartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     datasets: [{
//       label: 'Yearly Growth',
//       data: [20, 40, 60, 70, 80, 90, 100],
//       backgroundColor: 'rgba(74, 144, 226, 0.3)',
//       borderColor: '#4A90E2',
//       fill: true,
//     }]
//   };
  
//   const pieChartData = {
//     labels: ['Red', 'Blue', 'Yellow'],
//     datasets: [{
//       data: [300, 50, 100],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//     }]
//   };
//   return (
//     <div className="flex h-screen bg-black text-white">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-800 p-4">
//         <h1 className="text-2xl font-bold mb-6">Coding Contest</h1>
//         <nav>
//           <ul>
//             <li className="mb-4">
//               <a href="#overview" className="hover:bg-gray-700 p-2 rounded block">Overview</a>
//             </li>
//             <li className="mb-4">
//               <a href="#problems" className="hover:bg-gray-700 p-2 rounded block">Problems</a>
//             </li>
//             <li className="mb-4">
//               <a href="#contests" className="hover:bg-gray-700 p-2 rounded block">Contests</a>
//             </li>
//             <li className="mb-4">
//               <a href="#statistics" className="hover:bg-gray-700 p-2 rounded block">Statistics</a>
//             </li>
//             <li className="mb-4">
//               <a href="#settings" className="hover:bg-gray-700 p-2 rounded block">Settings</a>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       <div className="flex-1 flex flex-col">
//         {/* Top Bar */}
//         <header className="bg-gray-900 p-4 flex justify-between items-center">
//           <h2 className="text-xl font-semibold">Dashboard</h2>
//           <div className="flex items-center">
//             <button className="relative mr-4">
//               <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-2 py-1">5</span>
//               <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path d="M16 17h-1v-6h1v6zm-5 0H9v-6h2v6zm-1-8h2v2h-2v-2zm0 4h2v2h-2v-2z"></path>
//               </svg>
//             </button>
//             <button className="bg-blue-600 text-white py-2 px-4 rounded">Log Out</button>
//           </div>
//         </header>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Recent Activities */}
//             <section id="overview" className="bg-gray-800 p-4 rounded-lg shadow-md">
//               <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
//               <ul>
//                 <li className="border-b border-gray-700 py-2">User1 solved Problem A</li>
//                 <li className="border-b border-gray-700 py-2">User2 submitted code for Problem B</li>
//                 <li className="border-b border-gray-700 py-2">User3 started contest C</li>
//               </ul>
//             </section>

//             {/* Coding Problems */}
//             <section id="problems" className="bg-gray-800 p-4 rounded-lg shadow-md">
//               <h3 className="text-lg font-semibold mb-4">Coding Problems</h3>
//               <button
//                 onClick={() => setIsProblemModalOpen(true)}
//                 className="bg-blue-600 text-white py-2 px-4 rounded mb-4"
//               >
//                 Add New Problem
//               </button>
//               <ul>
//                 <li className="border-b border-gray-700 py-2">Problem A - Easy</li>
//                 <li className="border-b border-gray-700 py-2">Problem B - Medium</li>
//                 <li className="border-b border-gray-700 py-2">Problem C - Hard</li>
//               </ul>
//             </section>

//             {/* Upcoming Contests */}
//             <section id="contests" className="bg-gray-800 p-4 rounded-lg shadow-md">
//               <h3 className="text-lg font-semibold mb-4">Upcoming Contests</h3>
//               <button
//                 onClick={() => setIsContestModalOpen(true)}
//                 className="bg-green-600 text-white py-2 px-4 rounded mb-4"
//               >
//                 Add New Contest
//               </button>
//               <ul>
//                 <li className="border-b border-gray-700 py-2">Contest A - Aug 15, 2024</li>
//                 <li className="border-b border-gray-700 py-2">Contest B - Aug 20, 2024</li>
//                 <li className="border-b border-gray-700 py-2">Contest C - Aug 25, 2024</li>
//               </ul>
//             </section>

//             {/* Statistics */}
//             <section id="statistics" className="bg-gray-800 p-4 rounded-lg shadow-md">
//               <h3 className="text-lg font-semibold mb-4">Statistics</h3>
//               <div className="mb-6">
//                 <Line data={lineChartData} options={{ responsive: true }} />
//               </div>
//               <div className="mb-6">
//                 <Bar data={barChartData} options={{ responsive: true }} />
//               </div>
//               <div className="flex flex-col">
//                 <div className="mb-4">
//                   <span className="font-semibold">Total Problems Solved:</span> 123
//                 </div>
//                 <div>
//                   <span className="font-semibold">Current Streak:</span> 7 days
//                 </div>
//               </div>
//             </section>

//             {/* Settings */}
//             <section id="settings" className="bg-gray-800 p-4 rounded-lg shadow-md">
//               <h3 className="text-lg font-semibold mb-4">Settings</h3>
//               <div className="mb-4">
//                 <button className="bg-blue-600 text-white py-2 px-4 rounded">Update Profile</button>
//               </div>
//               <div>
//                 <button className="bg-gray-600 text-white py-2 px-4 rounded">Change Password</button>
//               </div>
//             </section>
//           </div>
//         </main>

//         {/* Modals */}
//         {/* Add Problem Modal */}
//         <Modal isOpen={isProblemModalOpen} onRequestClose={() => setIsProblemModalOpen(false)} ariaHideApp={false}>
//           <div className="bg-gray-800 p-6 rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Add New Problem</h2>
//             <form onSubmit={handleSubmitProblem} className="space-y-4">
//               <div>
//                 <label className="block mb-1">Problem Title</label>
//                 <input
//                   type="text"
//                   name="problemTitle"
//                   value={formData.problemTitle}
//                   onChange={handleInputChange}
//                   className="w-full p-2 rounded bg-gray-700 border border-gray-600"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Description</label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                   className="w-full p-2 rounded bg-gray-700 border border-gray-600"
//                   rows="4"
//                 ></textarea>
//               </div>
//               <div>
//                 <label className="block mb-1">Difficulty</label>
//                 <select
//                   name="difficulty"
//                   value={formData.difficulty}
//                   onChange={handleInputChange}
//                   className="w-full p-2 rounded bg-gray-700 border border-gray-600"
//                 >
//                   <option value="Easy">Easy</option>
//                   <option value="Medium">Medium</option>
//                   <option value="Hard">Hard</option>
//                 </select>
//               </div>
//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsProblemModalOpen(false)}
//                   className="bg-gray-600 text-white py-2 px-4 rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-blue-600 text-white py-2 px-4 rounded"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </Modal>

//         {/* Add Contest Modal */}
//         <Modal isOpen={isContestModalOpen} onRequestClose={() => setIsContestModalOpen(false)} ariaHideApp={false}>
//           <div className="bg-gray-800 p-6 rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Add New Contest</h2>
//             <form onSubmit={handleSubmitContest} className="space-y-4">
//               <div>
//                 <label className="block mb-1">Contest Title</label>
//                 <input
//                   type="text"
//                   name="contestTitle"
//                   value={contestData.contestTitle}
//                   onChange={handleContestChange}
//                   className="w-full p-2 rounded bg-gray-700 border border-gray-600"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Date</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={contestData.date}
//                   onChange={handleContestChange}
//                   className="w-full p-2 rounded bg-gray-700 border border-gray-600"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1">Duration (hours)</label>
//                 <input
//                   type="number"
//                   name="duration"
//                   value={contestData.duration}
//                   onChange={handleContestChange}
//                   className="w-full p-2 rounded bg-gray-700 border border-gray-600"
//                 />
//               </div>
//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsContestModalOpen(false)}
//                   className="bg-gray-600 text-white py-2 px-4 rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-green-600 text-white py-2 px-4 rounded"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </Modal>
//       </div>
      
//     </div>
//   );
// };

// export default Dashboard;
"use client"
import React from 'react';
import { Line, Bar, Doughnut, Radar, PolarArea, Bubble, Scatter, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadarController,
  PolarAreaController,
  BubbleController,
  ScatterController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register all components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadarController,
  PolarAreaController,
  BubbleController,
  ScatterController,
  Title,
  Tooltip,
  Legend
);

// Data for charts
const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [{
    label: 'Monthly Sales',
    data: [30, 45, 60, 50, 70, 90, 100],
    borderColor: '#4A90E2',
    backgroundColor: 'rgba(74, 144, 226, 0.2)',
    fill: true,
    tension: 0.1,
  }]
};

const barChartData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [{
    label: 'Quarterly Revenue',
    data: [5000, 7000, 6000, 8000],
    backgroundColor: '#E94E77',
  }]
};

const doughnutChartData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
  }]
};

const radarChartData = {
  labels: ['Strength', 'Speed', 'Endurance', 'Agility', 'Skill'],
  datasets: [{
    label: 'Player A',
    data: [6, 5, 7, 8, 5],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: '#FF6384',
    borderWidth: 1,
  }]
};

const polarAreaChartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
  }]
};

const bubbleChartData = {
  datasets: [{
    label: 'Demo Bubble Chart',
    data: [
      { x: 10, y: 20, r: 15 },
      { x: 15, y: 10, r: 20 },
      { x: 20, y: 30, r: 25 },
    ],
    backgroundColor: '#4A90E2',
  }]
};

const scatterChartData = {
  datasets: [{
    label: 'Scatter Data',
    data: [
      { x: 10, y: 20 },
      { x: 15, y: 10 },
      { x: 20, y: 30 },
    ],
    backgroundColor: '#E94E77',
  }]
};

const areaChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [{
    label: 'Yearly Growth',
    data: [20, 40, 60, 70, 80, 90, 100],
    backgroundColor: 'rgba(74, 144, 226, 0.3)',
    borderColor: '#4A90E2',
    fill: true,
  }]
};

const pieChartData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
  }]
};

const Charts = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Line Chart */}
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Line Chart</h3>
      <Line data={lineChartData} options={{ responsive: true }} />
    </div>

    {/* Bar Chart */}
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Bar Chart</h3>
      <Bar data={barChartData} options={{ responsive: true }} />
    </div>

    {/* Doughnut Chart */}
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Doughnut Chart</h3>
      <Doughnut data={doughnutChartData} options={{ responsive: true }} />
    </div>

    {/* Radar Chart */}
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Radar Chart</h3>
      <Radar data={radarChartData} options={{ responsive: true }} />
    </div>

    {/* Polar Area Chart */}
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Polar Area Chart</h3>
      <PolarArea data={polarAreaChartData} options={{ responsive: true }} />
    </div>

    {/* Bubble Chart */}
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Bubble Chart</h3>
      <Bubble data={bubbleChartData} options={{ responsive: true }} />
    </div>

    {/* Scatter Chart */}
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Scatter Chart</h3>
      <Scatter data={scatterChartData} options={{ responsive: true }} />
    </div>

    {/* Area Chart */}
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Area Chart</h3>
      <Line data={areaChartData} options={{ responsive: true }} />
    </div>

    {/* Pie Chart */}
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Pie Chart</h3>
      <Pie data={pieChartData} options={{ responsive: true }} />
    </div>
  </div>
);

export default Charts;

