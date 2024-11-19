import React, { useRef, useEffect, useState } from 'react';
import heroBackground from '../../assets/images/Roombg.png';
import heroImage from '../../assets/images/Background.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import comma from "../../assets/icons/Quote.png";
import { Link } from 'react-router-dom';
import { IoWifi } from "react-icons/io5";
import bathroom from "../../assets/icons/bathroom.png";
import breakfast from "../../assets/icons/breakfast.png";
import extrablanket from "../../assets/icons/ExtraBlanket.png";
import fridge from "../../assets/icons/fridge.png";
import housekeeping from "../../assets/icons/housekeeping.png";
import snakbar from "../../assets/icons/snakbar.png";
import kettle from "../../assets/icons/kettle.png";
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import dayjs from 'dayjs';
const HotelRooms = () => {
    const swiperRef = useRef(null);
    const [activeTab, setActiveTab] = useState('Rooms');
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const dropdownRef = useRef(null);
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
    const disablePastDates = (current) => {
        return current && current < new Date().setHours(0, 0, 0, 0);
    };
    const disableDatesBeforeCheckIn = (current) => {
        return checkInDate && current < checkInDate;
    };
    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
    return (
        <>
            {/* ---------------First Section------------- */}
            <section
                className="bg-gray-800 text-white stayUsSection py-16 flex items-center justify-center relative"
                style={{
                    backgroundImage: `url(${heroBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '92vh',
                }}
                id="hotelRooms"
            >
                <h3
                    className="text-2xl mt-3 md:text-5xl pt-2 heading font-bold"
                    style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        textTransform: 'uppercase',
                        fontWeight: '1000',
                    }}
                >
                    Rooms
                </h3>
                <div className="absolute bottom-5 left-10 flex space-x-9">
                    <div
                        className={`tab cursor-pointer relative ${activeTab === 'Rooms' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab('Rooms');
                            document.getElementById('rawadaRooms').scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span className="text-lg font-light">Rooms</span>
                    </div>
                    <div
                        className={`tab cursor-pointer relative ${activeTab === 'Amenities' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab('Amenities');
                            document.getElementById('hotelAmmenities').scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span className="text-lg font-light">Amenities</span>
                    </div>
                    <div
                        className={`tab cursor-pointer relative ${activeTab === 'Testimonials' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab('Testimonials');
                            document.getElementById('hotelReviews').scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span className="text-lg font-light">Testimonials</span>
                    </div>

                </div>
            </section>
            {/* ---------------Rawada Rooms------------- */}
            <section className='container py-12' id='rawadaRooms'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 ">
                        {/* ---------------Availabilty Strip------------- */}
                        <div className="pb-4">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border border-gray-300 bg-white">
                                {/* Check-In Date */}
                                <div className="flex flex-col">
                                    <DatePicker
                                        placeholder="Check-In"
                                        onChange={(date) => setCheckInDate(date)}
                                        disabledDate={disablePastDates}
                                        className="custom-date-picker p-2"
                                        value={checkInDate}
                                        suffixIcon={null}
                                    />
                                </div>
                                {/* Check-Out Date */}
                                <div className="flex flex-col">
                                    <DatePicker
                                        placeholder="Check-Out"
                                        onChange={(date) => setCheckOutDate(date)}
                                        disabledDate={disableDatesBeforeCheckIn}
                                        className="custom-date-picker p-2"
                                        value={checkOutDate}
                                        suffixIcon={null}
                                    />
                                </div>
                                <div className="relative flex flex-col">
                                    <input
                                        id="rooms"
                                        type="text"
                                        placeholder={`${rooms} Room${rooms > 1 ? "s" : ""} ${adults} Adult${adults > 1 ? "s" : ""}`}
                                        className="roomAdult border-none bg-white outline-none p-2 cursor-pointer"
                                        readOnly
                                        onClick={() => setDropdownOpen((prev) => !prev)}
                                    />
                                    {dropdownOpen && (
                                        <div
                                            ref={dropdownRef}
                                            className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 shadow-md p-4 z-10"
                                        >
                                            <div className="flex justify-between items-center mb-4">
                                                <span>Rooms</span>
                                                <div className="flex items-center ">
                                                    <button
                                                        onClick={() => setRooms((prev) => Math.max(1, prev - 1))}
                                                        className="px-3 mr-2 py-1 bg-gray-300 hover:bg-gray-400 rounded"
                                                    >
                                                        -
                                                    </button>
                                                    <span>{rooms}</span>
                                                    <button
                                                        onClick={() => setRooms((prev) => Math.min(10, prev + 1))}
                                                        className="px-3 ml-2 py-1 bg-gray-300 hover:bg-gray-400 rounded"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>Adults</span>
                                                <div className="flex items-center">
                                                    <button
                                                        onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                                                        className="px-3 mr-2 py-1 bg-gray-300 hover:bg-gray-400 rounded"
                                                    >
                                                        -
                                                    </button>
                                                    <span>{adults}</span>
                                                    <button
                                                        onClick={() => setAdults((prev) => Math.min(10, prev + 1))}
                                                        className="px-3  ml-2 py-1 bg-gray-300 hover:bg-gray-400 rounded"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <button className="no-transform dark-gray-background text-white py-2 px-4  hover:bg-gray-700">
                                        Check Availability
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full flex-col md:flex-row mb-5 border border-l border-gray-300'>
                            <div className="width-[35%]">
                                <img
                                    src={heroImage}
                                    alt="Room Image 2"
                                    className="w-full  h-56"
                                />
                                {/* <Swiper
                                    spaceBetween={10}
                                    navigation={true}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img
                                            src={heroBackground}
                                            alt="Room Image 1"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            src={heroBackground}
                                            alt="Room Image 2"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </SwiperSlide>
                                </Swiper> */}
                            </div>
                            <div className="lg:col-span-1 overflow-hidden pl-6 pr-1 py-6 rounded-lg space-y-3 room-details">
                                <h3 className="text-2xl font-light text-gray-800">Deluxe Room</h3>
                                <div className="flex flex-col space-y-2">
                                    <p className="text-xs" style={{ color: "#368aff" }}>Room Size: 322 Sq feet</p>
                                    <p className="text-xs" style={{ color: "#368aff" }}>Bed size: 1 king/queen or twin</p>
                                    <p className="text-xs overflow-hidden text-ellipsis whitespace-normal" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                        Pearl is committed to creating and consistently delivering world-class luxury experiences.
                                    </p>
                                    <div className="flex flex-col space-y-2">
                                        <ul className="list-disc pl-5">
                                            <li className="textSmall">Non Refundable</li>
                                            <li className="textSmall">Full payment in advance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-6 pr-6 pl-6 md:pl-0 room-selection-details">
                                {/* <p className="textSmall">Start from <span className="text-2xl font-medium text-gray-800"> SAR56</span><span className='textSmall uppercase'>/night</span></p> */}
                                <div>
                                    <h4 className="textSmall">Start from</h4>
                                    <p className="text-2xl font-medium text-gray-800">$56<span className='textSmall uppercase'>/night</span></p>
                                </div>
                                <div className="md:mt-16 ml-auto md:ml-0">
                                    <select
                                        id="room-select"
                                        className="w-full rounded-none mt-2 p-2 bg-gray-800 text-white"
                                    >
                                        <option value="0">Room 0</option>
                                        <option value="1">Room 1</option>
                                        <option value="2">Room 2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full flex-col md:flex-row mb-5 border border-l border-gray-300'>
                            <div className="width-[35%]">
                                <img
                                    src={heroImage}
                                    alt="Room Image 2"
                                    className="w-full  h-56"
                                />
                                {/* <Swiper
                                    spaceBetween={10}
                                    navigation={true}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img
                                            src={heroBackground}
                                            alt="Room Image 1"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            src={heroBackground}
                                            alt="Room Image 2"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </SwiperSlide>
                                </Swiper> */}
                            </div>
                            <div className="lg:col-span-1 overflow-hidden pl-6 pr-1 py-6 rounded-lg space-y-3 room-details">
                                <h3 className="text-2xl font-light text-gray-800">Deluxe Room</h3>
                                <div className="flex flex-col space-y-2">
                                    <p className="text-xs" style={{ color: "#368aff" }}>Room Size: 322 Sq feet</p>
                                    <p className="text-xs" style={{ color: "#368aff" }}>Bed size: 1 king/queen or twin</p>
                                    <p className="text-xs overflow-hidden text-ellipsis whitespace-normal" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                        Pearl is committed to creating and consistently delivering world-class luxury experiences.
                                    </p>
                                    <div className="flex flex-col space-y-2">
                                        <ul className="list-disc pl-5">
                                            <li className="textSmall">Non Refundable</li>
                                            <li className="textSmall">Full payment in advance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className=" py-6 pr-6 pl-6 md:pl-0 room-selection-details">
                                {/* <p className="textSmall">Start from <span className="text-2xl font-medium text-gray-800"> SAR56</span><span className='textSmall uppercase'>/night</span></p> */}
                                <div>
                                    <h4 className="textSmall">Start from</h4>
                                    <p className="text-2xl font-medium text-gray-800">$56<span className='textSmall uppercase'>/night</span></p>
                                </div>
                                <div className="md:mt-16 ml-auto md:ml-0">
                                    <select
                                        id="room-select"
                                        className="w-full rounded-none mt-2 p-2 bg-gray-800 text-white"
                                    >
                                        <option value="0">Room 0</option>
                                        <option value="1">Room 1</option>
                                        <option value="2">Room 2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className='stayUsSection'>
                            <img src={heroImage} className='h-56 w-full' alt='bg' />
                            <div className='dark-gray-background p-2 text-white'>
                                <h5 className=" text-white text-center subheading" style={{ fontSize: '18px' }}>YOUR RESERVATION</h5>
                                <hr className='my-3 border-t border-dashed' />
                                <div className='flex flex-col px-3'>
                                    <div className='flex flex-row justify-between'>
                                        <p>CheckIn</p>
                                        <p>18 Nov 2024</p>
                                    </div>
                                    <div className='flex flex-row justify-between'>
                                        <p>CheckOut</p>
                                        <p>18 Nov 2024</p>
                                    </div>
                                    <div className='flex flex-row justify-between'>
                                        <p>Stay</p>
                                        <p>1 Night, 2 Rooms, 2 Adults</p>
                                    </div>
                                </div>
                                <hr className='my-3 border-t border-dashed' />
                                <Link to='/checkout'><button className='mt-1 w-full bg-white no-transform text-black'>Book Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------Ammenities------------- */}
            <section className="container-pink" id='hotelAmmenities'>
                <div className="container py-12">
                    <h2 className="text-lg text-start subheading">AMENTIES & FACILTIES</h2>
                    <h3 className="text-xl mt-2 pt-2 pb-12 text-start heading">
                        We Provide Best Room Facilities
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {amenities.map((amenity, index) => (
                            <div
                                key={index}
                                className=" cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 bg-white p-6 flex flex-col items-center text-center shadow-md rounded-md"
                            >
                                <div className="mb-4">{amenity.icon}</div>
                                <h4 className="text-md" style={{ fontWeight: "400", color: "#705e59" }}>
                                    {amenity.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ---------------Reviews------------- */}
            <section className="container py-12" id='hotelReviews'>
                <div className="">
                    <h2 className="text-lg text-center subheading">TESTIMONIAL</h2>
                    <h3 className="text-xl mt-2 pt-2 text-center heading">
                        What Client Says About Us
                    </h3>
                </div>
                <div className="relative">
                    <Swiper
                        slidesPerView={1}
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
