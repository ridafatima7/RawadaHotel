import React from 'react';
import StaywithUsImage from '../../assets/images/stayWithUs.png';

const StaywithUs = () => {
  return (
    <section
      className="bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: `url(${StaywithUsImage})` }}
    >
      <div className="stayUsSection justify-center items-center bg-opacity-60 bg-black text-white flex flex-col p-8 space-y-6 md:space-y-8 max-w-xl mx-auto">
        <h2 className="text-lg subheading">STAY WITH US</h2>
        <h3 className="text-xl heading font-semibold text-center">Book Your Next Stay with Us</h3>
        <p className="textSmall max-w-lg text-center">
          Pearl is committed to creating and consistently delivering world-class real estate projects and master developments that strengthen Pakistan's position as the global real estate investment destination of choice.
        </p>
        <button className="bg-white text-black font-semibold  mt-4 hover:bg-opacity-80">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default StaywithUs;
