import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/LogoWhite.png';
import { CgProfile } from 'react-icons/cg';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('transparent');
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#HeroSection');
      const roomSection = document.querySelector('#hotelRooms');
      const LoginSignupSection = document.querySelector('#loginSignup');
      // Get their bottom positions relative to the viewport
      const heroBottom = heroSection?.getBoundingClientRect().bottom || 0;
      const roomBottom = roomSection?.getBoundingClientRect().bottom || 0;

      // Change background color based on scroll position
      if (heroBottom > 0 || roomBottom > 0 || LoginSignupSection>0) {
        // If either section is in view
        setNavbarBg('transparent');
      } else {
        // If outside both sections
        setNavbarBg('#705e59');
      }
    }

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <nav className="fixed top-0 left-0 w-full  text-white py-4 z-50" style={{
      backgroundColor: navbarBg,
      transition: 'background-color 0.3s ease-in-out',
    }}>
      <div className="container mx-auto flex justify-between items-center px-4">

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} />
        </div>

        {/* Logo */}
        <Link to="/"><div className="flex items-center justify-center cursor-pointer">
          <img src={Logo} alt="Logo" className="h-16" />
        </div></Link>

        {/* Profile Icon for Mobile */}
        <div className="md:hidden">
          <CgProfile className="text-2xl" />
        </div>

        {/* Navigation Links for Desktop (768px and above) */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="nav-link relative pb-1">Home</Link>
          <Link to="/rooms" className="nav-link relative pb-1">Services</Link>
          <Link to="#news" className="nav-link relative pb-1">News</Link>
          <Link to="#about" className="nav-link relative pb-1">About Us</Link>
          <Link to="#contact" className="nav-link relative pb-1">Contact</Link>
        </div>


        {/* Profile and Book Now Button for Desktop (768px and above) */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <CgProfile className="text-2xl" />
            <Link to="/login" className="hover:text-gray-300">Sign In</Link>
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
          <Link to="/" className="hover:text-gray-400" onClick={toggleSidebar}>Home</Link>
          <Link to="/rooms" className="hover:text-gray-400" onClick={toggleSidebar}>Services</Link>
          <Link to="#news" className="hover:text-gray-400" onClick={toggleSidebar}>News</Link>
          <Link to="#about" className="hover:text-gray-400" onClick={toggleSidebar}>About Us</Link>
          <Link to="#contact" className="hover:text-gray-400" onClick={toggleSidebar}>Contact</Link>
          <Link to="/login" className="hover:text-gray-400 flex items-center space-x-2" onClick={toggleSidebar}>
            <CgProfile className="text-2xl" />
            <span>Sign In</span>
          </Link>
          <button className="bg-white text-black px-4 py-2 mt-4 rounded-md transition hover:bg-gray-200">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
