import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from './pages/home/home';
import "@/main.scss";
import Playground from './pages/playground';
import HotelDetail from './pages/HotelDetail';
import Breadcrumb from './Components/Breadcrumb/breadcrumb';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground/>} />
        <Route path="/hotel-detail/:id" element={<HotelDetail/>} />
        <Route path="/breadcrumb/:id" element={<Breadcrumb/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
