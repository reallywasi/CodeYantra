"use client"
import React, { useState } from 'react';
import { FiTrash2, FiSearch } from 'react-icons/fi';

const FacultyList = () => {
  const [faculties, setFaculties] = useState([
    { fullName: 'Dr. Aditi Sharma', sapId: '1001', designation: 'Professor', universityEmail: 'aditi.sharma@university.edu', batches: 'Batch A, Batch B' },
    { fullName: 'Dr. Rohan Verma', sapId: '1002', designation: 'Associate Professor', universityEmail: 'rohan.verma@university.edu', batches: 'Batch C' },
    { fullName: 'Dr. Meera Khanna', sapId: '1003', designation: 'Assistant Professor', universityEmail: 'meera.khanna@university.edu', batches: 'Batch D, Batch E' },
    { fullName: 'Dr. Vikram Singh', sapId: '1004', designation: 'Lecturer', universityEmail: 'vikram.singh@university.edu', batches: 'Batch F' },
    { fullName: 'Dr. Pooja Patel', sapId: '1005', designation: 'Senior Lecturer', universityEmail: 'pooja.patel@university.edu', batches: 'Batch G, Batch H' },
    { fullName: 'Dr. Anil Kumar', sapId: '1006', designation: 'Professor', universityEmail: 'anil.kumar@university.edu', batches: 'Batch I' },
    { fullName: 'Dr. Sunita Rao', sapId: '1007', designation: 'Assistant Professor', universityEmail: 'sunita.rao@university.edu', batches: 'Batch J' },
    { fullName: 'Dr. Ramesh Gupta', sapId: '1008', designation: 'Lecturer', universityEmail: 'ramesh.gupta@university.edu', batches: 'Batch K, Batch L' },
    { fullName: 'Dr. Priya Nair', sapId: '1009', designation: 'Senior Lecturer', universityEmail: 'priya.nair@university.edu', batches: 'Batch M' },
    { fullName: 'Dr. Rahul Menon', sapId: '1010', designation: 'Professor', universityEmail: 'rahul.menon@university.edu', batches: 'Batch N' },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [facultyToDelete, setFacultyToDelete] = useState(null);
  const facultiesPerPage = 8;

  // Function to filter faculties based on search term
  const filteredFaculties = faculties.filter((faculty) =>
    faculty.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.sapId.includes(searchTerm) ||
    faculty.batches.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination controls
  const indexOfLastFaculty = currentPage * facultiesPerPage;
  const indexOfFirstFaculty = indexOfLastFaculty - facultiesPerPage;
  const currentFaculties = filteredFaculties.slice(indexOfFirstFaculty, indexOfLastFaculty);
  const totalPages = Math.ceil(filteredFaculties.length / facultiesPerPage);

  // Function to handle faculty deletion
  const confirmDeleteFaculty = (faculty) => {
    setFacultyToDelete(faculty);
    setShowDeleteModal(true);
  };

  const deleteFaculty = () => {
    setFaculties(faculties.filter((faculty) => faculty.sapId !== facultyToDelete.sapId));
    setShowDeleteModal(false);
    setFacultyToDelete(null);
  };

  return (
    <div className="p-6 space-y-6">

<h2 className="text-2xl font-semibold text-gray-700">Most Active Faculties</h2>
      
      {/* Most Active Faculties Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculties.slice(0, 3).map((faculty) => (
          <div key={faculty.sapId} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col justify-between">
            <h3 className="text-lg font-semibold text-red-700">{faculty.fullName}</h3>
            <p className="text-gray-500">SAP ID: {faculty.sapId}</p>
            <p className="text-gray-500">Designation: {faculty.designation}</p>
            <p className="text-gray-500">Email: {faculty.universityEmail}</p>
            <p className="text-gray-500">Batches: {faculty.batches}</p>
            <button onClick={() => confirmDeleteFaculty(faculty)} className="mt-4 flex items-center text-red-600 hover:text-red-800 transition-colors duration-300">
              <FiTrash2 className="mr-2" /> Delete Faculty
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-semibold text-gray-700">Faculty List</h2>

      {/* Search Bar */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search by Name, SAP ID, or Batch"
          className="input input-bordered w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FiSearch className="ml-3 text-gray-500" />
      </div>

      {/* Faculty Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th><input type="checkbox" className="checkbox" /></th>
              <th>Full Name</th>
              <th>SAP ID</th>
              <th>Designation</th>
              <th>University Email</th>
              <th>Batches</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentFaculties.map((faculty) => (
              <tr key={faculty.sapId} className="hover:bg-gray-50 border-b">
                <td><input type="checkbox" className="checkbox" /></td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src="https://img.icons8.com/ios-filled/50/000000/user.png" alt="Default Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{faculty.fullName}</div>
                    </div>
                  </div>
                </td>
                <td>{faculty.sapId}</td>
                <td>{faculty.designation}</td>
                <td>{faculty.universityEmail}</td>
                <td>{faculty.batches}</td>
                <td>
                  <button onClick={() => confirmDeleteFaculty(faculty)} className="btn btn-ghost btn-xs text-red-500 hover:text-red-700">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100 border-t">
              <th></th>
              <th>Full Name</th>
              <th>SAP ID</th>
              <th>Designation</th>
              <th>University Email</th>
              <th>Batches</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="btn btn-outline btn-sm"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="btn btn-outline btn-sm"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold mb-4">Are you sure you want to delete this faculty?</h3>
            <p className="mb-4">This action cannot be undone.</p>
            <button onClick={deleteFaculty} className="btn btn-error mr-2">Yes, Delete</button>
            <button onClick={() => setShowDeleteModal(false)} className="btn btn-ghost">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyList;
