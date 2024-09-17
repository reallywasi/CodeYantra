// // pages/crudstudentprofile.jsx
"use client"
// import { useState } from 'react';

// const initialProfile = {
//   fullName: '',
//   batch: '',
//   sapId: '',
//   rollNo: '',
//   uniemail: '',
//   phone: '',
//   specialization: '',
//   passingOutYear: '',
// };

// export default function crudstudentprofile() {
//   const [profile, setProfile] = useState(initialProfile);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleSave = () => {
//     // Here you would typically send the profile data to an API or save it
//     alert('Profile saved!');
//     setProfile(initialProfile); // Clear the form after saving
//   };

//   return (
//     <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-red-800 mb-6">Student Profile Entry</h1>
//       <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <div className="grid grid-cols-1 gap-6">
//           {Object.keys(initialProfile).map((key) => (
//             <div key={key} className="flex flex-col">
//               <label htmlFor={key} className="font-semibold text-gray-700 mb-2">
//                 {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
//               </label>
//               <input
//                 id={key}
//                 name={key}
//                 type="text"
//                 value={profile[key]}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded p-3 text-gray-900 focus:ring-red-500 focus:border-red-500"
//                 placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1')}`}
//               />
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={handleSave}
//           className="mt-6 bg-red-800 text-white px-6 py-3 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
//         >
//           Save Profile
//         </button>
//       </div>
//     </div>
//   );
// }









// import { useState } from 'react';

// const initialProfile = {
//   fullName: '',
//   batch: '',
//   sapId: '',
//   rollNo: '',
//   uniemail: '',
//   phone: '',
//   specialization: '',
//   passingOutYear: '',
// };

// export default function crudstudentprofile() {
//   const [profile, setProfile] = useState(initialProfile);
//   const [profiles, setProfiles] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/profiles', {  // Correct the URL to match your Express server port
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(profile),
//       });
  
//       if (!response.ok) throw new Error('Failed to save profile');
  
//       const data = await response.json();
//       setProfiles([...profiles, data]);
//       setProfile(initialProfile);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

//   return (
//     <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-red-800 mb-6">Student Profile Entry</h1>
//       <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <div className="grid grid-cols-1 gap-6">
//           {Object.keys(initialProfile).map((key) => (
//             <div key={key} className="flex flex-col">
//               <label htmlFor={key} className="font-semibold text-gray-700 mb-2">
//                 {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
//               </label>
//               <input
//                 id={key}
//                 name={key}
//                 type="text"
//                 value={profile[key]}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded p-3 text-gray-900 focus:ring-red-500 focus:border-red-500"
//                 placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1')}`}
//               />
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={handleSave}
//           className="mt-6 bg-red-800 text-white px-6 py-3 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
//         >
//           Save Profile
//         </button>
//       </div>
//     </div>
//   );
// }








import React from 'react';
import { FaUser, FaCalendarAlt, FaIdBadge, FaPhoneAlt, FaAt, FaSave } from 'react-icons/fa';

function StudentProfile() {
  return (
    <section className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Update Your Profile</h1>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gray-50">
              <FaUser className="text-gray-600 mr-3" />
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full bg-transparent border-none focus:outline-none text-gray-700"
              />
            </div>

            {/* Batch */}
            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gray-50">
              <FaCalendarAlt className="text-gray-600 mr-3" />
              <input
                type="text"
                placeholder="Enter batch"
                className="w-full bg-transparent border-none focus:outline-none text-gray-700"
              />
            </div>

            {/* SAP ID */}
            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gray-50">
              <FaIdBadge className="text-gray-600 mr-3" />
              <input
                type="text"
                placeholder="Enter SAP ID"
                className="w-full bg-transparent border-none focus:outline-none text-gray-700"
              />
            </div>

            {/* Roll No */}
            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gray-50">
              <FaIdBadge className="text-gray-600 mr-3" />
              <input
                type="text"
                placeholder="Enter roll number"
                className="w-full bg-transparent border-none focus:outline-none text-gray-700"
              />
            </div>

            {/* University Email */}
            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gray-50">
              <FaAt className="text-gray-600 mr-3" />
              <input
                type="email"
                placeholder="Enter university email"
                className="w-full bg-transparent border-none focus:outline-none text-gray-700"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gray-50">
              <FaPhoneAlt className="text-gray-600 mr-3" />
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full bg-transparent border-none focus:outline-none text-gray-700"
              />
            </div>

            {/* Specialization */}
            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gray-50">
              <FaUser className="text-gray-600 mr-3" />
              <input
                type="text"
                placeholder="Enter specialization"
                className="w-full bg-transparent border-none focus:outline-none text-gray-700"
              />
            </div>

            {/* Passing Out Year */}
            <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gray-50">
              <FaCalendarAlt className="text-gray-600 mr-3" />
              <input
                type="text"
                placeholder="Enter passing out year"
                className="w-full bg-transparent border-none focus:outline-none text-gray-700"
              />
            </div>
          </div>
          
          {/* Save Profile Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md flex items-center justify-center mx-auto hover:bg-red-600 transition duration-300"
            >
              <FaSave className="mr-2" />
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default StudentProfile;
