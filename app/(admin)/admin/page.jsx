"use client"









import React, { useState } from "react";
import Chart from "chart.js/auto"; // Make sure to import your chart library
import { Bar } from "react-chartjs-2"; // Example for Bar chart

const AdminPanel = () => {
  const [showAddFaculty, setShowAddFaculty] = useState(false);
  const [showEditFaculty, setShowEditFaculty] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [newFaculty, setNewFaculty] = useState({
    fullName: "",
    email: "",
    universityEmail: "",
    sapId: "",
    batches: "",
    course: "",
  });

  const [facultyList, setFacultyList] = useState([
    {
      id: 1,
      fullName: "Amit Sharma",
      email: "amit.sharma@example.com",
      universityEmail: "amit.sharma@university.com",
      sapId: "987654",
      batches: "Batch A",
      course: "CS101",
      observationsConducted: 5,
    },
    {
      id: 2,
      fullName: "Sneha Patel",
      email: "sneha.patel@example.com",
      universityEmail: "sneha.patel@university.com",
      sapId: "234567",
      batches: "Batch B",
      course: "CS102",
      observationsConducted: 3,
    },
    {
      id: 3,
      fullName: "Rajesh Kumar",
      email: "rajesh.kumar@example.com",
      universityEmail: "rajesh.kumar@university.com",
      sapId: "345678",
      batches: "Batch C",
      course: "CS103",
      observationsConducted: 7,
    },
    {
      id: 4,
      fullName: "Priya Singh",
      email: "priya.singh@example.com",
      universityEmail: "priya.singh@university.com",
      sapId: "456789",
      batches: "Batch A",
      course: "CS104",
      observationsConducted: 2,
    },
    {
      id: 5,
      fullName: "Vikram Reddy",
      email: "vikram.reddy@example.com",
      universityEmail: "vikram.reddy@university.com",
      sapId: "567890",
      batches: "Batch B",
      course: "CS105",
      observationsConducted: 4,
    }
    // More faculty objects...
  ]);

  const handleAddFaculty = () => {
    if (showAddFaculty) {
      const newFacultyData = {
        ...newFaculty,
        id: facultyList.length + 1, // Generate a new ID
        observationsConducted: 0, // Initialize with 0 observations
      };
      setFacultyList([...facultyList, newFacultyData]);
      setShowAddFaculty(false);
    } else if (showEditFaculty) {
      const updatedFacultyList = facultyList.map(faculty =>
        faculty.id === selectedFaculty.id ? newFaculty : faculty
      );
      setFacultyList(updatedFacultyList);
      setShowEditFaculty(false);
    }
    setNewFaculty({
      fullName: "",
      email: "",
      universityEmail: "",
      sapId: "",
      batches: "",
      course: "",
    });
  };

  const handleEditFaculty = (faculty) => {
    setSelectedFaculty(faculty);
    setNewFaculty(faculty);
    setShowEditFaculty(true);
  };

  const handleDeleteFaculty = (facultyId) => {
    setFacultyList(facultyList.filter(faculty => faculty.id !== facultyId));
  };

  const data = {
    labels: ["Batch A", "Batch B", "Batch C"],
    datasets: [
      {
        label: "Observations Conducted",
        data: [5, 10, 3],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const data2 = {
    labels: ["Course X", "Course Y", "Course Z"],
    datasets: [
      {
        label: "Faculty per Course",
        data: [7, 8, 4],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
 

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold">Total Faculties</h3>
            <p className="text-2xl font-bold">32</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold">Total Students</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold">Total Tests Conducted</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-4 items-center">
  <button
    className="bg-blue-500 text-white px-10 py-4 rounded-lg text-lg"
    onClick={() => setShowAddFaculty(true)}
  >
    Add Faculty
  </button>
</div>
  

      <h2 className="text-xl font-semibold mt-6 mb-2 text-center">Faculty List</h2>
      <ul className="bg-white rounded-lg shadow-lg p-4">
        {facultyList.map((faculty) => (
          <li
            key={faculty.id}
            className="mb-4 p-4 border-b border-gray-200 flex justify-between items-center"
          >
            <div
              onClick={() => setSelectedFaculty(faculty)}
              className="cursor-pointer"
            >
              {faculty.fullName}
            </div>
            <div className="flex">
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2"
                onClick={() => handleEditFaculty(faculty)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => handleDeleteFaculty(faculty.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Add/Edit Faculty Modal */}
      {(showAddFaculty || showEditFaculty) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">
              {showAddFaculty ? "Add Faculty" : "Edit Faculty"}
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={newFaculty.fullName}
                onChange={(e) =>
                  setNewFaculty({ ...newFaculty, fullName: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                value={newFaculty.email}
                onChange={(e) =>
                  setNewFaculty({ ...newFaculty, email: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="email"
                placeholder="University Email"
                value={newFaculty.universityEmail}
                onChange={(e) =>
                  setNewFaculty({
                    ...newFaculty,
                    universityEmail: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="SAP ID"
                value={newFaculty.sapId}
                onChange={(e) =>
                  setNewFaculty({ ...newFaculty, sapId: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Batches"
                value={newFaculty.batches}
                onChange={(e) =>
                  setNewFaculty({ ...newFaculty, batches: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Course"
                value={newFaculty.course}
                onChange={(e) =>
                  setNewFaculty({ ...newFaculty, course: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
                onClick={handleAddFaculty}
              >
                {showAddFaculty ? "Add" : "Save"}
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                onClick={() => {
                  setShowAddFaculty(false);
                  setShowEditFaculty(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Delete Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4 text-center">Confirm Delete</h2>
            <p className="mb-4 text-center">Are you sure you want to delete this faculty member?</p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
                onClick={() => handleDeleteFaculty(selectedFaculty.id)}
              >
                Delete
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-center">Faculty Observations</h2>
          <Bar data={data} />
          <p className="mt-2 text-gray-600 text-center">Details of observations conducted by faculty across batches.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-center">Faculty per Course</h2>
          <Bar data={data2} />
          <p className="mt-2 text-gray-600 text-center">Details of the number of faculty per course.</p>
        </div>
      </div>







      
    </div>
  );
};

export default AdminPanel;

















