import React from 'react';
import AboutUs from '../../assets/images/MainAboutUs.png';
import LeftDot from '../../assets/images/LeftDot.png';
import RightDot from '../../assets/images/RightDot.png';
const HomeAboutUs = () => {
  return (
    <section>
      <div className="relative mx-auto px-4 py-8 text-center overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-light text-gray-700">
          <span>Where <span className="cormorant-bold text-4xl md:text-6xl">Comfort</span> Meets <span className="cormorant-bold text-4xl md:text-6xl">Luxury</span></span>
          <span className="block md:inline md:whitespace-nowrap">
            <br className="hidden md:block" /> Your <span className="cormorant-bold text-4xl md:text-6xl">Perfect Stay</span> Awaits
          </span>
        </h2>
      </div>

      {/* Left Dot Image */}
      <img 
        src={RightDot} 
        alt="Left Dot" 
        className="absolute bottom-0 left-0 translate-y-1/2 w-20 md:w-40 pointer-events-none"
        style={{ position: "absolute", left: "0", marginLeft: "-1rem" }}
      />

      {/* Right Dot Image */}
      <img 
        src={LeftDot} 
        alt="Right Dot" 
        className="absolute bottom-0 right-0 translate-y-1/2 w-20 md:w-40 pointer-events-none"
        style={{ position: "absolute", right: "0", marginRight: "-1rem" }}
      />
    </div>

      <div className='container-pink'>
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
      </div>
    </section>
  );
};

export default HomeAboutUs;
