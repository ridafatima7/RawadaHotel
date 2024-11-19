import React from 'react';
import heroBackground from '../../assets/images/Roombg.png';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'
const Checkout = () => {
    return (
        <>
            {/* -----------------Hero Section------------------ */}
            <section
                className="bg-gray-800 text-white stayUsSection py-16 flex items-center justify-center"
                style={{
                    backgroundImage: `url(${heroBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '92vh',
                }}
                id="checkout"
            >
                <h3
                    className="text-2xl mt-3 md:text-5xl pt-2 heading font-bold"
                    style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        textTransform: 'uppercase',
                        fontWeight: '1000',
                    }}
                >
                    Checkout
                </h3>
            </section>
            {/* -----------------booking section------------------ */}
            <section className="container py-8">
                <div className="mb-6">
                    {/* Stepper */}
                    <div className="flex items-center mx-auto w-[65%] justify-between">
                        {/* Step 1 */}
                        <div className="flex items-center justify-center flex-col space-x-2">
                            <div className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full text-sm font-bold">
                                1
                            </div>
                            <p className="text-sm font-medium text-gray-800">Customer Information</p>
                        </div>
                        <div className="flex-1 h-1 bg-gray-300 w-11"></div>
                        {/* Step 2 */}
                        <div className="flex items-center flex-col space-x-2">
                            <div className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-sm font-bold">
                                2
                            </div>
                            <p className="text-sm font-medium text-gray-500">Booking Confirmed</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* ----Hotel Picture Column---- */}
                    <div className="flex flex-col border border-l h-96 border-gray-300 p-5">
                        <img
                            src={heroBackground}
                            alt="Hotel"
                            className="w-full mb-3 h-60"
                        />
                        <div className="flex flex-col space-y-1 text-start">
                            <p className="text-lg font-medium">Retaj al Rawada</p>
                            <p className="text-medium font-light">Madinnah</p>
                            <span className="text-yellow-500 flex">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </span>
                            {/* Rating */}
                            <p className="text-xs text-gray-800">
                                4.8 (1064 reviews)
                            </p>
                        </div>
                    </div>
                    {/* -----Booking Form Column -----*/}
                    <div className="bg-white p-5 border border-l border-gray-300 ">
                        <h2 className="text-xl font-medium text-gray-800">Booking Details</h2>
                        <div className='py-4 px-2'>
                            <p className='mb-3 text-lg font-normal'>Your Trip</p>
                            <div className='flex flex-row justify-between'>
                                <p className='textSmall'>CheckIn</p>
                                <p className='textSmall'>18 Nov 2024</p>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <p className='textSmall'>CheckOut</p>
                                <p className='textSmall'>18 Nov 2024</p>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <p className='textSmall'>Stay</p>
                                <p className='textSmall'>1 Night, 2 Rooms, 2 Adults</p>
                            </div>
                            <hr className='my-3 border-t border-dashed' />
                            <p className='my-3 text-lg font-normal'>Price Details</p>
                            <div className='flex flex-row justify-between'>
                                <p className='textSmall'>1 Night, 2 Rooms ,2 Adults</p>
                                <p className='textSmall'>SAR 80000</p>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <p className='textSmall'>Tax</p>
                                <p className='textSmall'>SAR 2000</p>
                            </div>
                            <hr className='my-3 border-t border-dashed' />
                            <div className='flex flex-row justify-between'>
                                <p className='text-lg font-normal'>Total</p>
                                <p className='text-xl '>SAR 82000</p>
                            </div>
                        </div>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="fullName" className="textSmall block text-sm font-medium mb-1">
                                    Full Name*
                                </label>
                                <input
                                    id="fullName"
                                    type="text"
                                    className="w-full border border-gray-300 outline-none p-2"
                                    placeholder="Enter your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="textSmall block text-sm font-medium mb-1">
                                    Email*
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full border border-gray-300 outline-none p-2"
                                    placeholder="Enter your Email"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="checkIn" className="textSmall block text-sm font-medium mb-1">
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        type="text"
                                        placeholder='Enter your PhoneNo'
                                        className="w-full border border-gray-300 outline-none p-2"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="checkOut" className=" textSmall block text-sm font-medium mb-1">
                                        City
                                    </label>
                                    <input
                                        id="city"
                                        placeholder='Enter your City'
                                        type="text"
                                        className="w-full border border-gray-300 outline-none p-2"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center mt-2">
                                <input
                                    id="creditCard"
                                    type="checkbox"
                                    className="h-4 w-4 text-gray-800 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="creditCard" className="ml-2 text-sm font-medium text-gray-700">
                                    We’ll send your confirmation to this email address.
                                    By processing with this booking, I am agreeing to al-mokhtara <span className='text-red-400'>Terms & conditions</span>
                                </label>
                            </div>
                            <Link to="/confirmBooking" ><button
                                type="submit"
                                className="w-full mt-4 no-transform bg-black  text-white py-2"
                            >
                                Confirm Booking
                            </button></Link>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Checkout
export const ConfirmBooking = () => {
    return (
        <>
            {/* -----------------Hero Section------------------ */}
            <section
                className="bg-gray-800 text-white stayUsSection py-16 flex items-center justify-center"
                style={{
                    backgroundImage: `url(${heroBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '95vh',
                }}
                id="checkout"
            >
                <h3
                    className="text-2xl mt-3 md:text-5xl pt-2 heading font-bold"
                    style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        textTransform: 'uppercase',
                        fontWeight: '1000',
                    }}
                >
                    Checkout
                </h3>
            </section>
            {/* -----------------booking section------------------ */}
            <section className="container py-8">
                <div className="mb-6">
                    {/* Stepper */}
                    <div className="flex items-center mx-auto w-[65%] justify-between">
                        {/* Step 1 */}
                        <div className="flex items-center justify-center flex-col space-x-2">
                            <div className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full text-sm font-bold">
                                1
                            </div>
                            <p className="text-sm font-medium text-gray-800">Customer Information</p>
                        </div>
                        <div className="flex-1 h-1 bg-gray-300 w-11"></div>
                        {/* Step 2 */}
                        <div className="flex items-center flex-col space-x-2">
                            <div className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-sm font-bold">
                                2
                            </div>
                            <p className="text-sm font-medium text-gray-500">Booking Confirmed</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* ----Hotel Picture Column---- */}
                    <div className="flex flex-col border border-l h-96 border-gray-300 p-5">
                        <img
                            src={heroBackground}
                            alt="Hotel"
                            className="w-full mb-3 h-60"
                        />
                        <div className="flex flex-col space-y-1 text-start">
                            <p className="text-lg font-medium">Retaj al Rawada</p>
                            <p className="text-medium font-light">Madinnah</p>
                            <span className="text-yellow-500 flex">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </span>
                            {/* Rating */}
                            <p className="text-xs text-gray-800">
                                4.8 (1064 reviews)
                            </p>
                        </div>
                    </div>
                    {/* -----Booking Form Column -----*/}
                    <div className="bg-white p-5 border border-l border-gray-300 ">
                        <h2 className="text-sm text-left font-montserrat font-light tracking-[.25em] ">CONGRATULATION !</h2>
                        <h2 className="text-xl font-medium text-gray-800">Your Room has been booked!</h2>
                        <div className='py-4 px-2'>
                            <p className='mb-3 text-lg font-normal'>Your Trip</p>
                            <div className='flex flex-row justify-between'>
                                <p className='textSmall'>CheckIn</p>
                                <p className='textSmall'>18 Nov 2024</p>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <p className='textSmall'>CheckOut</p>
                                <p className='textSmall'>18 Nov 2024</p>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <p className='textSmall'>Stay</p>
                                <p className='textSmall'>1 Night, 2 Rooms, 2 Adults</p>
                            </div>
                            <hr className='my-3 border-t border-dashed' />
                            <p className='my-3 text-lg font-normal'>Price Details</p>
                            <div className='flex flex-row justify-between'>
                                <p className='textSmall'>1 Night, 2 Rooms ,2 Adults</p>
                                <p className='textSmall'>SAR 80000</p>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <p className='textSmall'>Tax</p>
                                <p className='textSmall'>SAR 2000</p>
                            </div>
                            <hr className='my-3 border-t border-dashed' />
                            <div className='flex flex-row justify-between'>
                                <p className='text-lg font-normal'>Total</p>
                                <p className='text-xl '>SAR 82000</p>
                            </div>
                        </div>
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link to='/'><div>
                                <button
                                    type="submit"
                                    className="w-full no-transform bg-black  text-white py-2"
                                >
                                    Go to HomePage
                                </button>
                            </div></Link>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full no-transform bg-white text-black py-2"
                                    style={{ border: "1px solid black" }}
                                >
                                    Download Receipt
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

