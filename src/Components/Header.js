import companyLogo from "../Assets/Logo.svg";
import { HashLink as Link } from 'react-router-hash-link';
import "./Header.css";
import { useState } from "react";



function Header(){
    const [menuOpen, setMenuOpen]=useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <header className="header">
            <nav className="navMenu">
            <img className="logo" src={companyLogo} alt="Little Lemon Logo" height="90px"/>
            <button class="menu-toggle" onClick={toggleMenu}>☰</button>

            <ul className={menuOpen ? "open": ""}>
                <li aria-label="Button-Link to the Home Page"><Link to="/">Home</Link></li>
                <li aria-label="Button-Link to the About Us Section"><Link to="/#about-us">About</Link></li>
                <li aria-label="Button-Link to the Menu Page"><Link to="/Menu">Menu</Link></li>
                <li aria-label="Button-Link to the Booking a Table Page"><Link to="/booking">Reservations</Link></li>
                <li aria-label="Button-Link to the Log In Page"><Link to="/LogIn">Login</Link></li>
            </ul>
            </nav>
        </header>
    )
}

export default Header;

