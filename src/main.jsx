import "@/main.scss";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from './pages/home/home';
import Playground from './pages/playground';
import { Details } from './pages/HotelDetail';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground/>} />
        <Route path="/hotel/:id" element={<Details/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
