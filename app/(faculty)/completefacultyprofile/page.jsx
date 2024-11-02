

"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";

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

  const handleViewProfile = (e) => {
    e.preventDefault();
    setShowProfile(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmSubmission = () => {
    setShowConfirmation(false);
    setIsSubmitted(true);
    setShowProfile(false);
    console.log({
      fullName,
      sapId,
      designation,
      universityEmail,
      batches,
    });
    // API call to submit the data to your backend
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
                      className="block  text-md font-medium text-red-900"
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
                      <option value="Associate Professor">Associate Professor</option>
                      <option value="Senior Associate Professor">Senior Associate Professor</option>
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
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
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
    <h3 className="text-3xl font-bold text-center text-black-700 mb-8 tracking-wide">
      Profile Preview
    </h3>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
      <tbody>
  <tr>
    <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">Full Name</td>
    <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{fullName}</td>
  </tr>
  <tr>
    <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">SAP ID</td>
    <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{sapId}</td>
  </tr>
  <tr>
    <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">Designation</td>
    <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{designation}</td>
  </tr>
  <tr>
    <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">University Email</td>
    <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{universityEmail}</td>
  </tr>
  <tr>
    <td className="py-4 px-6 border border-gray-300 text-lg text-white bg-red-900">Batches</td>
    <td className="py-4 px-6 border border-gray-300 text-lg text-red-700 bg-blue-100">{batches}</td>
  </tr>
</tbody>



      </table>
    </div>
    <div className="flex justify-center space-x-6 mt-8">
      <button
        onClick={handleEdit}
        className="py-2 px-12 text-lg font-semibold text-white bg-blue-900 rounded-md shadow-md hover:bg-blue-800 transition duration-300 ease-in-out"
      >
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

            {isSubmitted && (
              <div className="text-center mt-8">
                <h3 className="text-xl font-semibold text-green-600">
                  Your profile has been successfully submitted!
                </h3>
                <a
                  href="/dashboard"
                  className="text-blue-800 hover:underline mt-4 inline-block"
                >
                  Go to Dashboard
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyProfile;
