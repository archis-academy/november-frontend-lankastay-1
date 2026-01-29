import '@/main.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import HotelDetail from './pages/HotelDetail';
import Login from './Components/Login/Login';
import RegisterAdmin from './pages/RegisterAdmin/RegisterAdmin';
import Dashboard from './pages/Dashboard';
import SuccesPage from './pages/SuccesRegister/SuccesPage';
import DashboardLayout from './pages/DashboardLayout/DashboardLayout.jsx';
import Setting from './pages/Settings/Setting.jsx';
import Messages from './pages/Message/Message.jsx';
import Booking from './pages/Bookings/Booking.jsx';
import Help from './pages/Help/Help.jsx';
import Refund from './pages/Refunds/Refund.jsx';
import Objectives from './pages/Objectives/Objectives.jsx';
import BookingPage from './pages/BookingPage/index';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={<Login dataType={'loginAccount'} dataTypeDetail={'loginAccountDetail'} />}
        ></Route>
        <Route
          path='/register'
          element={
            <Login dataType={'createAccountUser'} dataTypeDetail={'registerAccountDetail'} />
          }
        ></Route>
        <Route path='/hotel-detail/:id' element={<HotelDetail />} />
        <Route path='/booking/:id' element={<BookingPage />} />
        <Route path='/success-register' element={<SuccesPage />}></Route>
        <Route path='/admin-register' element={<RegisterAdmin />}></Route>
        <Route element={<DashboardLayout />}>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/setting' element={<Setting />}></Route>
          <Route path='/messages' element={<Messages />}></Route>
          <Route path='/bookings' element={<Booking />}></Route>
          <Route path='/help' element={<Help />}></Route>
          <Route path='/refunds' element={<Refund />}></Route>
          <Route path='/objectives' element={<Objectives />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
