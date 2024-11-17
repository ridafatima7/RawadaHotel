import React from 'react';
import heroBackground from '../../assets/images/Background.png';
import { IoIosArrowDown } from "react-icons/io";
const HeroSection = () => {
  return (
    <section
      className="bg-gray-800 text-white py-16 flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '95vh'
      }}
      id="HeroSection"
    >
      <div className="container mx-auto text-center text-white stayUsSection items-center flex flex-col   justify-center ">
        <h2 className="text-lg mt-8 subheading tracking-[.25em] font-montserrat font-light">EXPLORE LUXURY HOTEL</h2>
        <h3 className="text-2xl mt-3 md:text-5xl pt-2 heading font-bold" style={{ fontFamily: 'Cormorant Garamond, serif', textTransform: 'uppercase', fontWeight: '1000' }} >
          Enjoy a Luxury Experience
        </h3>
        <div className="w-4/6 bg-white f-full md:h-36  text-gray-800 mt-16 justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4  h-full">
            <div className="justify-center p-4 md:p-5">
              <span className="text-sm font-light uppercase">CHECK-IN</span><br />
              <div className='flex flex-row gap-5 md:gap-11  justify-center'>
                <div className="font-normal text-5xl " style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: '1000' }}>
                  05
                </div>
                <div className="flex justify-between items-center gap-1  mt-5 flex-col">
                  <span className="text-sm font-medium heroCheck-in">Nov</span>
                  <span className="text-xs heroCheck-in font-light"><IoIosArrowDown size={16} /></span>
                </div>
              </div>
            </div>
            <div className="justify-center p-4 md:p-5 border-l border-[#ccc]">
              <span className="text-sm font-light uppercase ">Check-out</span>
              <div className='flex flex-row gap-5 md:gap-11  justify-center'>
                <div className="text-5xl font-medium" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: '1000' }}>
                  05
                </div>
                <div className="flex justify-between items-center gap-1 flex-col">
                  <span className="text-sm font-medium heroCheck-in mt-5 ">Nov</span>
                  <span className="text-xs heroCheck-in font-light"><IoIosArrowDown size={16} /></span>
                </div>
              </div>
            </div>
            <div className="justify-center border-l p-5 md:p-6 border-[#ccc]">
              <span className="text-sm font-light uppercase">Room, Guests</span>
              <div className='flex flex-row gap-11  justify-center'>
                <div className='flex flex-row gap-2 md:gap-6  justify-center'>
                  <div className=" text-5xl font-medium " style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: '1000' }}>
                    1, 
                  </div>
                  <div className="  text-5xl font-medium " style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: '1000' }}>
                    3
                  </div>
                  <div className="flex justify-between items-center gap-2 flex-col">
                  <span className="text-xs heroCheck-in font-light  mt-8"><IoIosArrowDown size={16} /></span>
                </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center border-l border-[#ccc] items-center " style={{ backgroundColor: '#705e59' }}>
              <span className="text-sm font-medium uppercase text-white ">Check Availability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
