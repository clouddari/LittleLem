import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import React from 'react';
import Home from "./Pages/Home";
import Booking from "./Pages/BookingPage";
import NoPage from './Pages/NoPage';
import BookingConfirmation from './Components/BookingConfirmation';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element= {<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
