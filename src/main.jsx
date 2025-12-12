import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import '@/main.scss';
import Playground from './pages/playground';
import Login from './Components/Login/Login';
import RegisterAdmin from './pages/RegisterAdmin/RegisterAdmin';

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
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
