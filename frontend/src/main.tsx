import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './Pages/App';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Experiences from './Pages/Experiences'
import Achievements from './Pages/Achievements';
import Projects from './Pages/Projects';

import NotFound from './ErrorPage/NotFound';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Experiences" element={<Experiences />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);