import testimonial1 from "../Assets/testimonial1.png"
import testimonial2 from "../Assets/testimonial2.png"
import testimonial3 from "../Assets/testimonial3.png"
import testimonial4 from "../Assets/testimonial4.png"


export default function Testimonials (){
    return(
        <>
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
        </>
    )
}