import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import logoS from "../../Assets/logo-single.png";
import "./ReservationConfirmation.css";
import { useLocation } from 'react-router';

 const BookingConfirmation = () => {
    const location = useLocation();
    const bookingDetails = location.state;
if (!bookingDetails){
    return<p>loading...</p>
}

    return(
        <>
        <Header />
        <div className="b-confirmation">
            <div className="confirmation-logo">
                <img src={logoS} alt="lemon logo"/>
            </div>
                <h1 className="confirmation-title">Booking Confirmed!</h1>
            <div className="confirmation-text">
                <h3>We are pleased to inform you that your reservation request has been received and confirmed!</h3>
                <h2>Thank you!</h2>
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