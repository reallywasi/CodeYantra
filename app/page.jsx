// import UserInfo from "@/components/UserInfo";
// import RankingList from "@/components/RankingList";

// import LandingPage from "@/components/LandingPage";
// export default function Home() {
//   return (
//     <div className="relative h-screen -mt-24">
//       {/* <UserInfo /> */}
//       {/* <LandingPage/> */}
//       <LandingPage className="absolute top-0 left-0 w-full h-full z-10" />
//       <RankingList className="absolute top-0 left-0 w-full h-full z-20" />

//     </div>
//   );
// }

import React from 'react';

const LeadMagnetsUI = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">
          Convert Content Into Customers With <span className="text-purple-600">AI Lead Magnets</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          LeadConvert helps creators turn regular content into interactive AI experiences, effortlessly capturing leads, and nurturing them towards your digital products or courses.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
          Create Your First AI Lead Magnet
        </button>
      </header>

      {/* Feature Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="text-4xl text-purple-600 mb-4">🌟</div>
          <h2 className="text-2xl font-semibold mb-2">Unique AI Lead Magnets</h2>
          <p className="text-gray-600">Beyond ebooks and videos, offer quizzes & micro-courses that speak to your audience's needs.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="text-4xl text-purple-600 mb-4">📧</div>
          <h2 className="text-2xl font-semibold mb-2">Effortless Email Capture</h2>
          <p className="text-gray-600">Let AI automate all the hard work and zero in on your fans, turning interactions into opportunities effortlessly.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="text-4xl text-purple-600 mb-4">🔗</div>
          <h2 className="text-2xl font-semibold mb-2">Easy Sharing with Social Media</h2>
          <p className="text-gray-600">Make your posts work for you, effortlessly share interactive content and boost your lead generation.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/path/to/image1.png" alt="Step 1" className="mb-4 rounded-lg shadow-lg"/>
            <h3 className="text-xl font-semibold mb-2">Step 1: Create Your AI Lead Magnet</h3>
            <p className="text-gray-600">Define the value proposition and then the AI asks specific questions.</p>
            <ul className="list-disc ml-5 mt-2 text-gray-600">
              <li>Plug in Your Goals</li>
              <li>Get Specific with AI</li>
              <li>Use pre-built or custom outlines</li>
            </ul>
          </div>
          <div>
            <img src="/path/to/image2.png" alt="Step 2" className="mb-4 rounded-lg shadow-lg"/>
            <h3 className="text-xl font-semibold mb-2">Step 2: Share on Social Media</h3>
            <p className="text-gray-600">Promote your AI Lead Magnet with a simple link at the end of your post.</p>
            <ul className="list-disc ml-5 mt-2 text-gray-600">
              <li>Share on LinkedIn, Twitter</li>
              <li>Customize your Call-to-Action</li>
            </ul>
          </div>
          <div>
            <img src="/path/to/image3.png" alt="Step 3" className="mb-4 rounded-lg shadow-lg"/>
            <h3 className="text-xl font-semibold mb-2">Step 3: Capture and Convert</h3>
            <p className="text-gray-600">LeadConvert AI captures the users' emails, providing you with qualified leads in your CRM.</p>
            <ul className="list-disc ml-5 mt-2 text-gray-600">
              <li>Connect to your CRM</li>
              <li>Engage with targeted emails</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadMagnetsUI;
