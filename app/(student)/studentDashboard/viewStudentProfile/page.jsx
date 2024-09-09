// "use client"
// import React, { useState } from 'react';
// import { FaUser, FaCalendarAlt, FaIdBadge, FaPhoneAlt, FaAt, FaPencilAlt, FaSave } from 'react-icons/fa';

// function EditStudentProfile() {
//   // Example state for profile data
//   const [profile, setProfile] = useState({
//     fullName: "John Doe",
//     batch: "2024",
//     sapId: "SAP123456",
//     rollNo: "ROLL7890",
//     uniEmail: "john.doe@university.edu",
//     phone: "+1234567890",
//     specialization: "Computer Science",
//     passingOutYear: "2024"
//   });

//   // Toggle edit mode
//   const [isEditing, setIsEditing] = useState(false);

//   // Handle change in input fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile(prevProfile => ({
//       ...prevProfile,
//       [name]: value
//     }));
//   };

//   return (
//     <section className="bg-gray-100 min-h-screen py-12 px-4">
//       <div className="container mx-auto max-w-3xl bg-white p-8 rounded-xl shadow-lg border border-gray-200">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">Student Profile</h1>
//           <button
//             onClick={() => setIsEditing(!isEditing)}
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center shadow-md hover:bg-blue-600 transition duration-300"
//           >
//             <FaPencilAlt className="mr-2" />
//             {isEditing ? "View Profile" : "Edit Profile"}
//           </button>
//         </div>
        
//         <form className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Full Name */}
//             <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
//               <FaUser className="text-gray-600 mr-3" />
//               <input
//                 type="text"
//                 name="fullName"
//                 value={profile.fullName}
//                 onChange={handleChange}
//                 placeholder="Enter full name"
//                 disabled={!isEditing}
//                 className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
//               />
//             </div>

//             {/* Batch */}
//             <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
//               <FaCalendarAlt className="text-gray-600 mr-3" />
//               <input
//                 type="text"
//                 name="batch"
//                 value={profile.batch}
//                 onChange={handleChange}
//                 placeholder="Enter batch"
//                 disabled={!isEditing}
//                 className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
//               />
//             </div>

//             {/* SAP ID */}
//             <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
//               <FaIdBadge className="text-gray-600 mr-3" />
//               <input
//                 type="text"
//                 name="sapId"
//                 value={profile.sapId}
//                 onChange={handleChange}
//                 placeholder="Enter SAP ID"
//                 disabled={!isEditing}
//                 className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
//               />
//             </div>

//             {/* Roll No */}
//             <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
//               <FaIdBadge className="text-gray-600 mr-3" />
//               <input
//                 type="text"
//                 name="rollNo"
//                 value={profile.rollNo}
//                 onChange={handleChange}
//                 placeholder="Enter roll number"
//                 disabled={!isEditing}
//                 className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
//               />
//             </div>

//             {/* University Email */}
//             <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
//               <FaAt className="text-gray-600 mr-3" />
//               <input
//                 type="email"
//                 name="uniEmail"
//                 value={profile.uniEmail}
//                 onChange={handleChange}
//                 placeholder="Enter university email"
//                 disabled={!isEditing}
//                 className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
//               />
//             </div>

//             {/* Phone */}
//             <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
//               <FaPhoneAlt className="text-gray-600 mr-3" />
//               <input
//                 type="tel"
//                 name="phone"
//                 value={profile.phone}
//                 onChange={handleChange}
//                 placeholder="Enter phone number"
//                 disabled={!isEditing}
//                 className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
//               />
//             </div>

//             {/* Specialization */}
//             <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
//               <FaUser className="text-gray-600 mr-3" />
//               <input
//                 type="text"
//                 name="specialization"
//                 value={profile.specialization}
//                 onChange={handleChange}
//                 placeholder="Enter specialization"
//                 disabled={!isEditing}
//                 className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
//               />
//             </div>

//             {/* Passing Out Year */}
//             <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
//               <FaCalendarAlt className="text-gray-600 mr-3" />
//               <input
//                 type="text"
//                 name="passingOutYear"
//                 value={profile.passingOutYear}
//                 onChange={handleChange}
//                 placeholder="Enter passing out year"
//                 disabled={!isEditing}
//                 className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
//               />
//             </div>
//           </div>
          
//           {/* Save Profile Button */}
//           {isEditing && (
//             <div className="text-center mt-6">
//               <button
//                 type="submit"
//                 className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-lg flex items-center justify-center mx-auto hover:bg-red-600 transition duration-300 transform hover:scale-105"
//               >
//                 <FaSave className="mr-2" />
//                 Save Changes
//               </button>
//             </div>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// }

// export default EditStudentProfile;


"use client";

import React, { useState } from "react";
import { FaUser, FaCalendarAlt, FaIdBadge, FaPhoneAlt, FaAt, FaPencilAlt, FaSave } from "react-icons/fa";

function EditStudentProfile() {
  const [profile, setProfile] = useState({
    fullName: "",
    batch: "",
    sapId: "",
    rollNo: "",
    uniEmail: "",
    phone: "",
    specialization: "",
    passingOutYear: ""
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Submit the form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/student/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile), // Send profile data
      });

      if (res.ok) {
        alert("Profile data sent to MongoDB successfully!");
      } else {
        alert("Error sending data");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending data");
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Student Profile</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center shadow-md hover:bg-blue-600 transition duration-300"
          >
            <FaPencilAlt className="mr-2" />
            {isEditing ? "View Profile" : "Edit Profile"}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaUser className="text-gray-600 mr-3" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={profile.fullName}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaCalendarAlt className="text-gray-600 mr-3" />
              <input
                type="text"
                name="batch"
                placeholder="Batch eg. AIMLB8NH"

                value={profile.batch}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaIdBadge className="text-gray-600 mr-3" />
              <input
                type="text"
                name="sapId"
                placeholder="SAP ID "
                value={profile.sapId}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaIdBadge className="text-gray-600 mr-3" />
              <input
                type="text"
                name="rollNo"
                value={profile.rollNo}
                placeholder="Roll Number"
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaAt className="text-gray-600 mr-3" />
              <input
                type="email"
                name="uniEmail"
                placeholder="University's Email"
                value={profile.uniEmail}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaPhoneAlt className="text-gray-600 mr-3" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={profile.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaUser className="text-gray-600 mr-3" />
              <input
                type="text"
                name="specialization"
                placeholder="Specialization eg. AIML"
                value={profile.specialization}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaCalendarAlt className="text-gray-600 mr-3" />
              <input
                type="text"
                name="passingOutYear"
                placeholder="Passing Out Year"
                value={profile.passingOutYear}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {isEditing && (
            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-lg flex items-center justify-center mx-auto hover:bg-red-600 transition duration-300 transform hover:scale-105"
              >
                <FaSave className="mr-2" />
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default EditStudentProfile;
