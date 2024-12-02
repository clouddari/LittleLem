import Header from "./Header";
import Footer from "./Footer";
import logoS from "../Assets/logo-single.png"
import "../App.css";
import { useLocation } from 'react-router-dom';



 const BookingConfirmation = () => {
    const location = useLocation();
    const bookingDetails = location.state;
    return(
        <>
        <Header />
        <div className="bookingConfirmation">
            <div className="confirmation-logo">
                <img src={logoS} alt="lemon logo"/>
            </div>
            <div className="confirmation-title">
                <h1>Booking Confirmed!</h1>
            </div>
            <div className="confirmation-text">
                <h3>We are pleased to inform you that your reservation request has been received and confirmed!</h3>
                <h3>Thank you!</h3>
            </div>

            <div className="booking-confirmation-details">
                 <h1>Booking Details</h1>
                 <div className="booking-conf-columns">
                 <div className="booking-confirmation-col1">
                 <h3>Name:</h3>
                 <p>{bookingDetails.name}</p>
                 <h3>Contact Information:</h3>
                 <p>{bookingDetails.phone}</p>
                 <p>{bookingDetails.email}</p>
                </div>

                <div className="booking-confirmation-col2">
                <h3>Booking Details:</h3>
                <p>{bookingDetails.date} </p>
                <p>Time: {bookingDetails.time}  </p>
                <p>Guests: {bookingDetails.guests} </p>
                <p>Occasion: {bookingDetails.occasion}</p>
                </div>
                </div>

         </div>
         </div>
        <Footer />
        </>
        );
        };




export default BookingConfirmation;