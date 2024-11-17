import React from 'react';
import room1 from '../../assets/images/room1.png';
import room2 from '../../assets/images/Room2.png';
import room3 from '../../assets/images/room3.png';
import room4 from '../../assets/images/room4.png';
import room5 from '../../assets/images/room4.png';
import motif from '../../assets/images/RoomMotif.png';
const Rooms = () => {
  return (
    <section className='overflow-hidden'>
       <div className='relative '>
        <img
          src={motif}
          alt="Motif"
          className="absolute top-[30px] left-0 z-0"
          style={{ position: "absolute",width: "300px" }}
        />
      </div>
      <div className="container-pink">
        <div className="py-12 container">
          <h2 className="text-lg text-center subheading">Our Rooms</h2>
          <h3 className="text-xl mt-2 pt-2 pb-12 text-center heading">A World of Choices</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-2/5 text-left relative">
              <img
                src={room1}
                alt="Mainroomimage"
                className="w-full rounded-md h-auto object-cover mx-auto"
              />
              <div className="absolute right-0 top-20 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-2">
                From PKR 5000
              </div>
              <div className="mt-2">
                <p className="text-xs">3 Guests</p>
                <p className="text-lg font-semibold">Deluxe Room</p>
              </div>
            </div>
            <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[room2, room3, room4, room5].map((room, index) => (
                <div key={index} className="relative text-left">
                  <img
                    src={room}
                    alt={`Room image ${index + 1}`}
                    className="w-full room-grid-images md:h-auto rounded-md object-cover mx-auto"
                  />
                  <div className="absolute right-0 top-20 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-2">
                    From PKR 4000
                  </div>
                  <div className="mt-2">
                    <p className="text-xs">2 Guests</p>
                    <p className="text-lg font-semibold">Apartment</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-9">
            <button className="bg-black text-white font-semibold hover:bg-opacity-80">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
