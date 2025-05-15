import reservepic from "../Assets/restauranfood.webp"
import "./ReserveSection.css"

function ReserveATable () {
    return(
        <>
        <div className="reserveSection">
          <div className="col-1">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            <a aria-label="Button-Link Reserve a Table Page" href="/booking">Reserve a Table</a>
          </div>
          <div className="col-2">
            <img src={reservepic} alt="reserve a table section" />
          </div>
      </div>
      </>
    );
};

export default ReserveATable;