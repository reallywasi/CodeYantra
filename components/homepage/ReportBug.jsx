import React from 'react';

function ReportBug() {
  return (
    <section className="bg-gray-800 text-white py-12 px-4 md:px-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Report a Bug</h2>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://opensource.com/sites/default/files/lead-images/bug_software_issue_tracking_computer_screen.jpg"
              alt="Report a Bug"
              className="w-60 h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-6 mt-6 md:mt-0">
            <p className="text-lg mb-4">
              If you encounter any issues or bugs while using CodeYantra, please let us know!
              Your feedback helps us improve the platform and provide a better experience for everyone.
            </p>
            <a
              href="mailto:support@codeyantra.com"
              className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300"
            >
              Report a Bug
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReportBug;
