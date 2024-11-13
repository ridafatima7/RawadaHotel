import React from 'react';
import Logo from '../../assets/images/LogoWhite.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <section className="bg-black text-white ">
      <div className='container'>
      <div className="mx-auto pt-10  grid gap-16 grid-cols-2 md:grid-cols-4 mb-10 px-4">
        <div className='stayUsSection'>
          <img
            src={Logo} alt="Logo" className="h-20 w-36 mb-4" />
          <p className=" textSmall">
            Lorem ipsum dolor sit amet, consectetur adipiscing ept ut apquam, purus sit amet luctus venenatis, lectus magna fringilla urna.
          </p>
        </div>
        <div className='stayUsSection'>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
            <p className="mb-1 textSmall">Discover</p>
            <p className='textSmall'>Special Deals</p>
            <p className='textSmall'>Services</p>
            <p className='textSmall'>Community</p>
            <p className='textSmall'>About Us</p>
        </div>
        <div className='stayUsSection'>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul>
            <p className="mb-1 textSmall">Contact Us</p>
            <p className="mb-1 textSmall">Blogs & Articles</p>
            <p className="mb-1 textSmall">Privacy policy</p>
            <p className="mb-1 textSmall">Terms & Conditions</p>
          </ul>
        </div>
        <div className='stayUsSection'>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className=" textSmall">Address: Jl.Codelaras No.205A</p>
          <p className=" mt-1 textSmall">Email: info@example.com</p>
          <p className=" mt-1 textSmall">Phone: +968754354678</p>
        </div>
      </div>
      <div className="flex justify-center md:justify-start space-x-4  px-4 pb-10">
        <FaFacebook className="text-white text-2xl hover:text-gray-400 cursor-pointer" />
        <FaTwitter className="text-white text-2xl hover:text-gray-400 cursor-pointer" />
        <FaInstagram className="text-white text-2xl hover:text-gray-400 cursor-pointer" />
        <FaLinkedin className="text-white text-2xl hover:text-gray-400 cursor-pointer" />
      </div>
      <div className="stayUsSection border-t  px-4 flex justify-between py-4 border-gray-300 border-opacity-50 text-sm">
        <p className='textSmall'>© 2024. All rights reserved.</p>
        <p className='textSmall'>Privacy Policy | Terms of Use</p>
      </div>
      </div>
    </section>
  );
};

export default Footer;
