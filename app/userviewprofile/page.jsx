// pages/profile.tsx

import React from 'react';
import { useSession } from "next-auth/react";

const userProfile = {
  fullName: 'John Doe',
  batch: '2023',
  sapId: 'SAP123456',
  rollNo: 'ROLL123456',
  email: 'johndoe@example.com',
  phoneNumber: '+91 123 456 7890',
  specialization: 'Software Engineering',
  passingOutYear: '2025',
};

const ProfilePage= () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">{userProfile.fullName}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-6 rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Batch</h2>
              <p className="text-gray-600">{userProfile.batch}</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">SAP ID</h2>
              <p className="text-gray-600">{userProfile.sapId}</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Roll No</h2>
              <p className="text-gray-600">{userProfile.rollNo}</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Specialization</h2>
              <p className="text-gray-600">{userProfile.specialization}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-6 rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Email</h2>
              <p className="text-gray-600">{userProfile.email}</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Phone Number</h2>
              <p className="text-gray-600">{userProfile.phoneNumber}</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Passing Out Year</h2>
              <p className="text-gray-600">{userProfile.passingOutYear}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
