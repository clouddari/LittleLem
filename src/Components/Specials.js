import greekSalad from "../Assets/greek salad.jpg"
import bruchetta from "../Assets/bruchetta.svg"
import lemonDes from "../Assets/lemon dessert.jpg"
import deliveryLogo from "../Assets/Delivery Logo.svg"

function Specials (){
    return(
        <>
         <div className="specials">
        <div className="logobutton">
            <h1>Specials</h1>
            <a href="/Menu">Online Menu</a>
        </div>

        <div className="product-section">
		    <div className="card">
			  <img className="cardImage" src={greekSalad} alt="Greek Salad"/>
                 <div className="title-price">
              <h3 className="cardTitle">Greek Salad</h3>
              <span className="cardPrice">$12.99</span>
                </div>
			  <p className="cardDescription">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
              <div className="button-logo">
             <a href="#" className="card-button">Order a delivery</a>
             <img src={deliveryLogo} alt="delivery logo"/>
             </div>
		     </div>

		    <div className="card">
			 <img className="cardImage" src={bruchetta} alt="bruchetta" />
                <div className="title-price">
			 <h3 className="cardTitle">Bruchetta</h3>
             <span className="cardPrice">$5.99</span>
                </div>
			 <p className="cardDescription">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
             <div className="button-logo">
             <a href="#" className="card-button">Order a delivery</a>
             <img src={deliveryLogo} alt="delivery logo"/>
             </div>
		    </div>

		    <div className="card">
			 <img className="cardImage" src={lemonDes} alt="Lemon Dessert"/>
                <div className="title-price">
             <h3 className="cardTitle">Lemon Dessert</h3>
             <span className="cardPrice">$5.00</span>
               </div>
			 <p className="cardDescription">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
             <div className="button-logo">
             <a href="#" className="card-button">Order a delivery</a>
             <img src={deliveryLogo} alt="delivery logo"/>
             </div>
		    </div>
	    </div>
      </div>
        </>
    )
}

export default Specials;