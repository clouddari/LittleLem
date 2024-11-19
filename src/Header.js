import companyLogo from "./Logo.png"

function Header(){
    return(
        <header className="header">
            <img src={companyLogo} alt="Little Lemon Logo" height="90px"/>
            <nav className="navMenu">
            <ul>
                <li><a href="#">Menu</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">News</a></li>
            </ul>

            </nav>
        </header>
    )
}

export default Header;

