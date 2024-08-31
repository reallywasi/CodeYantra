import React from 'react';

const SupportSection = () => {
  return (
    <div className="flex flex-col items-center text-center py-8">
      {/* Avatars */}
      <div className="flex space-x-2 mb-4">
        <img 
          src="https://randomuser.me/api/portraits/men/1.jpg" 
          alt="Avatar 1" 
          className="w-12 h-12 rounded-full"
        />
        <img 
          src="https://randomuser.me/api/portraits/women/2.jpg" 
          alt="Avatar 2" 
          className="w-12 h-12 rounded-full"
        />
        <img 
          src="https://randomuser.me/api/portraits/men/3.jpg" 
          alt="Avatar 3" 
          className="w-12 h-12 rounded-full"
        />
      </div>
      {/* Text */}
      <p className="text-xl font-semibold mb-2">Still have questions?</p>
      <p className="text-gray-500 mb-6">Can’t find the answer you’re looking for? Please chat with our friendly team.</p>
      {/* Button */}
      <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition">
        Get in Touch
      </button>
    </div>
  );
}

export default SupportSection;
