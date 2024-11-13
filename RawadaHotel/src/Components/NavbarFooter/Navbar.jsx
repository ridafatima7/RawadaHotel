import React, { useState } from 'react';
import Logo from '../../assets/images/LogoWhite.png';
import { CgProfile } from 'react-icons/cg';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white py-4 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} />
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center">
          <img src={Logo} alt="Logo" className="h-16" />
        </div>

        {/* Profile Icon for Mobile */}
        <div className="md:hidden">
          <CgProfile className="text-2xl" />
        </div>

        {/* Navigation Links for Desktop (768px and above) */}
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="/" className="nav-link relative pb-1">Home</a>
          <a href="#services" className="nav-link relative pb-1">Services</a>
          <a href="#news" className="nav-link relative pb-1">News</a>
          <a href="#about" className="nav-link relative pb-1">About Us</a>
          <a href="#contact" className="nav-link relative pb-1">Contact</a>
        </div>


        {/* Profile and Book Now Button for Desktop (768px and above) */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <CgProfile className="text-2xl" />
            <a href="#signin" className="hover:text-gray-300">Sign In</a>
          </div>
          <button className="bg-white text-black px-4 py-2 transition hover:bg-gray-200">Book Now</button>
        </div>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-3/4 max-w-xs z-30 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4">
          <img src={Logo} alt="Logo" className="h-12" />
          <IoMdClose className="text-2xl cursor-pointer" onClick={toggleSidebar} />
        </div>
        <div className="flex flex-col space-y-4 px-4 mt-4 text-lg">
          <a href="/" className="hover:text-gray-400" onClick={toggleSidebar}>Home</a>
          <a href="#services" className="hover:text-gray-400" onClick={toggleSidebar}>Services</a>
          <a href="#news" className="hover:text-gray-400" onClick={toggleSidebar}>News</a>
          <a href="#about" className="hover:text-gray-400" onClick={toggleSidebar}>About Us</a>
          <a href="#contact" className="hover:text-gray-400" onClick={toggleSidebar}>Contact</a>
          <a href="#signin" className="hover:text-gray-400 flex items-center space-x-2" onClick={toggleSidebar}>
            <CgProfile className="text-2xl" />
            <span>Sign In</span>
          </a>
          <button className="bg-white text-black px-4 py-2 mt-4 rounded-md transition hover:bg-gray-200">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
