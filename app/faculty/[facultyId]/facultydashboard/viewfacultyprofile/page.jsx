"use client";

import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { FaUser, FaIdBadge, FaAt, FaBriefcase, FaBook, FaPencilAlt, FaSave } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FacultyProfilePage() {
    const { facultyId } = useParams();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editProfile, setEditProfile] = useState({
        fullName: "",
        sapId: "",
        universityEmail: "",
        batches: "",
        designation: ""
    });
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    // Fetch faculty profile data
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/faculty/${facultyId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch profile data');
                }
                const data = await response.json();
                setProfile(data);
                setEditProfile(data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [facultyId]);

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setShowConfirmModal(true);
    };

    const confirmSaveChanges = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/faculty/update/${facultyId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editProfile),
            });

            if (response.ok) {
                const updatedProfile = await response.json();
                setProfile(updatedProfile);
                toast.success("Profile updated successfully!");
                setIsEditing(false);
            } else {
                toast.error("Error updating profile");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("Error updating profile");
        } finally {
            setShowConfirmModal(false);
        }
    };

    if (loading) {
        return <p className="text-center text-lg font-semibold">Loading...</p>;
    }

    if (!profile) {
        return <p className="text-center text-lg font-semibold">No profile found.</p>;
    }

    return (
        <section className="bg-gray-50 min-h-screen py-12 px-4">
            <ToastContainer />
            <div className="container mx-auto max-w-4xl bg-white p-10 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                    <div 
                        className="w-32 h-32 rounded-full border-4 border-red-800 flex justify-center items-center text-white text-4xl font-bold"
                        style={{ backgroundColor: '#D3D3D3' }} // Gray background for avatar
                    >
                        {profile.fullName.split(' ')[0][0]}{profile.fullName.split(' ').pop()[0]}
                    </div>
                    <h1 className="text-5xl font-bold text-black ml-6">{profile.fullName}</h1>
                </div>

                {isEditing ? (
                    <form onSubmit={handleEditSubmit} className="space-y-6 mt-6">
                        <div className="flex items-center border-b border-gray-300 pb-2 mb-4">
                            <FaUser className="text-red-800 mr-3 text-2xl" />
                            <input
                                type="text"
                                name="fullName"
                                value={editProfile.fullName}
                                onChange={handleEditChange}
                                placeholder="Full Name"
                                className="w-full border-none focus:ring-0 focus:outline-none text-lg py-3"
                                required
                            />
                        </div>
                        <div className="flex items-center border-b border-gray-300 pb-2 mb-4">
                            <FaIdBadge className="text-red-800 mr-3 text-2xl" />
                            <input
                                type="text"
                                name="sapId"
                                value={editProfile.sapId}
                                onChange={handleEditChange}
                                placeholder="SAP ID"
                                className="w-full border-none focus:ring-0 focus:outline-none text-lg py-3"
                                required
                                disabled
                            />
                        </div>
                        <div className="flex items-center border-b border-gray-300 pb-2 mb-4">
                            <FaAt className="text-red-800 mr-3 text-2xl" />
                            <input
                                type="email"
                                name="universityEmail"
                                value={editProfile.universityEmail}
                                onChange={handleEditChange}
                                placeholder="University Email"
                                className="w-full border-none focus:ring-0 focus:outline-none text-lg py-3"
                                required
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <FaBriefcase className="text-red-800 mr-3 text-2xl" />
                            <select
                                name="designation"
                                value={editProfile.designation}
                                onChange={handleEditChange}
                                className="w-full border border-gray-300 rounded-md py-3 text-lg focus:outline-none focus:ring focus:ring-red-500"
                                required
                            >
                                <option value="">Select Designation</option>
                                <option value="Associate Professor">Associate Professor</option>
                                <option value="Senior Associate Professor">Senior Associate Professor</option>
                                <option value="Assistant Professor">Assistant Professor</option>
                                <option value="Professor">Professor</option>
                            </select>
                        </div>
                        <div className="flex items-center border-b border-gray-300 pb-2 mb-4">
                            <FaBook className="text-red-800 mr-3 text-2xl" />
                            <input
                                type="text"
                                name="batches"
                                value={editProfile.batches}
                                onChange={handleEditChange}
                                placeholder="Batches"
                                className="w-full border-none focus:ring-0 focus:outline-none text-lg py-3"
                                required
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <button
                                type="submit"
                                className="bg-red-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-300 flex items-center text-lg"
                            >
                                <FaSave className="mr-2" />
                                Save Changes
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="mt-6 space-y-4">
                        <div className="flex items-center">
                            <FaUser className="text-red-800 mr-3 text-2xl" />
                            <span className="text-xl">{profile.fullName}</span>
                        </div>
                        <div className="flex items-center">
                            <FaIdBadge className="text-red-800 mr-3 text-2xl" />
                            <span className="text-xl">SAP ID: {profile.sapId}</span>
                        </div>
                        <div className="flex items-center">
                            <FaAt className="text-red-800 mr-3 text-2xl" />
                            <span className="text-xl">Email: {profile.universityEmail}</span>
                        </div>
                        <div className="flex items-center">
                            <FaBriefcase className="text-red-800 mr-3 text-2xl" />
                            <span className="text-xl">Designation: {profile.designation}</span>
                        </div>
                        <div className="flex items-center">
                            <FaBook className="text-red-800 mr-3 text-2xl" />
                            <span className="text-xl">Batches: {profile.batches}</span>
                        </div>
                    </div>
                )}

                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="mt-8 bg-blue-900 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 flex items-center text-lg"
                >
                    <FaPencilAlt className="mr-2" />
                    {isEditing ? "Cancel" : "Edit Profile"}
                </button>
            </div>

            {/* Confirmation Modal */}
            {showConfirmModal && (
                <div className="fixed inset-0 bg-red-100 bg-opacity-80 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-lg font-semibold mb-4">Are you sure you want to save changes?</h3>
                        <p className="mb-4">Please confirm your changes before proceeding.</p>
                        <button onClick={confirmSaveChanges} className="bg-blue-900 text-white py-2 px-4 rounded-lg mr-2 mx-6  hover:bg-blue-800">Yes, Save</button>
                        <button onClick={() => setShowConfirmModal(false)} className="bg-red-900 text-white py-2 px-4 mx-6 rounded-lg hover:bg-red-800">Cancel</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default FacultyProfilePage;
