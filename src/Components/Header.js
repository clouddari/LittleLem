import companyLogo from "../Assets/Logo.svg";
import { HashLink as Link } from 'react-router-hash-link';

function Header(){
    return(
        <header className="header">
            <img className="logo" src={companyLogo} alt="Little Lemon Logo" height="90px"/>
            <nav className="navMenu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><Link to="/#about-us">About</Link></li>
                <li><a href="/Menu">Menu</a></li>
                <li><a href="/booking">Reservations</a></li>
                <li><a href="/LogIn">Login</a></li>
            </ul>
            </nav>
        </header>
    )
}

export default Header;

