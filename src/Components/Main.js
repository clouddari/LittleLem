import reservepic from "../Assets/restauranfood.jpg"
import greekSalad from "../Assets/greek salad.jpg"
import bruchetta from "../Assets/bruchetta.svg"
import lemonDes from "../Assets/lemon dessert.jpg"
import deliveryLogo from "../Assets/Delivery Logo.svg"
import testimonial1 from "../Assets/testimonial1.png"
import testimonial2 from "../Assets/testimonial2.png"
import testimonial3 from "../Assets/testimonial3.png"
import testimonial4 from "../Assets/testimonial4.png"
import chef2 from "../Assets/Mario and Adrian A.jpg"
import chef1 from "../Assets/Mario and Adrian b.jpg"

function Main (){

    return(
        <>
        <div className="reserveSection">
          <div className="col-1">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            <a href="/booking">Reserve a Table</a>
          </div>
          <div className="col-2">
            <img src={reservepic} alt="reserve a table section" />
          </div>
      </div>

      <div className="specials">
        <div className="logobutton">
            <h1>Specials</h1>
            <button>Online Menu</button>
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

      <div className="testimonials">
        <h1>Testimonials</h1>
        <div className="testimonials-cards-container">
        <div className="testimonials-card">
          <div className="test-col1">
          <div className="rating">
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
          </div>
          <img className="testimonial-img" src={testimonial1} alt="testimonial picture1" />
          </div>
          <div className="test-col2">
          <h3>Henry</h3>
          </div>
          <p>The flavors transported me straight to the Mediterranean. Simply delightful!</p>
        </div>
        <div className="testimonials-card">
         <div className="test-col1">
          <div className="rating">
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
          </div>
          <img className="testimonial-img" src={testimonial2} alt="testimonial picture1" />
          </div>
          <div className="test-col2">
          <h3>Anika</h3>
          </div>
          <p>Fresh ingredients, authentic dishes, and a cozy atmosphere. Loved it!</p>

        </div>
        <div className="testimonials-card">
        <div className="test-col1">
          <div className="rating">
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star"></span>
          </div>
          <img className="testimonial-img" src={testimonial3} alt="testimonial picture1" />
          </div>
          <div className="test-col2">
            <h3>Taylor</h3>
            </div>
            <p>Little Lemon is a hidden gem. The hummus and falafel are a must-try!</p>
        </div>
        <div className="testimonials-card">
        <div className="test-col1">
        <div className="rating">
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
           <span className="fa fa-star checked"></span>
        </div>
          <img  className="testimonial-img" src={testimonial4} alt="testimonial picture1" />
          </div>
          <div className="test-col2">
          <h3>Joanna</h3>
          </div>
          <p>Incredible food and warm hospitality. My new favorite spot!</p>
        </div>
        </div>
      </div>



    <div className="AboutUsMain">
       <div className="about-col-1">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Little Lemon was created by Adrian and Mario, two friends with a passion for fresh, flavorful food and warm hospitality. Adrian brings culinary expertise, while Mario ensures every guest feels at home. Together, they've made Little Lemon a place where great food and good company come together.</p>
       </div>
       <div className="about-col-2">
            <img className="chef1" src={chef1} alt="Paolo" />
            <img className="chef2" src={chef2} alt="Adrian" />
       </div>
    </div>
    </>
    )
}

export default Main;