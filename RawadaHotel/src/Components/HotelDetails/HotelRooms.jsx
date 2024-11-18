import React, { useRef, useEffect } from 'react';
import heroBackground from '../../assets/images/Roombg.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import comma from "../../assets/icons/Quote.png";
import { IoWifi } from "react-icons/io5";
import bathroom from "../../assets/icons/bathroom.png";
import breakfast from "../../assets/icons/breakfast.png";
import extrablanket from "../../assets/icons/ExtraBlanket.png";
import fridge from "../../assets/icons/fridge.png";
import housekeeping from "../../assets/icons/housekeeping.png";
import snakbar from "../../assets/icons/snakbar.png";
import kettle from "../../assets/icons/kettle.png";
const HotelRooms = () => {
    const swiperRef = useRef(null);
    // Function to update button states
    const updateButtonState = () => {
        const swiper = swiperRef.current?.swiper;

        if (!swiper) return;

        const prevButton = document.querySelector(".rooms-prev");
        const nextButton = document.querySelector(".rooms-next");

        if (swiper.isBeginning) {
            prevButton?.classList.add("disabled");
        } else {
            prevButton?.classList.remove("disabled");
        }

        if (swiper.isEnd) {
            nextButton?.classList.add("disabled");
        } else {
            nextButton?.classList.remove("disabled");
        }
    };
    useEffect(() => {
        const swiper = swiperRef.current?.swiper;

        if (swiper) {
            swiper.on("slideChange", updateButtonState);
            updateButtonState(); // Initialize button state
        }

        return () => {
            if (swiper) swiper.off("slideChange", updateButtonState);
        };
    }, []);
    const testimonials = [
        {
            id: 1,
            comment:
                "Duis tempor ultrices elit sollicitudin aliquet. Nulla facilisi. Donec sit amet nunc eros. Etiam et nisi in diam ultrices luctus in a dui. Mauris in sem aliquet ligula convallis vestibulum. Etiam non erat aliquam, lacinia nis.",
            name: "Cameron Williamson",
            designation: "CEO & Founder of Google",
        },
        {
            id: 2,
            comment:
                "Vivamus quis elit id ligula malesuada pretium. Ut ac massa a risus egestas sodales. Proin eget massa non lectus convallis dignissim non non neque.",
            name: "Elon Musk",
            designation: "CEO of SpaceX",
        },
        {
            id: 3,
            comment:
                "Phasellus et ligula quis nisi ultricies vestibulum. Morbi id dolor libero. Suspendisse potenti. Quisque non sapien urna.",
            name: "Sundar Pichai",
            designation: "CEO of Alphabet",
        },
        {
            id: 4,
            comment:
                "Phasellus et ligula quis nisi ultricies vestibulum. Morbi id dolor libero. Suspendisse potenti. Quisque non sapien urna.",
            name: "Sundar Pichai",
            designation: "CEO of Alphabet",
        },
    ];
    const amenities = [
        { icon: <IoWifi className="text-4xl text-gray-600" />, name: "WiFi" },
        { icon: <img src={bathroom} alt="Bathroom" className="w-12 h-12" />, name: "Bathroom" },
        { icon: <img src={breakfast} alt="Breakfast" className="w-12 h-12" />, name: "Breakfast" },
        { icon: <img src={extrablanket} alt="Extra Blanket" className="w-12 h-12" />, name: "Extra Blanket" },
        { icon: <img src={fridge} alt="Fridge" className="w-12 h-12" />, name: "Fridge" },
        { icon: <img src={housekeeping} alt="Housekeeping" className="w-12 h-12" />, name: "Housekeeping" },
        { icon: <img src={snakbar} alt="Snack Bar" className="w-12 h-12" />, name: "Snack Bar" },
        { icon: <img src={kettle} alt="Kettle" className="w-12 h-12" />, name: "Kettle" },
    ];
    return (
        <>
            {/* ---------------First Section------------- */}
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
            {/* ---------------Ammenities------------- */}
            <section className="container-pink">
                <div className="container py-12">
                    <h2 className="text-lg text-start subheading">AMENTIES & FACILTIES</h2>
                    <h3 className="text-xl mt-2 pt-2 pb-12 text-start heading">
                        We Provide Best Room Facilities
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {amenities.map((amenity, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 flex flex-col items-center text-center shadow-md rounded-md"
                            >
                                <div className="mb-4">{amenity.icon}</div>
                                <h4 className="text-md " style={{fontWeight:"400",color:"#705e59"}}>{amenity.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ---------------Reviews------------- */}
            <section className="container py-12">
                <div className="">
                    <h2 className="text-lg text-center subheading">TESTIMONIAL</h2>
                    <h3 className="text-xl mt-2 pt-2 text-center heading">
                        What Client Says About Us
                    </h3>
                </div>
                <div className="relative">
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        //   modules={[Navigation]}
                        ref={swiperRef}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} className='roomSwiper'>
                                <div className="text-center max-w-xl mx-auto p-6">
                                    <div className="text-5xl text-gray-400 mb-4 flex items-center justify-center">
                                        <img src={comma} alt="" />
                                    </div>
                                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                        “ {testimonial.comment} ”
                                    </p>
                                    <h4 className="text-sm font-semibold text-gray-800">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-[9px] text-gray-500">{testimonial.designation}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* rooms Navigation Buttons */}
                    <div className="absolute top-5/6 left-0 cursor-pointer transform border border-gray-300 rounded-full shadow-md -translate-y-1/2"
                        onClick={() => swiperRef.current?.swiper.slidePrev()}
                    >
                        <button
                            className="rooms-prev cursor-pointer p-3"
                        >
                            <GrLinkPrevious className="text-3xl text-gray-600 hover:text-gray-900" />
                        </button>
                    </div>
                    <div className="absolute top-5/6 right-0 cursor-pointer border border-gray-300 rounded-full shadow-md transform -translate-y-1/2"
                        onClick={() => swiperRef.current?.swiper.slideNext()}
                    >
                        <button
                            className="rooms-next cursor-pointer  p-3"
                        >
                            <GrLinkNext className="text-3xl text-gray-600 hover:text-gray-900" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HotelRooms
