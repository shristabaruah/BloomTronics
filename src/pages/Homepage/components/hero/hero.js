import "./hero.css";
import { hero } from "../../../../assets/index";

const Hero = ()=>{
    return (
        <header className="hero-section">
        <div className="img-container">
         <img className="hero-img" src={hero} />
        <div className="content">
            <p className="sub-heading">THE BEST SELECTION OF QUALITY DEVICES</p>
            <h2 className="sub-header">QUALITY ELECTRONICS</h2>
            <h3>Smart Tech objects that will astound you</h3>
            <a href="#" className="product-link">
                <button className="btn default-outline shop-btn">SHOP NOW</button>
            </a>
        </div>
        <div className="overlay"></div>
    </div>
    </header>
    );
}
export { Hero };