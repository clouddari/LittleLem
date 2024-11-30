import BookingForm from "../Components/BookingForm";
import Header from "../Components/Header";
import "../App.css";


function BookingPage (){
   return(
      <div className="booking">
      <Header />
      <BookingForm />
      </div>
   )
}

export default BookingPage;