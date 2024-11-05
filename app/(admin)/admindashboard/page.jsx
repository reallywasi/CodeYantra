import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex flex-1">
        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Quick Stats Cards */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
              <div className="text-xl font-semibold text-gray-700">Total Faculties</div>
              <div className="ml-auto text-3xl font-bold text-blue-600">30</div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
              <div className="text-xl font-semibold text-gray-700">Total Students</div>
              <div className="ml-auto text-3xl font-bold text-green-600">120</div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between text-gray-700">
                <div>Added new faculty to Batch CSE2024</div>
                <div className="text-sm text-gray-500">2 hours ago</div>
              </li>
              <li className="flex items-center justify-between text-gray-700">
                <div>Updated student records in Batch AIML2025</div>
                <div className="text-sm text-gray-500">5 hours ago</div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
