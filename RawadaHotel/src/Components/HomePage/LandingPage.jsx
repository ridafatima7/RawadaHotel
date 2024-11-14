import React from 'react';
import HomeAboutUs from './HomeAboutUs';
import Rooms from './Rooms';
import StaywithUs from './StaywithUs';
import Services from './Services';
import Reviews from './Reviews';
import HeroSection from './HeroSection';
import Attractions from './Attractions';
import Ammenities from './Ammenities';

const LandingPage = () => {
  return (
   <section>
     <HeroSection />
     <HomeAboutUs />
     <Services />
     <Rooms />
     <Ammenities />
     <Attractions />
     <StaywithUs />
     <Reviews />
   </section>
  )
}

export default LandingPage
