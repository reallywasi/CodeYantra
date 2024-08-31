import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Expert-Crafted Learning',
      description:
        'Our team of accomplished engineers, with impressive coding profiles across various programming platforms, hails from top tech companies like Google, Amazon, Meta, and Microsoft. They also boast a proven track record of successful teaching.',
    },
    {
      id: 2,
      title: 'Structured Learning Path',
      description:
        'Master Data Structures & Algorithms (DSA), System Design, core subjects, and practical projects – all through premium blog posts and in-depth video solutions.',
    },
    {
      id: 3,
      title: 'Unmatched Content Depth',
      description:
        'We prioritize quality content, offering in-depth explanations and a wider range of solved problems in both free and paid courses. Our focus is on developing problem-solving skills through intuitive video explanations.',
    },
  ];

  return (
    <section className="py-11 bg-gray-50">
   
              <div className="w-full bg-gray-50 py-20  px-20">
      <div className="w-full max-w-5xl mx-auto bg-white p-12 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 sm:text-5xl">
          Skills Speak Louder Than Words
        </h2>
        <p className="text-lg leading-8 text-gray-600 mb-8">
          We help students excel in coding rounds and sharpen their coding skills. We also assist faculty in conducting effective coding observations and curating insightful tests.
        </p>
    
        <p className="text-sm font-medium text-gray-600 mb-4">
Join a commmunity to compete collaborate and grow.
        </p>
        <div className="flex justify-center gap-6 mb-10">
          <button className="px-14 py-4 bg-red-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-red-700 transition duration-300">
            Sign Up
          </button>
          <button className="px-8 py-4 bg-white border border-gray-300 text-gray-900 text-lg font-semibold rounded-md shadow-md hover:bg-gray-100 transition duration-300">
            Request Demo
          </button>
        </div>
        <p className="text-lg font-semibold text-gray-900">
          Join CodeYantra now — your own classroom coding platform.
        </p>
        
      </div>
      
    </div>


      <div className="max-w-8xl px-10 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Why choose us?</h2>
        <p className="text-lg text-gray-600 mb-12">
          Unlock Your Potential with Our Comprehensive Learning Approach
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white shadow-lg rounded-lg p-6 text-left transition transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-pink-200 text-3xl font-bold mb-4">
                {`0${feature.id}`}
              </div>
              <h3 className="text-xl font-semibold text-pink-500 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
