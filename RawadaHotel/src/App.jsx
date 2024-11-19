import React,{ useState } from 'react'
import './App.css'
import AppRoutes from './Components/Routes'
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/NavbarFooter/Footer';
import Navbar from './Components/NavbarFooter/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  )
}

export default App