// // "use client";
// // import { useSession } from "next-auth/react";
// // import { useState } from "react";

// // function completeStudentProfile() {
// //   const { data: session } = useSession();
// //   const [fullName, setFullName] = useState(session?.user?.name || "");
// //   const [batch, setBatch] = useState("");
// //   const [sapId, setSapId] = useState("");
// //   const [rollNo, setRollNo] = useState("");
// //   const [uniemail, setUnimail] = useState(session?.user?.email || "");
// //   const [phone, setPhone] = useState("");
// //   const [specialization, setSpecialization] = useState("");
// //   const [passingOutYear, setPassingOutYear] = useState("");
// //   const [showProfile, setShowProfile] = useState(false);
// //   const [isSubmitted, setIsSubmitted] = useState(false);
// //   const [showConfirmation, setShowConfirmation] = useState(false);

// //   const handleViewProfile = (e) => {
// //     e.preventDefault();
// //     setShowProfile(true);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setShowConfirmation(true);
// //   };

// //   const handleConfirmSubmission = () => {
// //     setShowConfirmation(false);
// //     setIsSubmitted(true);
// //     setShowProfile(false);
// //     console.log({
// //       fullName,
// //       batch,
// //       sapId,
// //       rollNo,
// //       uniemail,
// //       phone,
// //       specialization,
// //       passingOutYear,
// //     });
// //   };

// //   const handleCancelSubmission = () => {
// //     setShowConfirmation(false);
// //   };

// //   const handleEdit = () => {
// //     setShowProfile(false);
// //     setIsSubmitted(false);
// //   };

// //   return (
// //     <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-2xl rounded-lg">
// //       {session?.user?.image && (
// //         <div className="flex justify-center mb-8">
// //           <img
// //             src={session.user.image}
// //             alt={session.user.name}
// //             className="rounded-full w-32 h-32"
// //           />
// //         </div>
// //       )}
// //       {!isSubmitted && !showProfile && (
// //         <form>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="fullName"
// //                 className="block text-sm font-medium text-gray-600"
// //               >
// //                 Full Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="fullName"
// //                 value={fullName}
// //                 onChange={(e) => setFullName(e.target.value)}
// //                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                 placeholder="Enter your full name"
// //                 required
// //               />
// //             </div>
// //             {/* Other form fields */}


// //             <div className="mb-4">
// //               <label
// //                 htmlFor="batch"
// //                 className="block text-sm font-medium text-gray-600"
// //               >
// //                 Batch
// //               </label>
// //               <input
// //                 type="text"
// //                 id="batch"
// //                 value={batch}
// //                 onChange={(e) => setBatch(e.target.value)}
// //                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                 placeholder="Enter your batch"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="sapId"
// //                 className="block text-sm font-medium text-gray-600"
// //               >
// //                 SAP ID
// //               </label>
// //               <input
// //                 type="text"
// //                 id="sapId"
// //                 value={sapId}
// //                 onChange={(e) => setSapId(e.target.value)}
// //                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                 placeholder="Enter your SAP ID"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="rollNo"
// //                 className="block text-sm font-medium text-gray-600"
// //               >
// //                 Roll No
// //               </label>
// //               <input
// //                 type="text"
// //                 id="rollNo"
// //                 value={rollNo}
// //                 onChange={(e) => setRollNo(e.target.value)}
// //                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                 placeholder="Enter your Roll No"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="email"
// //                 className="block text-sm font-medium text-gray-600"
// //               >
// //                University Email
// //               </label>
// //               <input
// //                 type="uniemail"
// //                 id="uniemail"
// //                 value={uniemail}
// //                 onChange={(e) => setUniemail(e.target.value)}
// //                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                 placeholder="Enter your email"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="phone"
// //                 className="block text-sm font-medium text-gray-600"
// //               >
// //                 Phone Number
// //               </label>
// //               <input
// //                 type="tel"
// //                 id="phone"
// //                 value={phone}
// //                 onChange={(e) => setPhone(e.target.value)}
// //                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                 placeholder="Enter your phone number"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="specialization"
// //                 className="block text-sm font-medium text-gray-600"
// //               >
// //                 Specialization
// //               </label>
// //               <select
// //                 id="specialization"
// //                 value={specialization}
// //                 onChange={(e) => setSpecialization(e.target.value)}
// //                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                 required
// //               >
// //                 <option value="">Select your specialization</option>
// //                 <option value="AIML">AIML</option>
// //                 <option value="DevOps">DevOps</option>
// //                 <option value="CCVT">CCVT</option>
// //                 <option value="Full Stack AI">Full Stack AI</option>
// //                 <option value="Big Data">Big Data</option>
// //                 <option value="Data Science">Data Science</option>
// //               </select>
// //             </div>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="passingOutYear"
// //                 className="block text-sm font-medium text-gray-600"
// //               >
// //                 Passing Out Year
// //               </label>
// //               <select
// //                 id="passingOutYear"
// //                 value={passingOutYear}
// //                 onChange={(e) => setPassingOutYear(e.target.value)}
// //                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                 required
// //               >
// //                 <option value="">Select your passing out year</option>
// //                 {Array.from({ length: 7 }, (_, i) => 2024 + i).map((year) => (
// //                   <option key={year} value={year}>
// //                     {year}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
// //           </div>
// //           <button
// //             onClick={handleViewProfile}
// //             className="w-full mt-6 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
// //           >
// //             View Profile
// //           </button>
// //         </form>
// //       )}

