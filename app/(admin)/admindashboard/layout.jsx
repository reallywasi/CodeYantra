import React from 'react';
import { FiLogOut, FiHome, FiUsers, FiLayers, FiDatabase, FiSettings } from 'react-icons/fi';
import Link from 'next/link';

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-red-700">Admin Dashboard</div>
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
              <Link href="/" className="flex items-center text-gray-700 hover:text-red-600">
                <FiHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link href="/admindashboard/Faculties" className="flex items-center text-gray-700 hover:text-red-600">
                <FiUsers className="mr-2" /> View All Faculties
              </Link>
            </li>
            <li>
              <Link href="/admindashboard/Students" className="flex items-center text-gray-700 hover:text-red-600">
                <FiLayers className="mr-2" /> View All Students
              </Link>
            </li>
            <li>
              <Link href="/admindashboard/Feedbacks" className="flex items-center text-gray-700 hover:text-red-600">
                <FiDatabase className="mr-2" /> View Feedbacks
              </Link>
            </li>
            <li>
              <Link href="/admin/settings" className="flex items-center text-gray-700 hover:text-blue-600">
                <FiSettings className="mr-2" /> Settings
              </Link>
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
        © 2024 Code Yantra Admin Dashboard. All rights reserved.
      </footer>
    </div>
  );
};

export default AdminLayout;
