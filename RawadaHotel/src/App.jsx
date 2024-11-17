import React,{ useState } from 'react'
import './App.css'
import AppRoutes from './Components/Routes'
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/NavbarFooter/Footer';
import Navbar from './Components/NavbarFooter/Navbar';
import { motion, useAnimation } from 'framer-motion';

function App() {
  const controls = useAnimation();

  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  )
}

export default App