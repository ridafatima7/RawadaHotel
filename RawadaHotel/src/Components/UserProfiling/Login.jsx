import React from 'react';
import heroImage from '../../assets/images/Background.png';

const LoginSignup = () => {
  return (
    <section className="container mx-auto mt-32 py-12" id='loginSignup'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Left Column - Form */}
        <div className="bg-white p-8 shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">SignUp</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="fullName" className="textSmall block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                className="w-full border border-gray-300 p-2 outline-none"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="textSmall block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 p-2 outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="city" className="textSmall block text-sm font-medium mb-1">
                City
              </label>
              <input
                id="city"
                type="text"
                className="w-full border border-gray-300  p-2 outline-none"
                placeholder="Enter your city"
              />
            </div>
            <div>
              <label htmlFor="phone" className="textSmall block text-sm font-medium mb-1">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                className="w-full border border-gray-300  p-2 outline-none"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="password" className="textSmall block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full border border-gray-300  p-2 outline-none"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="textSmall block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full border border-gray-300  p-2 outline-none"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2"
            >
              Create Account
            </button>
            <p className='textSmall text-center mt-[-2px]'>Already have an Account ? <span className='text-blue-400'>Login</span></p>
          </form>
        </div>

        {/* Right Column - Image */}
        <div className=" h-full">
          <img
            src={heroImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;
