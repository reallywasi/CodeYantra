// "use client";
// import { useSession } from "next-auth/react";
// import { useState } from "react";

// function completeStudentProfile() {
//   const { data: session } = useSession();
//   const [fullName, setFullName] = useState(session?.user?.name || "");
//   const [batch, setBatch] = useState("");
//   const [sapId, setSapId] = useState("");
//   const [rollNo, setRollNo] = useState("");
//   const [uniemail, setUnimail] = useState(session?.user?.email || "");
//   const [phone, setPhone] = useState("");
//   const [specialization, setSpecialization] = useState("");
//   const [passingOutYear, setPassingOutYear] = useState("");
//   const [showProfile, setShowProfile] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const handleViewProfile = (e) => {
//     e.preventDefault();
//     setShowProfile(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowConfirmation(true);
//   };

//   const handleConfirmSubmission = () => {
//     setShowConfirmation(false);
//     setIsSubmitted(true);
//     setShowProfile(false);
//     console.log({
//       fullName,
//       batch,
//       sapId,
//       rollNo,
//       uniemail,
//       phone,
//       specialization,
//       passingOutYear,
//     });
//   };

//   const handleCancelSubmission = () => {
//     setShowConfirmation(false);
//   };

//   const handleEdit = () => {
//     setShowProfile(false);
//     setIsSubmitted(false);
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
//       {!isSubmitted && !showProfile && (
//         <form>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div className="mb-4">
//               <label
//                 htmlFor="fullName"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your full name"
//                 required
//               />
//             </div>
//             {/* Other form fields */}


//             <div className="mb-4">
//               <label
//                 htmlFor="batch"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Batch
//               </label>
//               <input
//                 type="text"
//                 id="batch"
//                 value={batch}
//                 onChange={(e) => setBatch(e.target.value)}
//                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your batch"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="sapId"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 SAP ID
//               </label>
//               <input
//                 type="text"
//                 id="sapId"
//                 value={sapId}
//                 onChange={(e) => setSapId(e.target.value)}
//                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your SAP ID"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="rollNo"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Roll No
//               </label>
//               <input
//                 type="text"
//                 id="rollNo"
//                 value={rollNo}
//                 onChange={(e) => setRollNo(e.target.value)}
//                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your Roll No"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                University Email
//               </label>
//               <input
//                 type="uniemail"
//                 id="uniemail"
//                 value={uniemail}
//                 onChange={(e) => setUniemail(e.target.value)}
//                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your phone number"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="specialization"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Specialization
//               </label>
//               <select
//                 id="specialization"
//                 value={specialization}
//                 onChange={(e) => setSpecialization(e.target.value)}
//                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               >
//                 <option value="">Select your specialization</option>
//                 <option value="AIML">AIML</option>
//                 <option value="DevOps">DevOps</option>
//                 <option value="CCVT">CCVT</option>
//                 <option value="Full Stack AI">Full Stack AI</option>
//                 <option value="Big Data">Big Data</option>
//                 <option value="Data Science">Data Science</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="passingOutYear"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Passing Out Year
//               </label>
//               <select
//                 id="passingOutYear"
//                 value={passingOutYear}
//                 onChange={(e) => setPassingOutYear(e.target.value)}
//                 className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               >
//                 <option value="">Select your passing out year</option>
//                 {Array.from({ length: 7 }, (_, i) => 2024 + i).map((year) => (
//                   <option key={year} value={year}>
//                     {year}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <button
//             onClick={handleViewProfile}
//             className="w-full mt-6 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
//           >
//             View Profile
//           </button>
//         </form>
//       )}

//       {showProfile && !isSubmitted && (
//         <div>
//           <h3 className="text-xl font-semibold text-center mb-6 text-gray-700">
//             Profile Preview
//           </h3>
//           <div className="p-6 bg-gray-100 rounded-md shadow-md">
//             <p className="text-lg">
//               <strong></strong>
//             </p>
//                        <p className="text-lg">
//                <strong>Full Name:</strong> {fullName}
//              </p>
//              <p className="text-lg">
//                <strong>Batch:</strong> {batch}
//              </p>
//              <p className="text-lg">
//                <strong>SAP ID:</strong> {sapId}
//              </p>
//              <p className="text-lg">
//                <strong>Roll No:</strong> {rollNo}
//              </p>
//              <p className="text-lg">
//                <strong>Email:</strong> {uniemail}
//              </p>
//              <p className="text-lg">
//                <strong>Phone Number:</strong> {phone}
//              </p>
//              <p className="text-lg">
//                <strong>Specialization:</strong> {specialization}
//              </p>
//              <p className="text-lg">
//                <strong>Passing Out Year:</strong> {passingOutYear}
//             </p>          </div>
//           <div className="flex justify-between mt-6">
//             <button
//               onClick={handleEdit}
//               className="bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600 transition duration-300"
//             >
//               Edit
//             </button>
//             <button
//               onClick={handleSubmit}
//               className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-300"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       )}

//       {showConfirmation && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Confirm Submission</h3>
//             <p className="text-gray-700">
//               Are you sure you want to submit these details? You won't be able to edit them afterward.
//             </p>
//             <div className="flex justify-end mt-6">
//               <button
//                 onClick={handleCancelSubmission}
//                 className="bg-red-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-red-600 transition duration-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirmSubmission}
//                 className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {isSubmitted && (
//         <div className="text-center mt-6">
//           <h3 className="text-xl font-semibold text-green-600">
//             Your profile has been successfully submitted!
//           </h3>

//           <div> 
//           Go to Dashboard 
//           </div>

//         </div>
//       )}
//     </div>
//   );
// }
// export default completeStudentProfile;


import { useSession } from "next-auth/react";
import { useState } from "react";

function CompleteStudentProfile() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    fullName: session?.user?.name || "",
    batch: "",
    sapId: "",
    rollNo: "",
    uniemail: session?.user?.email || "",
    phone: "",
    specialization: "",
    passingOutYear: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Profile submitted successfully');
        setFormData({
          fullName: session?.user?.name || "",
          batch: "",
          sapId: "",
          rollNo: "",
          uniemail: session?.user?.email || "",
          phone: "",
          specialization: "",
          passingOutYear: ""
        });
      } else {
        console.error('Failed to submit profile');
      }
    } catch (error) {
      console.error('Error submitting profile:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-2xl rounded-lg">
      {session?.user?.image && (
        <div className="flex justify-center mb-8">
          <img
            src={session.user.image}
            alt={session.user.name}
            className="rounded-full w-32 h-32"
          />
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="batch" className="block text-sm font-medium text-gray-600">
              Batch
            </label>
            <input
              type="text"
              id="batch"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sapId" className="block text-sm font-medium text-gray-600">
              SAP ID
            </label>
            <input
              type="text"
              id="sapId"
              name="sapId"
              value={formData.sapId}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rollNo" className="block text-sm font-medium text-gray-600">
              Roll No
            </label>
            <input
              type="text"
              id="rollNo"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="uniemail" className="block text-sm font-medium text-gray-600">
              University Email
            </label>
            <input
              type="email"
              id="uniemail"
              name="uniemail"
              value={formData.uniemail}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="specialization" className="block text-sm font-medium text-gray-600">
              Specialization
            </label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="passingOutYear" className="block text-sm font-medium text-gray-600">
              Passing Out Year
            </label>
            <input
              type="text"
              id="passingOutYear"
              name="passingOutYear"
              value={formData.passingOutYear}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default CompleteStudentProfile;
