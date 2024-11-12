import { Routes, Route } from 'react-router-dom';
import Rooms from './HomePage/Rooms';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Rooms />} />
    </Routes>
  );
};

export default AppRoutes;
