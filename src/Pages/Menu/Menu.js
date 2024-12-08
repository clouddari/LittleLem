import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./Menu.css";

const Menu = () => {
  const menuItems = [
    { id: 1, name: "Spaghetti Carbonara", category: "Dishes", price: "$12" },
    { id: 2, name: "Margarita Pizza", category: "Dishes", price: "$10" },
    { id: 3, name: "Lemonade", category: "Drinks", price: "$3" },
    { id: 4, name: "Tiramisu", category: "Desserts", price: "$6" },
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
      <main>
        <h1>Menu</h1>
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
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
