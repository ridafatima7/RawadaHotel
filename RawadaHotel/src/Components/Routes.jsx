import { Routes, Route } from 'react-router-dom';
import LandingPage from './HomePage/LandingPage';
import HotelRooms from './HotelDetails/HotelRooms';
import Checkout, { ConfirmBooking } from './HotelDetails/Checkout';
import LoginSignup from './UserProfiling/Login';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/rooms" element={<HotelRooms />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirmBooking" element={<ConfirmBooking />} />
      <Route path="/login" element={<LoginSignup />} />
    </Routes>
  );
};

export default AppRoutes;
