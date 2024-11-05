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
                href="/studentDashboard"
                className="inline-block px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
              >
                Start Coding
              </a>
              <a
                href="/"
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




{/* _________ */}





{/* _________ */}

<div className="flex flex-col lg:flex-row items-center justify-center mb-16 lg:mb-24 border-b border-gray-300 pb-8">

<div>
<h3 className="text-4xl font-bold text-gray-900 mb-10 text-center lg:text-left">
    Code Transformation with CodeYatraAI
  </h3>
  <div className="relative diff aspect-[16/9] w-full max-w-screen-md rounded-lg shadow-lg border border-gray-300 overflow-hidden">
    {/* "Before" Label */}

    <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md">
      Before
    </div>

    {/* Incorrect Code Image on Left */}
    <div className="diff-item-1">
    <img alt="daisy" src="/rightcode.png" />
  </div>

    {/* "After" Label */}
    <div className="absolute top-4 right-4 bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md">
      After
    </div>

    {/* Corrected Code Image on Right */}
    <div className="diff-item-2">
    <img
      alt="daisy"
      src="/wrongcode.png" />
  </div>

    {/* Draggable Divider */}
    <div className="diff-resizer bg-red-500"></div>
    </div>
    </div>

  {/* Right: Explanatory Text in Vertical Format */}
  <div className="flex flex-col items-center lg:items-start lg:w-1/2 mt-10 lg:mt-0">
    {/* Before CodeYatraAI Text */}
    <div className="px-8 lg:px-12 mb-8 lg:mb-12">
      <h4 className="text-2xl font-semibold text-gray-900 mb-3">Before CodeYatraAI</h4>
      <p className="text-lg leading-8 text-gray-700">
        Students submit <span className="text-red-600 font-semibold">incorrect code</span> riddled with 
        <span className="text-red-600 font-semibold">errors</span>, leading to a frustrating debugging process and messy code structure.
      </p>
    </div>

    {/* After CodeYatraAI Text */}
    <div className="px-8 lg:px-12">
      <h4 className="text-2xl font-semibold text-gray-900 mb-3">After CodeYatraAI</h4>
      <p className="text-lg leading-8 text-gray-700">
        CodeYatraAI <span className="text-green-600 font-semibold">optimizes</span> your code, automatically fixing errors and improving readability for clean, efficient, and error-free code.
      </p>
    </div>
  </div>
</div>


{/* _________ */}
        
      </div>
    </div>
  )
}

export default AICodeEnhancements
