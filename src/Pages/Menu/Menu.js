import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./Menu.css";
import ScrollButton from "../../Components/ScrollButton";
import carbonara1 from "../../Assets/carbonara1.jpg";
import margarita2 from "../../Assets/margarita2.jpg";
import lemonade3 from  "../../Assets/lemonade3.jpg";
import tiramisu4 from "../../Assets/tiramisu4.jpg";
import chicken5 from "../../Assets/chicken5.jpg";
import lamb6 from "../../Assets/lamb6.jpg";
import mojito7 from "../../Assets/mojito7.jpg";
import baklava8 from "../../Assets/baklava8.jpg";
import cake9 from "../../Assets/O_cake9.jpg";


const Menu = () => {
  const menuItems = [
    { id: 1, name: "Spaghetti Carbonara", category: "Dishes", price: "$12", pic:carbonara1, alt: "Pasta Carbonara", description: " A creamy pasta dish with crispy pancetta, eggs, and parmesan cheese."},
    { id: 2, name: "Margarita Pizza", category: "Dishes", price: "$10",pic:margarita2, alt: "Pizza Margarita", description:"A classic pizza topped with fresh tomatoes, mozzarella, and basil."},
    { id: 3, name: "Lemonade", category: "Drinks", price: "$3", pic:lemonade3, alt: "Lemonade", description:"A refreshing drink made from freshly squeezed lemons and a touch of sweetness." },
    { id: 4, name: "Tiramisu", category: "Desserts", price: "$6", pic:tiramisu4, alt: "Tiramisu", description:"A rich Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream." },
    { id: 5, name: "Grilled Lemon Herb Chicken", category: "Dishes", price: "$13", pic:chicken5, alt: "Grilled Lemon Herb Chicken", description:"Juicy chicken grilled with a zesty lemon and herb marinade." },
    { id: 6, name: "Mediterranean Lamb Chops", category: "Dishes", price: "$13", pic:lamb6, alt: "Mediterranean Lamb Chops", description:"Tender lamb chops seasoned with Mediterranean spices and herbs."},
    { id: 7, name: "Lemon Mojito Mocktail", category: "Drinks", price: "$4", pic:mojito7, alt:"Lemon Mojito Mocktail", description:"A bright, minty, non-alcoholic drink with a burst of lemon flavor."},
    { id: 8, name: "Baklava", category: "Desserts", price: "$5", pic:baklava8, alt:"Baklava", description:"A sweet pastry layered with nuts and soaked in a honey-based syrup." },
    { id: 9, name: "Olive Oil Cake with Lemon Glaze", category: "Desserts", price: "$5", pic:cake9, alt:"Olive Oil Cake with Lemon Glaze", description:" moist cake infused with olive oil and topped with a tangy lemon glaze."},
  ];

  const [filter, setFilter] = useState("All");

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredItems =
    filter === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  return (
    <div>
      <Header />
      <ScrollButton />
      <main>
        <h1 className="menu-title">Our Menu</h1>
        <div className="filter-buttons">
          {["All", "Dishes", "Drinks", "Desserts"].map((category) => (
            <button key={category} onClick={() => handleFilter(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="menu-list">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item">
              <img className="menu-item-image" src={item.pic} alt={item.alt}></img>
              <div className="menu-item-price">
              <h2>{item.name}</h2>
              <h2>{item.price}</h2>
              </div>
              <p className="menu-item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
