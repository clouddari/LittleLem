import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from "./Pages/Home";
import Booking from "./Pages/BookingPage";
import NoPage from './Pages/NoPage';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element= {<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
