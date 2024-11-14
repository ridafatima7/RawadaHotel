import React from 'react';
import heroBackground from '../../assets/images/Background.png';

const HeroSection = () => {
  return (
    <section
      className="bg-gray-800 text-white py-20 flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '95vh'
      }}
    >
      <div className="container mx-auto text-center text-white stayUsSection items-center flex flex-col  justify-center ">
        <h2 className="text-lg mt-8 subheading tracking-[.25em] font-montserrat font-light">EXPLORE LUXURY HOTEL</h2>
        <h3 className="text-2xl mt-3 md:text-5xl pt-2 heading font-bold" style={{ fontFamily: 'Cormorant Garamond, serif', textTransform: 'uppercase', fontWeight: '1000' }} >
          Enjoy a Luxury Experience
        </h3>
        <div className="w-4/6 bg-white h-28 p-4 md:p-6 text-gray-800 mt-16 justify-center items-center">
          {/* <div className="grid grid-cols-4 gap-4 items-center h-full border-[#ccc]">
            <div className="flex justify-center items-center border-l border-[#ccc]">
              <span className="text-sm font-medium">Check-in</span>
            </div>
            <div className="flex justify-center items-center border-l border-[#ccc]">
              <span className="text-sm font-medium">Checkout</span>
            </div>
            <div className="flex justify-center items-center border-l border-[#ccc]">
              <span className="text-sm font-medium">Room,Guests</span>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-sm font-medium">Check Availability</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
