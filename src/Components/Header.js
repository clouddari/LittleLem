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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#about-us">About</Link></li>
                <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/LogIn">Login</Link></li>
            </ul>
            </nav>
        </header>
    )
}

export default Header;

