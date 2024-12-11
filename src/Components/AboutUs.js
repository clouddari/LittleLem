import "./AboutUs.css";
import chef2 from "../Assets/Mario and Adrian A.jpg"
import chef1 from "../Assets/Mario and Adrian b.jpg"

function AboutUs (){

    return(
        <section id="about-us">
    <div className="AboutUsMain">
       <div className="about-col-1">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Little Lemon was created by Adrian and Mario, two friends with a passion for fresh, flavorful food and warm hospitality. Adrian brings culinary expertise, while Mario ensures every guest feels at home. Together, they've made Little Lemon a place where great food and good company come together.</p>
       </div>
       <div className="about-col-2">
            <img className="chef1" src={chef1} alt="Paolo" />
            <img className="chef2" src={chef2} alt="Adrian" />
       </div>
    </div>
    </section>
    )
}

export default AboutUs;