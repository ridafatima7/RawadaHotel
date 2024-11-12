import React from 'react'
import HomeAboutUs from './HomeAboutUs'
import Rooms from './Rooms'
import StaywithUs from './StaywithUs'
import Services from './Services'

const LandingPage = () => {
  return (
   <section>
     <HomeAboutUs />
     <Services />
     <Rooms />
     <StaywithUs />
   </section>
  )
}

export default LandingPage
