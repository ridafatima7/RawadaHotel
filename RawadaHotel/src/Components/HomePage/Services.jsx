import React, { useState } from 'react';
import services1 from '../../assets/images/services1.png';
import services2 from '../../assets/images/services2.png';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleContentClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="container mx-auto py-12 px-4 ">
      <h2 className="text-lg text-left subheading">Our Services</h2>
      <h3 className="text-xl mt-2 pt-2 pb-12 text-left heading">We offer best services</h3>
      <div className='flex flex-col md:flex-row gap-16 md:gap-28'>
        <div className="w-full md:w-1/2 flex flex-col space-y-4 ">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`p-6 transition-all cursor-pointer ${activeIndex === index ? 'tab-active' : 'tab-default'
                }`}
              onClick={() => handleContentClick(index)}
            >
              <h3 className="font-bold text-lg">Dinning</h3>
              <p className="textSmall">
                Morbi semper sem diam, nec commodo diam laoreet at. Morbi blandit hendrerit vehicula.
              </p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img src={services1} alt="Service1" className="w-full h-96 rounded-md object-cover" />
          <img src={services2} alt="Service2" className="w-full h-96 rounded-md object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Services;
