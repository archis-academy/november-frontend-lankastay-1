import "@/main.scss";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import Playground from './pages/playground';
import HotelDetail from './pages/HotelDetail';
import Breadcrumb from './Components/Breadcrumb/breadcrumb';
import Login from './Components/Login/Login';
import RegisterAdmin from './pages/RegisterAdmin/RegisterAdmin';
import Dashboard from './pages/Dashboard';
import SuccesPage from './pages/SuccesRegister/SuccesPage';
import PaymentPage from './pages/PaymentPage/index';

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
        <Route path='/payment/:id' element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
