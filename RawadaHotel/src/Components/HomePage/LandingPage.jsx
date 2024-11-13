import React from 'react';
import HomeAboutUs from './HomeAboutUs';
import Rooms from './Rooms';
import StaywithUs from './StaywithUs';
import Services from './Services';
import Reviews from './Reviews';

const LandingPage = () => {
  return (
   <section>
     <HomeAboutUs />
     <Services />
     <Rooms />
     <StaywithUs />
     <Reviews />
   </section>
  )
}

export default LandingPage
