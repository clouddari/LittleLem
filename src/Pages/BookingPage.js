import BookingForm from "../Components/BookTableForm ";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../App.css";


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