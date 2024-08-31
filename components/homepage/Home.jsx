
import React from 'react';
import { FaCode, FaChalkboardTeacher, FaUserFriends, FaAward, FaRobot } from 'react-icons/fa';

function Home() {
  return (
    <section className="relative overflow-hidden bg-white text-gray-900 py-16">
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
            d="M0,0 L1200,0 L1200,300 L0,300 Z"
            className="text-gray-200"
            transform="translate(0, 20) skewY(-6)"
          />
        </svg>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-red-500 mb-8">
          Welcome to CodeYantra
        </h1>
        <p className="text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto">
          Experience the ultimate coding platform designed to enhance classroom activities, provide real-time feedback, and foster a competitive environment for both students and faculty.
        </p>
        
        {/* Features Section */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Feature Card */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-1/2 md:w-1/4 text-center flex flex-col items-center"
            >
              <div className="bg-red-500 text-white rounded-full p-4 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Feature Data
const features = [
  {
    icon: <FaCode size={40} />,
    title: "Coding Tests",
    description: "Conduct personalized coding tests and track student performance in real-time.",
  },
  {
    icon: <FaChalkboardTeacher size={40} />,
    title: "Classroom Observation",
    description: "Observe student coding activities and provide feedback instantly.",
  },
  {
    icon: <FaUserFriends size={40} />,
    title: "Peer Comparison",
    description: "Allow students to compare their code with peers and improve their skills.",
  },
  {
    icon: <FaAward size={40} />,
    title: "Competitive Environment",
    description: "Display ranks and create a competitive coding environment.",
  },
  {
    icon: <FaRobot size={40} />,
    title: "CodeYantra AI",
    description: "Leverage AI for advanced assessments and personalized feedback.",
  },
];

export default Home;
