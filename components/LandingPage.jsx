// components/LandingPage.js
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex flex-col text-white">
      {/* Header */}
      <header className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-6xl font-bold mb-6">GitBit</h1>
        <p className="text-2xl mb-8">
          Empowering educators with real-time insights into students' coding activities.
        </p>
        <a
          href="#features"
          className="bg-yellow-400 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
        >
          Discover More
        </a>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white text-gray-800">
        <h2 className="text-4xl font-semibold text-center mb-12">Features</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Real-Time Monitoring</h3>
              <p className="text-lg">
                Monitor students' coding activities live with instant updates through WebSockets. 
                Maintain transparency and ensure academic integrity.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Secure Environment</h3>
              <p className="text-lg">
                Provide a secure coding environment with robust protection against unauthorized access 
                and cheating attempts.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Interactive Dashboard</h3>
              <p className="text-lg">
                Access a dynamic dashboard with real-time insights into student progress and 
                overall class performance.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Code Integrity Checks</h3>
              <p className="text-lg">
                Implement automated checks and alerts to detect potential cheating patterns and 
                ensure code integrity.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Collaborative Tools</h3>
              <p className="text-lg">
                Enable students to collaborate effectively while maintaining oversight and preventing 
                unauthorized sharing of code.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Analytics & Reporting</h3>
              <p className="text-lg">
                Gain valuable insights into student coding habits with detailed analytics and reporting 
                tools to track progress and address issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-800 text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Classroom?</h2>
        <p className="text-lg mb-8">
          Join us in revolutionizing the way coding is taught and assessed. Get started with CodeGuard 
          and enhance the educational experience for both teachers and students.
        </p>
        <a
          href="#contact"
          className="bg-yellow-400 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 text-gray-800">
        <h2 className="text-4xl font-semibold text-center mb-12">Contact Us</h2>
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-8">
            Have questions or need more information? Reach out to us and we'll be happy to assist you!
          </p>
          <a
            href="mailto:support@codeguard.com"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-blue-900 text-white text-center">
        <p>&copy; 2024 CodeGuard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
