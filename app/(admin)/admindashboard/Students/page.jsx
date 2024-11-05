"use client";
import React, { useState } from 'react';
import { FiTrash2, FiSearch } from 'react-icons/fi';

const StudentList = () => {
  const [students, setStudents] = useState([
    { fullName: 'Aarav Gupta', sapId: '2001', batch: 'Batch A', averageScore: 85, totalObservations: 5, highestScore: 90 },
    { fullName: 'Saanvi Desai', sapId: '2002', batch: 'Batch A', averageScore: 78, totalObservations: 6, highestScore: 88 },
    { fullName: 'Reyansh Verma', sapId: '2003', batch: 'Batch B', averageScore: 92, totalObservations: 4, highestScore: 95 },
    { fullName: 'Ananya Sharma', sapId: '2004', batch: 'Batch B', averageScore: 81, totalObservations: 5, highestScore: 89 },
    { fullName: 'Vihaan Rao', sapId: '2005', batch: 'Batch C', averageScore: 75, totalObservations: 8, highestScore: 80 },
    { fullName: 'Diya Patel', sapId: '2006', batch: 'Batch C', averageScore: 88, totalObservations: 3, highestScore: 92 },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [studentStats, setStudentStats] = useState(null);
  const studentsPerPage = 5;

  // Filter students based on the search term
  const filteredStudents = students.filter((student) =>
    student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.sapId.includes(searchTerm) ||
    student.batch.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination controls
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  // Handle student deletion
  const confirmDeleteStudent = (student) => {
    setStudentToDelete(student);
    setShowDeleteModal(true);
  };

  const deleteStudent = () => {
    setStudents(students.filter((student) => student.sapId !== studentToDelete.sapId));
    setShowDeleteModal(false);
    setStudentToDelete(null);
  };

  // Show stats for a student
  const viewStats = (student) => {
    setStudentStats(student);
    setShowStatsModal(true);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Batch Overview</h2>
      {/* Batch Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from(new Set(students.map(student => student.batch))).map((batch) => (
          <div key={batch} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col justify-between">
            <h3 className="text-lg font-semibold text-red-800">{batch}</h3>
            <p className="text-gray-500">Number of Students: {students.filter(s => s.batch === batch).length}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-700">Student List</h2>
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

      {/* Student Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th><input type="checkbox" className="checkbox" /></th>
              <th>Avatar</th>
              <th>Full Name</th>
              <th>SAP ID</th>
              <th>Batch</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student) => (
              <tr key={student.sapId} className="hover:bg-gray-50 border-b">
                <td><input type="checkbox" className="checkbox" /></td>
                <td>
                  <img
                    src={`https://i.pravatar.cc/150?u=${student.sapId}`}
                    alt={student.fullName}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td>{student.fullName}</td>
                <td>{student.sapId}</td>
                <td>{student.batch}</td>
                <td>
                  <button onClick={() => viewStats(student)} className="btn btn-ghost btn-xs text-blue-900 hover:text-blue-700 mr-2">
                    View Stats
                  </button>
                  <button onClick={() => confirmDeleteStudent(student)} className="btn btn-ghost btn-xs text-red-500 hover:text-red-700">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100 border-t">
              <th></th>
              <th>Avatar</th>
              <th>Full Name</th>
              <th>SAP ID</th>
              <th>Batch</th>
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
            <h3 className="text-lg font-semibold mb-4">Are you sure you want to delete this student?</h3>
            <p className="mb-4">This action cannot be undone.</p>
            <button onClick={deleteStudent} className="btn btn-error mr-2">Yes, Delete</button>
            <button onClick={() => setShowDeleteModal(false)} className="btn btn-ghost">Cancel</button>
          </div>
        </div>
      )}

      {/* View Stats Modal */}
      {showStatsModal && studentStats && (
        <div className="fixed inset-0 bg-red-100 bg-opacity-80 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-1/2">
            <h3 className="text-xl font-semibold mb-4">{studentStats.fullName}'s Stats</h3>
            <img
              src={`https://i.pravatar.cc/150?u=${studentStats.sapId}`}
              alt={studentStats.fullName}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="mb-2">Average Score: <span className="font-bold">{studentStats.averageScore}</span></p>
            <p className="mb-2">Total Observations: <span className="font-bold">{studentStats.totalObservations}</span></p>
            <p className="mb-4">Highest Score: <span className="font-bold">{studentStats.highestScore}</span></p>
            <button onClick={() => setShowStatsModal(false)} className="btn btn-ghost">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentList;
