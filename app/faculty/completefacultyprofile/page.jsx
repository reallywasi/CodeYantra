

// // "use client";


// // import { useSession } from "next-auth/react";
// // import { useRouter } from 'next/navigation'

// // import { useState } from "react";
// // import Image from "next/image";
// // import axios from 'axios';
// // function FacultyProfile() {
// //   const { data: session } = useSession();
// //   const [fullName, setFullName] = useState(session?.user?.name || "");
// //   const [sapId, setSapId] = useState("");
// //   const [designation, setDesignation] = useState("");
// //   const [universityEmail, setUniversityEmail] = useState("");
// //   const [batches, setBatches] = useState("");
// //   const [showProfile, setShowProfile] = useState(false);
// //   const [isSubmitted, setIsSubmitted] = useState(false);
// //   const [showConfirmation, setShowConfirmation] = useState(false);
// //   const router = useRouter()


// //   const handleConfirmSubmission = async () => {
// //     setShowConfirmation(false);
// //     setIsSubmitted(true);
// //     setShowProfile(false);

// //     const facultyData = {
// //         fullName,
// //         sapId,
// //         designation,
// //         universityEmail,
// //         batches,
// //     };

// //     console.log('Submitting faculty data:', facultyData); // Debug log

// //     try {
// //         const response = await axios.post('http://localhost:5000/api/faculty/add', facultyData);
// //         console.log('Response:', response.data); // Handle success response
// //     } catch (error) {
// //         console.error('Error submitting faculty data:', error.response ? error.response.data : error.message);
// //         alert('Error saving data. Please try again.'); // Provide user feedback
// //     }
// // };

  
// //   const handleViewProfile = (e) => {
// //     e.preventDefault();
// //     setShowProfile(true);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setShowConfirmation(true);
// //     router.push(`/faculty/${sapId}/facultydashboard/viewfacultyprofile`);

// //   };


// //   const handleCancelSubmission = () => {
// //     setShowConfirmation(false);
// //   };




// //   const handleEdit = () => {
// //     setShowProfile(false);
// //     setIsSubmitted(false);
// //   };




// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-light-red">
// //       <div className="max-w-5xl w-full p-8 bg-red-100 rounded-lg shadow-lg">
// //         <h1 className="text-4xl font-bold text-center mb-8">
// //           <span className="text-red-600">Code</span>
// //           <span className="text-black">Yantra</span>
// //         </h1>

// //         <div className="flex flex-col md:flex-row items-center justify-center gap-12">
// //           {/* Image Section */}
// //           <Image
// //             src="/joinus2.png" // Path relative to the public folder
// //             alt="Join Us"
// //             width={400}
// //             height={300}
// //             priority // Ensures this image loads early
// //             className="rounded-lg shadow-lg"
// //           />

// //           {/* Form Section */}
// //           <div className="flex-1">
// //             {!isSubmitted && !showProfile && (
// //               <form>
// //                 <div className="grid grid-cols-1 gap-6">
// //                   <div>
// //                     <label
// //                       htmlFor="fullName"
// //                       className="block text-md font-medium text-red-900"
// //                     >
// //                       Full Name
// //                     </label>
// //                     <input
// //                       type="text"
// //                       id="fullName"
// //                       value={fullName}
// //                       onChange={(e) => setFullName(e.target.value)}
// //                       className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
// //                       placeholder="Enter full name"
// //                       required
// //                     />
// //                   </div>
// //                   <div>
// //                     <label
// //                       htmlFor="sapId"
// //                       className="block  text-md font-medium text-red-900"
// //                     >
// //                       SAP ID (Unique)
// //                     </label>
// //                     <input
// //                       type="text"
// //                       id="sapId"
// //                       value={sapId}
// //                       onChange={(e) => setSapId(e.target.value)}
// //                       className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
// //                       placeholder="Enter unique SAP ID"
// //                       required
// //                     />
// //                   </div>
// //                   <div>
// //                     <label
// //                       htmlFor="designation"
// //                       className="block text-md font-medium text-red-900"
// //                     >
// //                       Designation
// //                     </label>
// //                     <select
// //                       id="designation"
// //                       value={designation}
// //                       onChange={(e) => setDesignation(e.target.value)}
// //                       className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
// //                       required
// //                     >
// //                       <option value="">Select designation</option>
// //                       <option value="Associate Professor">Associate Professor</option>
// //                       <option value="Senior Associate Professor">Senior Associate Professor</option>
// //                     </select>
// //                   </div>
// //                   <div>
// //                     <label
// //                       htmlFor="universityEmail"
// //                       className="block text-md font-medium text-red-900"
// //                     >
// //                       University Email
// //                     </label>
// //                     <input
// //                       type="email"
// //                       id="universityEmail"
// //                       value={universityEmail}
// //                       onChange={(e) => setUniversityEmail(e.target.value)}
// //                       className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
// //                       placeholder="Enter university email"
// //                       required
// //                     />
// //                   </div>
// //                   <div>
// //                     <label
// //                       htmlFor="batches"
// //                       className="block text-md font-medium text-red-900"
// //                     >
// //                       Batches You Teach
// //                     </label>
// //                     <select
// //                       id="batches"
// //                       value={batches}
// //                       onChange={(e) => setBatches(e.target.value)}
// //                       className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
// //                       required
// //                     >
// //                       <option value="">Select batch</option>
// //                       <option value="B1">B1</option>
// //                       <option value="B2">B2</option>
// //                       <option value="B3">B3</option>
// //                       <option value="B4">B4</option>
// //                       <option value="B5">B5</option>
// //                     </select>
// //                   </div>
// //                 </div>

