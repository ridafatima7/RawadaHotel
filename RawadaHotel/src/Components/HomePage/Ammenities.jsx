import React from 'react';
import ammenity1 from '../../assets/images/ammenity1.png';
import ammenity2 from '../../assets/images/ammenity2.png';
import ammenity3 from '../../assets/images/ammenity3.png';
import ammenity4 from '../../assets/images/ammenity4.png';
import staff from '../../assets/images/staff.png';

const Ammenities = () => {
  return (
    <section className="container py-12">
      <h2 className="text-lg text-left subheading">Facilities & Amenities</h2>
      <h3 className="text-xl mt-2 pt-2 pb-12 text-left heading">Handed Over Projects</h3>
      
      <div className="flex">
        <div className="content-section w-[70%] relative">
          <div className="flex justify-between mb-8 gap-2">
            <div className="text-left w-[45%]">
              <p className="text-gray-600 mt-2 textSmall">Pearl is committed to creating and consistently delivering world-class real estate projects and master developments that strengthen Pakistan position.</p>
            </div>
            <div className="text-left w-[45%]">
              <p className="text-gray-600 mt-2 textSmall">Pearl is committed to creating and consistently delivering world-class real estate projects and master developments that strengthen Pakistan position.</p>
            </div>
          </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 relative">
            <div className="relative z-20">
              <img src={ammenity1} alt="Amenity 1" className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">Amenity 1</div>
            </div>
            <div className="relative z-20">
              <img src={ammenity2} alt="Amenity 2" className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">Amenity 2</div>
            </div>
            <div className="relative z-20">
              <img src={ammenity3} alt="Amenity 3" className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">Amenity 3</div>
            </div>
            <div className="relative z-20">
              <img src={ammenity4} alt="Amenity 4" className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">Amenity 4</div>
            </div>
          </div>
        </div>
        <div className="w-[30%] relative z-10">
          <img src={staff} alt="Staff" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export default Ammenities;
