

import React from 'react';
import { FaRobot, FaUsers, FaClock, FaBrain, FaCode } from 'react-icons/fa';
import Link from 'next/link';

const features = [
  {
    icon: <FaCode size={48} />,
    title: "AI-Enabled Assessments",
    description: "Leverage advanced AI algorithms to assess coding skills with precision, providing personalized feedback and improvement suggestions.",
    bgColor: "bg-red-500",
  },
  {
    icon: <FaUsers size={48} />,
    title: "Real-Time Feedback",
    description: "Receive instant feedback on coding exercises, enabling students to correct mistakes and learn more effectively.",
    bgColor: "bg-red-500",
  },
  {
    icon: <FaClock size={48} />,
    title: "Adaptive Learning",
    description: "Our platform adapts to the student's learning pace, ensuring that they get the most relevant challenges based on their progress.",
    bgColor: "bg-red-500",
  },
  {
    icon: <FaBrain size={48} />,
    title: "Comprehensive Analytics",
    description: "Access detailed analytics to track progress, identify strengths and weaknesses, and make data-driven decisions to enhance learning.",
    bgColor: "bg-red-500",
  },
];

const CodeYantraFeatures = () => {
  return (
    <section className="relative overflow-hidden bg-white text-gray-900 py-16 md:py-24">
      {/* Slanting Background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path
            d="M0,300 L1200,100 L1200,300 Z"
            className="text-gray-200"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-800">
          Discover the Core Features of CodeYantra
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-600">
          CodeYantra is designed to provide an unparalleled coding education experience. Explore the key features that make our platform stand out and empower both students and educators.
        </p>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className={`bg-${feature.bgColor} text-white rounded-full p-6 mb-6 shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 text-gray-800">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-600">
            Join our platform today and take your coding skills to the next level. Whether you’re looking to start coding or want to join our community, we’ve got you covered.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/start-coding" className="inline-block bg-red-600 text-white font-semibold py-4 px-12 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 text-lg text-center transform hover:scale-105">
              Start Coding
            </Link>
            <Link href="/signup" className="inline-block bg-red-600 text-white font-semibold py-4 px-12 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 text-lg text-center transform hover:scale-105">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodeYantraFeatures;


