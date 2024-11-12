import React from 'react';
import AboutUs from '../../assets/images/MainAboutUs.png';

const HomeAboutUs = () => {
  return (
    <section className="container-pink">
      <div className="py-12 container flex flex-wrap md:flex-nowrap gap-6">
        <div className="w-full md:w-2/5 flex flex-col items-start justify-center space-y-4 order-1 md:order-2">
          <h2 className="text-lg subheading">LUXURY HOTEL</h2>
          <h3 className="text-xl heading">Relax in our hotel</h3>
          <p className="textSmall">
            Pearl is committed to creating and consistently delivering world-class real estate projects and master developments that strengthen Pakistan's position as the global real estate investment destination of choice.
          </p>
          <button className="bg-black text-white font-semibold hover:bg-opacity-80">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-3/5 order-2 md:order-1">
          <img
            src={AboutUs}
            alt="About Us"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
