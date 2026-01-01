import "@/main.scss";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { Home } from './pages/home/home';
import Playground from './pages/playground';
import HotelDetail from './pages/HotelDetail';
import Breadcrumb from './Components/Breadcrumb/breadcrumb';
import Login from './Components/Login/Login';
import RegisterAdmin from './pages/RegisterAdmin/RegisterAdmin';
import Dashboard from './pages/Dashboard';
import SuccesPage from './pages/SuccesRegister/SuccesPage';
import SummaryPage from "./pages/SummaryPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import Setting from './pages/Settings/Setting';
import Messages from './pages/Message/Message';
import Booking from './pages/Bookings/Booking';
import Help from './pages/Help/Help';
import Refund from './pages/Refunds/Refund';
import Objectives from './pages/Objectives/Objectives';
import DashboardSidebar from './Components/dashboardSidebar/DashboardSidebar';
import DashboardLayout from "./pages/DashboardLayout/DashboardLayout";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/playground' element={<Playground />} />
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
        <Route path='/admin-register' element={<RegisterAdmin />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/hotel-detail/:id' element={<HotelDetail />} />
        <Route path='/breadcrumb/:id' element={<Breadcrumb />} />
        <Route path='/success-register' element={<SuccesPage />}></Route>
        <Route path='/summary/:id' element={<SummaryPage />}></Route>
        <Route path='/booking-page/:id' element={<BookingPage />} />

        <Route element={<DashboardLayout  /> }>
          <Route path='/Dashboard' element={<Dashboard />}></Route>
          <Route path='/Setting' element={<Setting />}></Route>
          <Route path='/Messages' element={<Messages />}></Route>
          <Route path='/Bookings' element={<Booking/>} ></Route>
          <Route path='/Help' element={<Help/>}></Route>
          <Route path='/Refunds' element={<Refund/>}></Route>
          <Route path='/Objectives' element={<Objectives/>}></Route>
        </Route>
      
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
