import BookingForm from "./BookTableForm";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./ReservationConfirmation.css";


function BookingPage (){
   return(
      <div className="booking">
      <Header />
      <BookingForm />
      <Footer />
      </div>
   )
}

export default BookingPage;