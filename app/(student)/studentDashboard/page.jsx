
import React from "react";
import {
  FiLogOut,
  FiHome,
  FiCode,
  FiList,
  FiBarChart2,
  FiBell,
  FiSettings,
} from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import UpcomingObservations from "@/components/upcomingObservations";
function page() {
  return (
    <div>
      <main className="flex-1 p-8">
        {/* Profile Overview */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6 flex items-center space-x-6">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl text-gray-600">
            <BsFillPersonFill />
          </div>
          <div>
            <div className="text-2xl font-semibold text-gray-700">John Doe</div>
            <div className="text-gray-500">ID: 123456</div>
            <div className="text-gray-500">Batch: 2023</div>
            <div className="text-gray-500">Current Rank: 7</div>
          </div>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
            <div className="text-xl font-semibold text-gray-700">
              Total Submissions
            </div>
            <div className="ml-auto text-3xl font-bold text-blue-600">45</div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
            <div className="text-xl font-semibold text-gray-700">
              Observations Received
            </div>
            <div className="ml-auto text-3xl font-bold text-green-600">12</div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
            <div className="text-xl font-semibold text-gray-700">
              Pending Feedback
            </div>
            <div className="ml-auto text-3xl font-bold text-red-600">3</div>
          </div>
        </div>

        {/* Course Progress */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Course Progress
          </h2>
          <div className="flex items-center justify-between mb-2">
            <div className="text-gray-700">Coding Challenges</div>
            <div className="text-gray-500">80%</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Upcoming Deadlines
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between text-gray-700">
              <div>Algorithm Assignment</div>
              <div className="text-sm text-gray-500">Due: 2nd Sep</div>
            </li>
            <li className="flex items-center justify-between text-gray-700">
              <div>Data Structures Quiz</div>
              <div className="text-sm text-gray-500">Due: 5th Sep</div>
            </li>
            <li className="flex items-center justify-between text-gray-700">
              <div>Project Submission</div>
              <div className="text-sm text-gray-500">Due: 10th Sep</div>
            </li>
          </ul>
        </div>

        {/* Recent Notifications */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Notifications
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <FiBell className="mr-2 text-blue-600" />
              <div>Your code has received feedback from the faculty.</div>
            </li>
            <li className="flex items-center text-gray-700">
              <FiBell className="mr-2 text-blue-600" />
              <div>New coding challenges are available.</div>
            </li>
            <li className="flex items-center text-gray-700">
              <FiBell className="mr-2 text-blue-600" />
              <div>Upcoming deadlines updated.</div>
            </li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Quick Actions
          </h2>
          <div className="flex space-x-4">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              View Submissions
            </button>
            <button className="bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
              Submit Code
            </button>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300">
              View Leaderboard
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
