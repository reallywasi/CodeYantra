import React from 'react'
import Image from 'next/image'

function AICodeEnhancements() {
  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* First Block: Text on Left, Image on Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 lg:mb-24 border-b border-gray-300 pb-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0 px-4 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 sm:text-5xl">
              CodeYatraAI: Your Partner in Code
            </h2>
            <p className="text-lg leading-8 text-gray-700 mb-8">
              Learn coding faster with CodeYatraAI. Our advanced AI tools help you debug, autocomplete, and generate code efficiently through interactive conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <a
                href="#start"
                className="inline-block px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
              >
                Start Coding
              </a>
              <a
                href="#learn-more"
                className="inline-block px-8 py-4 bg-white border border-gray-300 text-gray-900 text-lg font-semibold rounded-md shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-4">
              Unlock the full potential of your code with cutting-edge AI tools.
            </p>
            <p className="text-lg font-semibold text-gray-900">
              CodeYatraAI — Your AI-Enhanced Coding Companion.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/rocket.webp" // Replace with the actual path to your image
              alt="AI and Coding"
              width={150} // Smaller width
              height={150} // Smaller height
              className="w-auto h-auto rounded-lg shadow-md border border-gray-300 hover:border-red-600 transition duration-300"
            />
          </div>
        </div>

        {/* Second Block: Text on Right, Image on Left */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between mb-16 lg:mb-24 border-b border-gray-300 pb-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0 px-4 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Before CodeYatraAI
            </h3>
            <p className="text-lg leading-8 text-gray-700 mb-4">
              Students submit <span className="text-red-600">wrong code</span> with several <span className="text-red-600">errors</span>, leading to a frustrating debugging process. The code is often a <span className="text-red-600">messy puzzle</span> with inconsistent logic and scattered bugs.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              CodeYatraAI identifies and addresses these issues by providing intelligent suggestions and fixing errors efficiently.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/wrongcode.png" // Replace with the actual path to your image
              alt="Before CodeYatraAI"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg shadow-md border border-gray-300 hover:border-red-600 transition duration-300"
            />
          </div>
        </div>

        {/* Third Block: Text on Left, Image on Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 lg:mb-24">
          <div className="lg:w-1/2 mb-8 lg:mb-0 px-4 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              After CodeYatraAI
            </h3>
            <p className="text-lg leading-8 text-gray-700 mb-4">
              CodeYatraAI <span className="text-red-600">smoothens</span> out your code by identifying and fixing errors, offering autocomplete suggestions, and providing intelligent code generation. Experience <span className="text-red-600">cleaner</span>, more efficient code with fewer bugs and improved readability.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/rightcode.png" // Replace with the actual path to your image
              alt="After CodeYatraAI"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg shadow-md border border-gray-300 hover:border-red-600 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AICodeEnhancements
