import { Routes, Route } from 'react-router-dom';
import LandingPage from './HomePage/LandingPage';
import HotelRooms from './HotelDetails/HotelRooms';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/rooms" element={<HotelRooms />} />
    </Routes>
  );
};

export default AppRoutes;
