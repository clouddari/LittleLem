import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import React from 'react';
import Home from "./Pages/Home";
import Booking from "./Pages/BookingPage";
import NoPage from './Pages/NoPage';
import BookingConfirmation from './Pages/BookingConfirmation';
import Login from './Pages/Login/Login';
import Menu from './Pages/Menu/Menu';


/* finish all clickable elements */
/*link all  buttons to sth - make it logical*/
//finish styling
//accessibility
//responsive design
//double check for best prectices

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element= {<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
