"use client";
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          {/* Brand and Contact Section */}
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-3xl font-extrabold text-red-600 mb-2">CodeYantra</h2>
            <p className="text-lg mb-4">
              Empowering educators and students with cutting-edge coding tools. Enhance classroom learning and foster a competitive coding environment with our AI-powered platform.
            </p>
            <Link href="/contact" className="inline-block px-4 py-2 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105">
              Contact Us
            </Link>
          </div>

     
          {/* Quick Links Section */}
         <div className="md:w-1/3 mb-4 md:mb-0">
  <h3 className="text-xl font-semibold text-gray-300 mb-4 text-center">Quick Links</h3>
  <div className="flex justify-center">
    <div className="flex flex-wrap w-full max-w-lg justify-between"> {/* Flex container with wrapping */}
      <div className="w-1/2">
        <ul className="space-y-1 text-center"> {/* Center-aligning list items */}
          <li><Link href="/about" className="hover:text-red-400 transition duration-300">About Us</Link></li>
          <li><Link href="/features" className="hover:text-red-400 transition duration-300">Features</Link></li>
          <li><Link href="/faq" className="hover:text-red-400 transition duration-300">FAQ</Link></li>
          <li><Link href="/blog" className="hover:text-red-400 transition duration-300">Blog</Link></li>
        </ul>
      </div>
      <div className="w-1/2">
        <ul className="space-y-1 text-center"> {/* Center-aligning list items */}
          <li><Link href="/faculty" className="hover:text-red-400 transition duration-300">For Faculty</Link></li>
          <li><Link href="/students" className="hover:text-red-400 transition duration-300">For Students</Link></li>
          <li><Link href="/contact-developers" className="hover:text-red-400 transition duration-300">Contact the Developers</Link></li>
          <li><Link href="/terms" className="hover:text-red-400 transition duration-300">Terms of Service</Link></li>
          <li><Link href="/privacy" className="hover:text-red-400 transition duration-300">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
  </div>
</div>








         {/* Follow Us Section */}
<div className="md:w-1/3 flex flex-col items-center md:items-end">
  <h3 className="text-xl font-semibold text-gray-300 mb-4">Follow Us</h3>
  <div className="flex space-x-6 mb-4">
    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 border border-gray-700 rounded-full p-2 hover:bg-gray-700 transition duration-300">
      <FaFacebookF size={24} className="text-white hover:text-red-400 transition duration-300" />
    </Link>
    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 border border-gray-700 rounded-full p-2 hover:bg-gray-700 transition duration-300">
      <FaTwitter size={24} className="text-white hover:text-red-400 transition duration-300" />
    </Link>
    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 border border-gray-700 rounded-full p-2 hover:bg-gray-700 transition duration-300">
      <FaLinkedinIn size={24} className="text-white hover:text-red-400 transition duration-300" />
    </Link>
    <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 border border-gray-700 rounded-full p-2 hover:bg-gray-700 transition duration-300">
      <FaGithub size={24} className="text-white hover:text-red-400 transition duration-300" />
    </Link>
  </div>
</div>

        </div>

        {/* Subscription Form Section */}
        <div className="bg-gray-800 py-4 px-14 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-red-600 mb-2 text-center">Subscribe to Our Newsletter</h3>
          <p className="text-base text-gray-300 mb-3 text-center">Stay updated with the latest news and updates from CodeYantra. Join our mailing list for exclusive offers and insights.</p>
          <form className="flex flex-col sm:flex-row">
            <input type="email" placeholder="Enter your email" className="w-full sm:w-2/3 px-3 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 mb-2 sm:mb-0 sm:mr-2" />
            <button type="submit" className="w-full sm:w-1/3 px-3 py-2 bg-red-600 text-white text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105">Subscribe</button>
          </form>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} CodeYantra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