// //       {showProfile && !isSubmitted && (
// //         <div>
// //           <h3 className="text-xl font-semibold text-center mb-6 text-gray-700">
// //             Profile Preview
// //           </h3>
// //           <div className="p-6 bg-gray-100 rounded-md shadow-md">
// //             <p className="text-lg">
// //               <strong></strong>
// //             </p>
// //                        <p className="text-lg">
// //                <strong>Full Name:</strong> {fullName}
// //              </p>
// //              <p className="text-lg">
// //                <strong>Batch:</strong> {batch}
// //              </p>
// //              <p className="text-lg">
// //                <strong>SAP ID:</strong> {sapId}
// //              </p>
// //              <p className="text-lg">
// //                <strong>Roll No:</strong> {rollNo}
// //              </p>
// //              <p className="text-lg">
// //                <strong>Email:</strong> {uniemail}
// //              </p>
// //              <p className="text-lg">
// //                <strong>Phone Number:</strong> {phone}
// //              </p>
// //              <p className="text-lg">
// //                <strong>Specialization:</strong> {specialization}
// //              </p>
// //              <p className="text-lg">
// //                <strong>Passing Out Year:</strong> {passingOutYear}
// //             </p>          </div>
// //           <div className="flex justify-between mt-6">
// //             <button
// //               onClick={handleEdit}
// //               className="bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600 transition duration-300"
// //             >
// //               Edit
// //             </button>
// //             <button
// //               onClick={handleSubmit}
// //               className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-300"
// //             >
// //               Submit
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {showConfirmation && (
// //         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
// //           <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
// //             <h3 className="text-xl font-bold text-gray-800 mb-4">Confirm Submission</h3>
// //             <p className="text-gray-700">
// //               Are you sure you want to submit these details? You won't be able to edit them afterward.
// //             </p>
// //             <div className="flex justify-end mt-6">
// //               <button
// //                 onClick={handleCancelSubmission}
// //                 className="bg-red-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-red-600 transition duration-300"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleConfirmSubmission}
// //                 className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
// //               >
// //                 Confirm
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {isSubmitted && (
// //         <div className="text-center mt-6">
// //           <h3 className="text-xl font-semibold text-green-600">
// //             Your profile has been successfully submitted!
// //           </h3>

// //           <div> 
// //           Go to Dashboard 
// //           </div>

// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// // export default completeStudentProfile;

// "use client"
// import { useSession } from "next-auth/react";
// import { useState } from "react";

// function CompleteStudentProfile() {
//   const { data: session } = useSession();
//   const [formData, setFormData] = useState({
//     fullName: session?.user?.name || "",
//     batch: "",
//     sapId: "",
//     rollNo: "",
//     uniemail: session?.user?.email || "",
//     phone: "",
//     specialization: "",
//     passingOutYear: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/profile', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log('Profile submitted successfully');
//         setFormData({
//           fullName: session?.user?.name || "",
//           batch: "",
//           sapId: "",
//           rollNo: "",
//           uniemail: session?.user?.email || "",
//           phone: "",
//           specialization: "",
//           passingOutYear: ""
//         });
//       } else {
//         console.error('Failed to submit profile');
//       }
//     } catch (error) {
//       console.error('Error submitting profile:', error);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-2xl rounded-lg">
//       {session?.user?.image && (
//         <div className="flex justify-center mb-8">
//           <img
//             src={session.user.image}
//             alt={session.user.name}
//             className="rounded-full w-32 h-32"
//           />
//         </div>
//       )}
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div className="mb-4">
//             <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="batch" className="block text-sm font-medium text-gray-600">
//               Batch
//             </label>
//             <input
//               type="text"
//               id="batch"
//               name="batch"
//               value={formData.batch}
//               onChange={handleChange}
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="sapId" className="block text-sm font-medium text-gray-600">
//               SAP ID
//             </label>
//             <input
//               type="text"
//               id="sapId"
//               name="sapId"
//               value={formData.sapId}
//               onChange={handleChange}
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="rollNo" className="block text-sm font-medium text-gray-600">
//               Roll No
//             </label>
//             <input
//               type="text"
//               id="rollNo"
//               name="rollNo"
//               value={formData.rollNo}
//               onChange={handleChange}
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="uniemail" className="block text-sm font-medium text-gray-600">
//               University Email
//             </label>
//             <input
//               type="email"
//               id="uniemail"
//               name="uniemail"
//               value={formData.uniemail}
//               onChange={handleChange}
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
//               Phone
//             </label>
//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="specialization" className="block text-sm font-medium text-gray-600">
//               Specialization
//             </label>
//             <input
//               type="text"
//               id="specialization"
//               name="specialization"
//               value={formData.specialization}
//               onChange={handleChange}
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="passingOutYear" className="block text-sm font-medium text-gray-600">
//               Passing Out Year
//             </label>
//             <input
//               type="text"
//               id="passingOutYear"
//               name="passingOutYear"
//               value={formData.passingOutYear}
//               onChange={handleChange}
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//         </div>
//         <div className="flex justify-end mt-6">
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Submit Profile
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CompleteStudentProfile;

























































































"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import axios from 'axios';

function StudentProfile() {
  const { data: session } = useSession();
  const [fullName, setFullName] = useState(session?.user?.name || "");
  const [sapId, setSapId] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [batch, setBatch] = useState("");
  const [passingOutYear, setPassingOutYear] = useState("");
  const [universityEmail, setUniversityEmail] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirmSubmission = async () => {
    setShowConfirmation(false);
    setIsSubmitted(true);
    setShowProfile(false);
  
    const studentData = {
      fullName,
      sapId,
      rollNo,
      batch,
      passingOutYear,
      universityEmail,
    };
  
    try {
      const response = await axios.post('http://localhost:5000/api/students', studentData); // Adjust the URL if necessary
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Error submitting student data:', error);
    }
  };
  
  const handleViewProfile = (e) => {
    e.preventDefault();
    setShowProfile(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleCancelSubmission = () => {
    setShowConfirmation(false);
  };

  const handleEdit = () => {
    setShowProfile(false);
    setIsSubmitted(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-light-red">
      <div className="max-w-5xl w-full p-8 py-4 bg-red-100 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-4">
          <span className="text-red-600">Code</span>
          <span className="text-black">Yantra</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Image Section */}
          <Image
            src="/joinus2.png" // Path relative to the public folder
            alt="Join Us"
            width={400}
            height={300}
            priority // Ensures this image loads early
            className="rounded-lg shadow-lg"
          />

          {/* Form Section */}
          <div className="flex-1">
            {!isSubmitted && !showProfile && (
              <form>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-md font-medium text-red-900"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sapId"
                      className="block text-md font-medium text-red-900"
                    >
                      SAP ID (Unique)
                    </label>
                    <input
                      type="text"
                      id="sapId"
                      value={sapId}
                      onChange={(e) => setSapId(e.target.value)}
                      className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                      placeholder="Enter unique SAP ID"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="rollNo"
                      className="block text-md font-medium text-red-900"
                    >
                      Roll Number
                    </label>
                    <input
                      type="text"
                      id="rollNo"
                      value={rollNo}
                      onChange={(e) => setRollNo(e.target.value)}
                      className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                      placeholder="Enter roll number"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="batch"
                      className="block text-md font-medium text-red-900"
                    >
                      Batch
                    </label>
                    <select
                      id="batch"
                      value={batch}
                      onChange={(e) => setBatch(e.target.value)}
                      className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                      required
                    >
                      <option value="">Select batch</option>
                      <option value="B1">B1</option>
                      <option value="B2">B2</option>
                      <option value="B3">B3</option>
                      <option value="B4">B4</option>
                      <option value="B5">B5</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="passingOutYear"
                      className="block text-md font-medium text-red-900"
                    >
                      Passing Out Year
                    </label>
                    <input
                      type="number"
                      id="passingOutYear"
                      value={passingOutYear}
                      onChange={(e) => setPassingOutYear(e.target.value)}
                      className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                      placeholder="Enter passing out year"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="universityEmail"
                      className="block text-md font-medium text-red-900"
                    >
                      University Email
                    </label>
                    <input
                      type="email"
                      id="universityEmail"
                      value={universityEmail}
                      onChange={(e) => setUniversityEmail(e.target.value)}
                      className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                      placeholder="Enter university email"
                      required
                    />
                  </div>
                </div>

                <button
                  onClick={handleViewProfile}
                  className="w-full mt-8 bg-red-900 text-white p-3 rounded-md hover:bg-red-800 transition duration-300"
                >
                  View Profile
                </button>
              </form>
            )}

            {showProfile && !isSubmitted && (
              <div className="mt-10 p-8 rounded-2xl shadow-sm max-w-2xl mx-auto">
                <div className="flex flex-col items-center">
                  {/* Avatar */}
                  <div className="w-48 h-48 mb-4 rounded-full overflow-hidden border-1 border-blue-900">
                    <Image
                      src="/teacherx.png" // Path to the image in the public folder
                      alt="User Avatar"
                      width={300} // Set width as needed
                      height={300} // Set height as needed
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center text-2xl font-extrabold mt-0">
                    {fullName}
                  </div>
                </div>

                {/* Profile Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <tbody>
                      <tr>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">SAP ID</td>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{sapId}</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">Roll Number</td>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{rollNo}</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">Batch</td>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{batch}</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">Passing Out Year</td>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{passingOutYear}</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">University Email</td>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{universityEmail}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 mt-4">
                  <button
                    onClick={handleEdit}
                    className="py-2 px-12 text-lg font-semibold text-white bg-blue-900 rounded-md shadow-md hover:bg-blue-800 transition duration-300 ease-in-out"                  >
                    Edit 
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="py-2 px-10 text-lg font-semibold text-white bg-red-900 rounded-md shadow-md hover:bg-red-800 transition duration-300 ease-in-out"
                    >
                    Submit 
                  </button>
                </div>
              </div>
            )}

            {isSubmitted && (
              <div className="mt-10 p-8 rounded-2xl shadow-sm max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4 text-green-900">
                  Profile Submitted Successfully!
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Thank you, {fullName}. Your profile details have been submitted.
                </p>
                <button
                  onClick={handleEdit}
                  className="bg-red-900 text-white p-2 rounded-md hover:bg-red-800 transition duration-300"
                >
                  Edit Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showConfirmation && (
              <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                  <h3 className="text-xl font-bold text-red-800 mb-4">
                    Confirm Submission
                  </h3>
                  <p className="text-gray-700">
                    Are you sure you want to submit these details? 
                  </p>
                  <div className="flex justify-end mt-6">
                    <button
                      onClick={handleCancelSubmission}
                      className="bg-red-900 text-white px-4 py-2 rounded-md mr-4 hover:bg-red-800 transition duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleConfirmSubmission}
                      className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}
    </div>
  );
}

export default StudentProfile;
