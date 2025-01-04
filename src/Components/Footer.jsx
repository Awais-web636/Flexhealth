import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0047CA] text-white py-8 px-16 overflow-x-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Column 1: Logo */}
        <div className="w-full md:w-1/4 mb-4 flex justify-center md:justify-start">
          <img src={logo} alt="Logo" className="h-16" />
        </div>

        {/* Column 2: Terms and Conditions */}
        <div className="w-full md:w-1/4 mb-4 flex justify-center md:justify-start">
          <ul className='flex flex-col md:flex-row space-x-0 md:space-x-4'>
            <li><a href="/terms" className="text-white hover:underline">Terms of Service</a></li>
            <li><a href="/privacy" className="text-white hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media Icons */}
        <div className="w-full md:w-1/4 mb-4 flex justify-center md:justify-start">
          <a href="https://facebook.com" className="text-white mx-2 hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" className="text-white mx-2 hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" className="text-white mx-2 hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Column 4: Copyright Message */}
        <div className="w-full md:w-1/4 mb-4 text-center md:text-right md:mr-4">
          <p className="text-[15px]">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;