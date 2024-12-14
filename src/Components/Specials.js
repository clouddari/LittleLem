import chicken from "../Assets/chicken5.jpg"
import baklava from "../Assets/baklava8.jpg"
import margarita from "../Assets/margarita2.jpg"
import deliveryLogo from "../Assets/Delivery Logo.svg"
import "./Specials.css"

function Specials (){
  const SpeacialCards = [
    { id: 11,
       title: "Greek Salad",
      price: "$12.99",
      pic:chicken,
      alt: "Greek Salad",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    { id: 22,
      title: "Bruchetta",
      price: "$5.99",
      pic:margarita,
      alt: "bruchetta",
      description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    { id: 33,
      title: "Lemon Dessert",
      price: "$5",
      pic:baklava,
      alt: "Lemon Dessert",
      description:"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
     },
  ];

    return(
        <>
         <div className="specials">
        <div className="logobutton">
            <h1>Specials</h1>
            <a href="/Menu">Online Menu</a>
        </div>

        <div className="product-section">
        {SpeacialCards.map((card) =>(
		       <div key={card.id} className="card">
             <img className="cardImage" src={card.pic} alt={card.alt}></img>
          <div className="title-price">
            <h2 className="cardTitle">{card.title}</h2>
            <span className="cardPrice">{card.price}</span>
         </div>

         <p className="cardDescription">{card.description}</p>
             <div className="button-logo">
             <a aria-label="Button-Link to order delivery" href="#" className="card-button">Order a delivery</a>
             <img src={deliveryLogo} alt="delivery logo"/>
             </div>
          </div>
           ))}
        </div>
        </div>
        </>
    );
};

export default Specials;