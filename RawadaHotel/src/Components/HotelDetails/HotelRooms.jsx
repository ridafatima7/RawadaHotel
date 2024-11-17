import React from 'react';
import heroBackground from '../../assets/images/Roombg.png';
const HotelRooms = () => {
    return (
        <>
            <section className="bg-gray-800 text-white stayUsSection py-16 flex items-center justify-center "
                style={{
                    backgroundImage: `url(${heroBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '95vh'
                }}
                id="hotelRooms"
            >
                <h3 className="text-2xl mt-3 md:text-5xl pt-2 heading font-bold" style={{ fontFamily: 'Cormorant Garamond, serif', textTransform: 'uppercase', fontWeight: '1000' }} >
                    Rooms
                </h3>
            </section>
            <section className='container-pink'>
                <div className='container py-12'>
                    <h2 className="text-lg text-start subheading">AMENTIES & FACILTIES</h2>
                    <h3 className="text-xl mt-2 pt-2 pb-12 text-start heading">We Provide best room facilties</h3>
                </div>
            </section>
            <section className='container'>
                <div className='py-12'>
                    <h2 className="text-lg text-center subheading">TESTIMONIAL</h2>
                    <h3 className="text-xl mt-2 pt-2 pb-12 text-center heading">what client says about us</h3>
                </div>
            </section>

        </>
    )
}

export default HotelRooms
