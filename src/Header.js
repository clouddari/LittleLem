import companyLogo from "./Logo.svg";
import main from "./Main";

function Header(){
    return(
        <header className="header">
            <img className="logo" src={companyLogo} alt="Little Lemon Logo" height="90px"/>
            <nav className="navMenu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#testimonials">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>

            </nav>
        </header>
    )
}

export default Header;

