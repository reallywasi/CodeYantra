
"use client";

import React, { useState } from "react";
import { useParams } from 'next/navigation';
import { FaUser, FaIdBadge, FaAt, FaBook, FaBriefcase, FaPhoneAlt, FaPencilAlt, FaSave } from "react-icons/fa";

function EditStudentProfile() {
    const params = useParams();
    const [profile, setProfile] = useState({
        fullName: "",
        sapId: "",
        uniEmail: "",
        course: "",
        designation: "",
        phone: ""
    });

    const [isEditing, setIsEditing] = useState(false);

    // Handle form change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    // Submit the form data to the backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/api/faculty/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(profile), // Send profile data
            });

            if (res.ok) {
                alert("Profile data sent to MongoDB successfully!");
            } else {
                alert("Error sending data");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error sending data", error);
        }
    };

    return (
        <section className="bg-gray-100 min-h-screen py-12 px-4">
            <div className="container mx-auto max-w-3xl bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">{params.facultyId}</h1>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center shadow-md hover:bg-blue-600 transition duration-300"
                    >
                        <FaPencilAlt className="mr-2" />
                        {isEditing ? "View Profile" : "Edit Profile"}
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <FaUser className="text-gray-600 mr-3" />
                            <input
                                type="text"
                                name="fullName"
                                value={profile.fullName}
                                onChange={handleChange}
                                disabled={!isEditing}
                                placeholder="Full Name"
                                className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
                            />
                        </div>

                        {/* SAP ID */}
                        <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <FaIdBadge className="text-gray-600 mr-3" />
                            <input
                                type="text"
                                name="sapId"
                                value={profile.sapId}
                                onChange={handleChange}
                                disabled={!isEditing}
                                placeholder="SAP ID"
                                className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
                            />
                        </div>

                        {/* University Email */}
                        <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <FaAt className="text-gray-600 mr-3" />
                            <input
                                type="email"
                                name="uniEmail"
                                value={profile.uniEmail}
                                onChange={handleChange}
                                disabled={!isEditing}
                                placeholder="University Email"
                                className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <FaPhoneAlt className="text-gray-600 mr-3" />
                            <input
                                type="tel"
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                disabled={!isEditing}
                                placeholder="Phone Number"
                                className="w-full bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
                            />
                        </div>

                        {/* Course */}
                        <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <FaBook className="text-gray-600 mr-3" />
                            <select
                                name="course"
                                value={profile.course}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="w-full bg-transparent border-none focus:outline-none text-gray-700"
                            >
                                <option value="">Select Course</option>
                                <option value="Operating System">Operating System</option>
                                <option value="DAA">DAA</option>
                                <option value="PPL">PPL</option>
                                <option value="OOPS">OOPS</option>
                            </select>
                        </div>

                        {/* Designation */}
                        <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <FaBriefcase className="text-gray-600 mr-3" />
                            <select
                                name="designation"
                                value={profile.designation}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="w-full bg-transparent border-none focus:outline-none text-gray-700"
                            >
                                <option value="">Select Designation</option>
                                <option value="Associate Professor">Associate Professor</option>
                                <option value="Senior Associate Professor">Senior Associate Professor</option>
                                <option value="Assistant Professor">Assistant Professor</option>
                                <option value="Professor">Professor</option>
                            </select>
                        </div>
                    </div>

                    {isEditing && (
                        <div className="text-center mt-6">
                            <button
                                type="submit"
                                className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-lg flex items-center justify-center mx-auto hover:bg-red-600 transition duration-300 transform hover:scale-105"
                            >
                                <FaSave className="mr-2" />
                                Save Changes
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}

export default EditStudentProfile;
