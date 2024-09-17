
// layout.jsx
import React from 'react';
import { FiLogOut, FiHome, FiCode, FiList, FiBarChart2, FiBell, FiSettings } from 'react-icons/fi';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-blue-900">CodeYantra Student Dashboard</div>
        <button className="flex items-center text-gray-600 hover:text-blue-600">
          <FiLogOut className="mr-2" /> Logout
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <nav className="bg-white w-72 p-6 shadow-md">
          <ul className="space-y-6">
            <li>
              <a href="/" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <FiHome className="mr-2 text-xl" /> Home Page
              </a>
            </li>
            <li>
              <a href="/studentDashboard/upcoming" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <FiCode className="mr-2 text-xl" /> Upcoming Observations
              </a>
            </li>
            <li>
              <a href="/studentDashboard/leaderboard" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <FiBarChart2 className="mr-2 text-xl" /> Leaderboard
              </a>
            </li>
            <li>
              <a href="/studentDashboard/feedback" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <FiList className="mr-2 text-xl" /> Feedback
                <span className="ml-2 bg-red-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">3</span>
              </a>
            </li>
            <li>
              <a href="/studentDashboard/viewStudentProfile" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <FiSettings className="mr-2 text-xl" /> View Profile
              </a>
            </li>
            <li className="mt-6 border-t border-gray-200 pt-4">
              <h3 className="text-sm font-semibold text-gray-600">Quick Links</h3>
              <ul className="space-y-4 mt-4">
                <li>
                  <a href="/resources" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300">
                    <AiFillStar className="mr-2 text-xl" /> Resources
                  </a>
                </li>
                <li>
                  <a href="/support" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300">
                    <FiBell className="mr-2 text-xl" /> Report a Bug
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white p-4 shadow-md text-center text-gray-500">
        © 2024 CodeYantra. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