// //                 <button
// //                   onClick={handleViewProfile}
// //                   className="w-full mt-8 bg-red-900 text-white p-3 rounded-md hover:bg-red-800 transition duration-300"
// //                 >
// //                   View Profile
// //                 </button>
// //               </form>
// //             )}

// //             {showProfile && !isSubmitted && (
// //   <div className="mt-10 p-8 rounded-2xl shadow-sm max-w-2xl mx-auto">
// //   <div className="flex flex-col items-center">
// //   {/* Avatar */}
// //   <div className="w-48 h-48 mb-4 rounded-full overflow-hidden border-1 border-blue-900">
// //     <Image
// //       src="/teacherx.png" // Path to the image in the public folder
// //       alt="User Avatar"
// //       width={300} // Set width as needed
// //       height={300} // Set height as needed
// //       className="w-full h-full object-cover"
// //     />
// //   </div>
// //   <div className="text-center text-2xl font-extrabold mt-0">
// //      {fullName}
// //   </div>
// // </div>

    
// //     {/* Profile Table */}
// //     <div className="overflow-x-auto">

// //       <table className="min-w-full border border-gray-300">
// //         <tbody>
       
// //           <tr>
// //             <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">SAP ID</td>
// //             <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{sapId}</td>
// //           </tr>
// //           <tr>
// //             <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">Designation</td>
// //             <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{designation}</td>
// //           </tr>
// //           <tr>
// //             <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">University Email</td>
// //             <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{universityEmail}</td>
// //           </tr>
// //           <tr>
// //             <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">Batches</td>
// //             <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{batches}</td>
// //           </tr>
// //         </tbody>
// //       </table>
// //     </div>
    
// //     {/* Buttons */}
// //     <div className="flex justify-center space-x-6 mt-8">
// //       <button
// //         onClick={handleEdit}
// //         className="py-2 px-12 text-lg font-semibold text-white bg-blue-900 rounded-md shadow-md hover:bg-blue-800 transition duration-300 ease-in-out"
// //       >
// //         Edit
// //       </button>
// //       <button
// //         onClick={handleSubmit}
// //         className="py-2 px-10 text-lg font-semibold text-white bg-red-900 rounded-md shadow-md hover:bg-red-800 transition duration-300 ease-in-out"
// //       >
// //         Submit
// //       </button>
// //     </div>
// //   </div>
// // )}

