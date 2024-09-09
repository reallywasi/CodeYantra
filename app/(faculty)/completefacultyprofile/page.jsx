"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";

function FacultyProfile() {
  const { data: session } = useSession();
  const [fullName, setFullName] = useState(session?.user?.name || "");
  const [email, setEmail] = useState(session?.user?.email || "");
  const [universityEmail, setUniversityEmail] = useState("");
  const [sapId, setSapId] = useState("");
  const [batches, setBatches] = useState([]);
  const [course, setCourse] = useState("");
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
      email,
      universityEmail,
      sapId,
      batches,
      course,
    });
    // You can add your API call here to submit the data to your backend
  };

  const handleCancelSubmission = () => {
    setShowConfirmation(false);
  };

  const handleEdit = () => {
    setShowProfile(false);
    setIsSubmitted(false);
  };

  const handleBatchChange = (e) => {
    const value = e.target.value;
    setBatches(value.split(",").map((batch) => batch.trim()));
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
      {!isSubmitted && !showProfile && (
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Personal Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter personal email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="universityEmail"
                className="block text-sm font-medium text-gray-600"
              >
                University Email
              </label>
              <input
                type="email"
                id="universityEmail"
                value={universityEmail}
                onChange={(e) => setUniversityEmail(e.target.value)}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter university email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="sapId"
                className="block text-sm font-medium text-gray-600"
              >
                SAP ID
              </label>
              <input
                type="text"
                id="sapId"
                value={sapId}
                onChange={(e) => setSapId(e.target.value)}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter SAP ID"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="batches"
                className="block text-sm font-medium text-gray-600"
              >
                Batches
              </label>
              <input
                type="text"
                id="batches"
                value={batches.join(", ")}
                onChange={handleBatchChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter batches (comma-separated)"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="course"
                className="block text-sm font-medium text-gray-600"
              >
                Course
              </label>
              <select
                id="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select course</option>
                <option value="AIML">AIML</option>
                <option value="DevOps">DevOps</option>
                <option value="CCVT">CCVT</option>
                <option value="Full Stack AI">Full Stack AI</option>
                <option value="Big Data">Big Data</option>
                <option value="Data Science">Data Science</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleViewProfile}
            className="w-full mt-6 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            View Profile
          </button>
        </form>
      )}

      {showProfile && !isSubmitted && (
        <div>
          <h3 className="text-xl font-semibold text-center mb-6 text-gray-700">
            Profile Preview
          </h3>
          <div className="p-6 bg-gray-100 rounded-md shadow-md">
            <p className="text-lg">
              <strong>Full Name:</strong> {fullName}
            </p>
            <p className="text-lg">
              <strong>Personal Email:</strong> {email}
            </p>
            <p className="text-lg">
              <strong>University Email:</strong> {universityEmail}
            </p>
            <p className="text-lg">
              <strong>SAP ID:</strong> {sapId}
            </p>
            <p className="text-lg">
              <strong>Batches:</strong> {batches.join(", ")}
            </p>
            <p className="text-lg">
              <strong>Course:</strong> {course}
            </p>
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={handleEdit}
              className="bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Edit
            </button>
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Confirm Submission
            </h3>
            <p className="text-gray-700">
              Are you sure you want to submit these details? You won't be able
              to edit them afterward.
            </p>
            <div className="flex justify-end mt-6">
              <button
                onClick={handleCancelSubmission}
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-red-600 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmSubmission}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {isSubmitted && (
        <div className="text-center mt-6">
          <h3 className="text-xl font-semibold text-green-600">
            Your profile has been successfully submitted!
          </h3>
          <div>
            <a
              href="/dashboard"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Go to Dashboard
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default FacultyProfile;
