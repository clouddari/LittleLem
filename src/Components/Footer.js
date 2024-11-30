import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';




function Footer(){
    return(
        <footer className="footer">
			<div className="row">
				<div className="footer-col">
					<h4>Company</h4>
					<ul>
						<li><a href="#">About us</a></li>
						<li><a href="#">Our Services</a></li>
						<li><a href="#">Affiliate Program</a></li>
						<li><a href="#">Privacy</a></li>
					</ul>
				</div>
				<div className="footer-col">
				<h4>Get Help</h4>
					<ul>
						<li><a href="#">FAQ</a></li>
						<li><a href="#">Shipping</a></li>
						<li><a href="#">Returns</a></li>
						<li><a href="#">Order Status</a></li>
						<li><a href="#">Payment Options</a></li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>Online shop</h4>
					<ul>
						<li><a href="#">Croissants</a></li>
						<li><a href="#">Pastries</a></li>
						<li><a href="#">Breads</a></li>
						<li><a href="#">Specialty Items</a></li>
						<li><a href="#">Cookies and Biscuits</a></li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>Folow us</h4>
					<div className="social-links">
						<li><a href="#"><FontAwesomeIcon icon={faApple} /></a></li>
						<li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
						<li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
					</div>
				</div>
			</div>
		</footer>


    )
};


export default Footer;