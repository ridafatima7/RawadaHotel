import { Routes, Route } from 'react-router-dom';
import LandingPage from './HomePage/LandingPage';
import HotelRooms from './HotelDetails/HotelRooms';
import Checkout, { ConfirmBooking } from './HotelDetails/Checkout';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/rooms" element={<HotelRooms />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirmBooking" element={<ConfirmBooking />} />
    </Routes>
  );
};

export default AppRoutes;
