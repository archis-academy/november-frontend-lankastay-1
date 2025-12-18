import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import '@/main.scss';
import Playground from './pages/playground';
import HotelDetail from './pages/HotelDetail/index';
import Breadcrumb from './Components/Breadcrumb/Breadcrumb';
import Login from './Components/Login/Login';
import RegisterAdmin from './pages/RegisterAdmin/RegisterAdmin';
import SummaryPage from './pages/SummaryPage/index';

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
          element={<Login dataType={'createAccountUser'} dataTypeDetail={'registerAccountDetail'} />}
        ></Route>
        <Route path='/admin-register' element={<RegisterAdmin />}></Route>
        <Route path="/hotel-detail/:id" element={<HotelDetail/>} />
        <Route path="/breadcrumb/:id" element={<Breadcrumb/>} />
        <Route path='/summary' element={<SummaryPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
