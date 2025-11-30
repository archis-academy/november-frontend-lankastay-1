import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from './pages/home/home';
import { Details } from './pages/details/details';
import "@/main.scss";
import Playground from './pages/playground';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground/>} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