// //             {showConfirmation && (
// //               <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
// //                 <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
// //                   <h3 className="text-xl font-bold text-red-800 mb-4">
// //                     Confirm Submission
// //                   </h3>
// //                   <p className="text-gray-700">
// //                     Are you sure you want to submit these details? 
// //                   </p>
// //                   <div className="flex justify-end mt-6">
// //                     <button
// //                       onClick={handleCancelSubmission}
// //                       className="bg-red-900 text-white px-4 py-2 rounded-md mr-4 hover:bg-red-800 transition duration-300"
// //                     >
// //                       Cancel
// //                     </button>
// //                     <button
// //                       onClick={handleConfirmSubmission}
// //                       className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300"
// //                     >
// //                       Confirm
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {isSubmitted && (
// //               <div className="text-center mt-8">
// //                 <h3 className="text-xl font-semibold text-green-600">
// //                   Your profile has been successfully submitted!
// //                 </h3>
// //                 <a
// //                   href="/dashboard"
// //                   className="text-blue-800 hover:underline mt-4 inline-block"
// //                 >
// //                   Go to Dashboard
// //                 </a>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default FacultyProfile;





















































































// "use client";

// import { useSession } from "next-auth/react";
// import { useRouter } from 'next/navigation';
// import { useState } from "react";
// import Image from "next/image";
// import axios from 'axios';

// function FacultyProfile() {
//   const { data: session } = useSession();
//   const [fullName, setFullName] = useState(session?.user?.name || "");
//   const [sapId, setSapId] = useState("");
//   const [designation, setDesignation] = useState("");
//   const [universityEmail, setUniversityEmail] = useState("");
//   const [batches, setBatches] = useState("");
//   const [showProfile, setShowProfile] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const router = useRouter();

//   const handleConfirmSubmission = async () => {
//     setShowConfirmation(false);
//     setIsSubmitted(true);
//     setShowProfile(false);

//     const facultyData = {
//         fullName,
//         sapId,
//         designation,
//         universityEmail,
//         batches,
//     };

//     console.log('Submitting faculty data:', facultyData);

//     try {
//         const response = await axios.post('http://localhost:5000/api/faculty/add', facultyData);
//         console.log('Response:', response.data);
//     } catch (error) {
//         console.error('Error submitting faculty data:', error.response ? error.response.data : error.message);
//         alert('Error saving data. Please try again.');
//     }
//   };

//   const handleViewProfile = (e) => {
//     e.preventDefault();
//     setShowProfile(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowConfirmation(true);
//     router.push(`/faculty/${sapId}/facultydashboard/viewfacultyprofile`);
//   };

//   const handleCancelSubmission = () => {
//     setShowConfirmation(false);
//   };

//   const handleEdit = () => {
//     setShowProfile(false);
//     setIsSubmitted(false);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-light-red">
//       <div className="max-w-5xl w-full p-8 bg-red-100 rounded-lg shadow-lg">
//         <h1 className="text-4xl font-bold text-center mb-8">
//           <span className="text-red-600">Code</span>
//           <span className="text-black">Yantra</span>
//         </h1>

//         <div className="flex flex-col md:flex-row items-center justify-center gap-12">
//           {/* Image Section */}
//           <Image
//             src="/joinus2.png"
//             alt="Join Us"
//             width={400}
//             height={300}
//             priority
//             className="rounded-lg shadow-lg"
//           />

//           {/* Form Section */}
//           <div className="flex-1">
//             {!isSubmitted && !showProfile && (
//               <form>
//                 <div className="grid grid-cols-1 gap-6">
//                   <div>
//                     <label htmlFor="fullName" className="block text-md font-medium text-red-900">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       id="fullName"
//                       value={fullName}
//                       onChange={(e) => setFullName(e.target.value)}
//                       className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//                       placeholder="Enter full name"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="sapId" className="block text-md font-medium text-red-900">
//                       SAP ID (Unique)
//                     </label>
//                     <input
//                       type="text"
//                       id="sapId"
//                       value={sapId}
//                       onChange={(e) => setSapId(e.target.value)}
//                       className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//                       placeholder="Enter unique SAP ID"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="designation" className="block text-md font-medium text-red-900">
//                       Designation
//                     </label>
//                     <select
//                       id="designation"
//                       value={designation}
//                       onChange={(e) => setDesignation(e.target.value)}
//                       className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//                       required
//                     >
//                       <option value="">Select designation</option>
//                       <option value="Associate Professor">Associate Professor</option>
//                       <option value="Senior Associate Professor">Senior Associate Professor</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label htmlFor="universityEmail" className="block text-md font-medium text-red-900">
//                       University Email
//                     </label>
//                     <input
//                       type="email"
//                       id="universityEmail"
//                       value={universityEmail}
//                       onChange={(e) => setUniversityEmail(e.target.value)}
//                       className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//                       placeholder="Enter university email"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="batches" className="block text-md font-medium text-red-900">
//                       Batches You Teach
//                     </label>
//                     <select
//                       id="batches"
//                       value={batches}
//                       onChange={(e) => setBatches(e.target.value)}
//                       className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//                       required
//                     >
//                       <option value="">Select batch</option>
//                       <option value="B1">B1</option>
//                       <option value="B2">B2</option>
//                       <option value="B3">B3</option>
//                       <option value="B4">B4</option>
//                       <option value="B5">B5</option>
//                     </select>
//                   </div>
//                 </div>

//                 <button
//                   onClick={handleViewProfile}
//                   className="w-full mt-8 bg-red-900 text-white p-3 rounded-md hover:bg-red-800 transition duration-300"
//                 >
//                   View Profile
//                 </button>
//               </form>
//             )}

//             {showProfile && !isSubmitted && (
//               <div className="mt-10 p-8 rounded-2xl shadow-sm max-w-2xl mx-auto">
//                 <div className="flex flex-col items-center">
//                   {/* Avatar */}
//                   <div className="w-48 h-48 mb-4 rounded-full overflow-hidden border-1 border-blue-900">
//                     <Image
//                       src="/teacherx.png"
//                       alt="User Avatar"
//                       width={300}
//                       height={300}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="text-center text-2xl font-extrabold mt-0">
//                     {fullName}
//                   </div>
//                 </div>

//                 {/* Profile Table */}
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full border border-gray-300">
//                     <tbody>
//                       <tr>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">SAP ID</td>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{sapId}</td>
//                       </tr>
//                       <tr>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">Designation</td>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{designation}</td>
//                       </tr>
//                       <tr>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">University Email</td>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{universityEmail}</td>
//                       </tr>
//                       <tr>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">Batches</td>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{batches}</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex justify-center space-x-6 mt-8">
//                   <button
//                     onClick={handleEdit}
//                     className="py-2 px-12 text-lg font-semibold text-white bg-blue-900 rounded-md shadow-md hover:bg-blue-800 transition duration-300 ease-in-out"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={handleSubmit}
//                     className="py-2 px-10 text-lg font-semibold text-white bg-red-900 rounded-md shadow-md hover:bg-red-800 transition duration-300 ease-in-out"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             )}

//             {showConfirmation && (
//               <div className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-75 flex items-center justify-center z-50">
//                 <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//                   <h2 className="text-xl font-semibold mb-4">Confirm Submission</h2>
//                   <div className="flex justify-between items-center mb-8">
//                     <button
//                       onClick={handleCancelSubmission}
//                       className="py-2 px-6 bg-gray-300 text-black rounded-md"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       onClick={handleConfirmSubmission}
//                       className="py-2 px-6 bg-green-500 text-white rounded-md"
//                     >
//                       Confirm
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FacultyProfile;



































// "use client";

// import { useSession } from "next-auth/react";
// import { useState } from "react";
// import Image from "next/image";
// import axios from "axios";

// function FacultyProfile() {
//   const { data: session } = useSession();
//   const [fullName, setFullName] = useState(session?.user?.name || "");
//   const [sapId, setSapId] = useState("");
//   const [designation, setDesignation] = useState("");
//   const [universityEmail, setUniversityEmail] = useState("");
//   const [batches, setBatches] = useState("");
//   const [showProfile, setShowProfile] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const handleConfirmSubmission = async () => {
//     setShowConfirmation(false);
//     setIsSubmitted(true);
//     setShowProfile(false);

//     const facultyData = {
//       fullName,
//       sapId,
//       designation,
//       universityEmail,
//       batches,
//     };

//     console.log("Submitting faculty data:", facultyData);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/faculty/add", // Replace with your actual API endpoint
//         facultyData
//       );
//       console.log("Response:", response.data);
//       // Show a success alert if the data is saved successfully
//       alert("Data saved successfully!");
//     } catch (error) {
//       console.error(
//         "Error submitting faculty data:",
//         error.response ? error.response.data : error.message
//       );
//       // Show an error alert if there is a failure
//       alert("Error saving data. Please try again.");
//     }
//   };

//   const handleViewProfile = (e) => {
//     e.preventDefault();
//     setShowProfile(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowConfirmation(true);
//   };

//   const handleCancelSubmission = () => {
//     setShowConfirmation(false);
//   };

//   const handleEdit = () => {
//     setShowProfile(false);
//     setIsSubmitted(false);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-light-red">
//       <div className="max-w-5xl w-full p-8 bg-red-100 rounded-lg shadow-lg">
//         <h1 className="text-4xl font-bold text-center mb-8">
//           <span className="text-red-600">Code</span>
//           <span className="text-black">Yantra</span>
//         </h1>

//         <div className="flex flex-col md:flex-row items-center justify-center gap-12">
//           {/* Image Section */}
//           <Image
//             src="/joinus2.png"
//             alt="Join Us"
//             width={400}
//             height={300}
//             priority
//             className="rounded-lg shadow-lg"
//           />

//           {/* Form Section */}
//           <div className="flex-1">
//             {!isSubmitted && !showProfile && (
//               <form>
//                 <div className="grid grid-cols-1 gap-6">
//                   <div>
//                     <label
//                       htmlFor="fullName"
//                       className="block text-md font-medium text-red-900"
//                     >
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       id="fullName"
//                       value={fullName}
//                       onChange={(e) => setFullName(e.target.value)}
//                       className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//                       placeholder="Enter full name"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="sapId"
//                       className="block text-md font-medium text-red-900"
//                     >
//                       SAP ID (Unique)
//                     </label>
//                     <input
//                       type="text"
//                       id="sapId"
//                       value={sapId}
//                       onChange={(e) => setSapId(e.target.value)}
//                       className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//                       placeholder="Enter unique SAP ID"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="designation"
//                       className="block text-md font-medium text-red-900"
//                     >
//                       Designation
//                     </label>
//                     <select
//                       id="designation"
//                       value={designation}
//                       onChange={(e) => setDesignation(e.target.value)}
//                       className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//                       required
//                     >
//                       <option value="">Select designation</option>
//                       <option value="Associate Professor">
//                         Associate Professor
//                       </option>
//                       <option value="Senior Associate Professor">
//                         Senior Associate Professor
//                       </option>
//                     </select>
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="universityEmail"
//                       className="block text-md font-medium text-red-900"
//                     >
//                       University Email
//                     </label>
//                     <input
//                       type="email"
//                       id="universityEmail"
//                       value={universityEmail}
//                       onChange={(e) => setUniversityEmail(e.target.value)}
//                       className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//                       placeholder="Enter university email"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="batches"
//                       className="block text-md font-medium text-red-900"
//                     >
//                       Batches You Teach
//                     </label>
//                     <select
//                       id="batches"
//                       value={batches}
//                       onChange={(e) => setBatches(e.target.value)}
//                       className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
//                       required
//                     >
//                       <option value="">Select batch</option>
//                       <option value="B1">B1</option>
//                       <option value="B2">B2</option>
//                       <option value="B3">B3</option>
//                       <option value="B4">B4</option>
//                       <option value="B5">B5</option>
//                     </select>
//                   </div>
//                 </div>

//                 <button
//                   onClick={handleViewProfile}
//                   className="w-full mt-8 bg-red-900 text-white p-3 rounded-md hover:bg-red-800 transition duration-300"
//                 >
//                   View Profile
//                 </button>
//               </form>
//             )}

//             {showProfile && !isSubmitted && (
//               <div className="mt-10 p-8 rounded-2xl shadow-sm max-w-2xl mx-auto">
//                 <div className="flex flex-col items-center">
//                   {/* Avatar */}
//                   <div className="w-48 h-48 mb-4 rounded-full overflow-hidden border-1 border-blue-900">
//                     <Image
//                       src="/teacherx.png"
//                       alt="User Avatar"
//                       width={300}
//                       height={300}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="text-center text-2xl font-extrabold mt-0">
//                     {fullName}
//                   </div>
//                 </div>

//                 {/* Profile Table */}
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full border border-gray-300">
//                     <tbody>
//                       <tr>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">
//                           SAP ID
//                         </td>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">
//                           {sapId}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">
//                           Designation
//                         </td>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">
//                           {designation}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">
//                           University Email
//                         </td>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">
//                           {universityEmail}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">
//                           Batches
//                         </td>
//                         <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">
//                           {batches}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex justify-center space-x-6 mt-8">
//                   <button
//                     onClick={handleEdit}
//                     className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-400"
//                   >
//                     Edit Profile
//                   </button>
//                   <button
//                     onClick={handleSubmit}
//                     className="py-2 px-4 bg-red-900 text-white rounded-md hover:bg-red-800"
//                   >
//                     Confirm & Save
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Confirmation Modal */}
//             {showConfirmation && (
//               <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                 <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
//                   <p className="text-xl text-red-700 mb-6">
//                     Are you sure you want to submit the data?
//                   </p>
//                   <div className="flex justify-center space-x-6">
//                     <button
//                       onClick={handleConfirmSubmission}
//                       className="py-2 px-4 bg-red-900 text-white rounded-md hover:bg-red-800"
//                     >
//                       Yes, Submit
//                     </button>
//                     <button
//                       onClick={handleCancelSubmission}
//                       className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-400"
//                     >
//                       No, Cancel
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FacultyProfile;



























































































"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function FacultyProfile() {
  const { data: session } = useSession();
  const [fullName, setFullName] = useState(session?.user?.name || "");
  const [sapId, setSapId] = useState("");
  const [designation, setDesignation] = useState("");
  const [universityEmail, setUniversityEmail] = useState("");
  const [batches, setBatches] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter();
  const handleConfirmSubmission = async () => {
    setShowConfirmation(false);
    setIsSubmitted(true);
    setShowProfile(false);

    const facultyData = {
      fullName,
      sapId,
      designation,
      universityEmail,
      batches,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/faculty/add", // Replace with your actual API endpoint
        facultyData
      );
      // Show a success toast notification
      toast.success("Profile saved successfully!", {
        autoClose: 5000,
      });
      // Redirect after success
      setTimeout(() => {
        // Redirect to the faculty dashboard with the sapId
        router.push(`/faculty/${sapId}/facultydashboard/viewfacultyprofile`);
      }, 3000);
    } catch (error) {
      console.error(
        "Error submitting faculty data:",
        error.response ? error.response.data : error.message
      );
      // Show an error toast notification
      toast.error("Error saving data. Please try again.", {
        autoClose: 5000,
      });
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
      <div className="max-w-5xl w-full p-8 bg-red-100 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="text-red-600">Code</span>
          <span className="text-black">Yantra</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Image Section */}
          <Image
            src="/joinus2.png"
            alt="Join Us"
            width={400}
            height={300}
            priority
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
                      htmlFor="designation"
                      className="block text-md font-medium text-red-900"
                    >
                      Designation
                    </label>
                    <select
                      id="designation"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                      required
                    >
                      <option value="">Select designation</option>
                      <option value="Associate Professor">
                        Associate Professor
                      </option>
                      <option value="Senior Associate Professor">
                        Senior Associate Professor
                      </option>
                    </select>
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
                  <div>
                    <label
                      htmlFor="batches"
                      className="block text-md font-medium text-red-900"
                    >
                      Batches You Teach
                    </label>
                    <select
                      id="batches"
                      value={batches}
                      onChange={(e) => setBatches(e.target.value)}
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
                      src="/teacherx.png"
                      alt="User Avatar"
                      width={300}
                      height={300}
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
                        <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">
                          SAP ID
                        </td>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">
                          {sapId}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">
                          Designation
                        </td>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">
                          {designation}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">
                          Email
                        </td>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">
                          {universityEmail}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">
                          Batches
                        </td>
                        <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">
                          {batches}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 flex gap-6">
                  <button
                    onClick={handleEdit}
                    className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-400"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="py-2 px-4 bg-red-900 text-white rounded-md hover:bg-red-800"
                  >
                    Confirm & Save
                  </button>
                </div>
              </div>
            )}

            {/* Confirmation Modal */}
            {showConfirmation && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
                  <p className="text-xl text-red-700 mb-6">
                    Are you sure you want to submit the data?
                  </p>
                  <div className="flex justify-center space-x-6">
                    <button
                      onClick={handleConfirmSubmission}
                      className="py-2 px-4 bg-red-900 text-white rounded-md hover:bg-red-800"
                    >
                      Yes, Submit
                    </button>
                    <button
                      onClick={handleCancelSubmission}
                      className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-400"
                    >
                      No, Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Toast Notifications Container */}
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyProfile;

