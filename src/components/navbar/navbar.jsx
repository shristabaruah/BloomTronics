import "./navbar.css"
import {logo} from "../../assets/index";
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return (<nav className="nav">
        <div className="nav-main">
            <div className="nav-logo">
                <Link to="/" className="logo-link">
                <img className="logo-img" src={logo}></img>
                <h1 className="nav-header">BloomTronics</h1>
                </Link>
            </div>
            <div className="nav-search">
            <input type="text" class="search-box" placeholder="Search"/>
            <button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="nav-items">
                <Link to="/signup" className="sign-in">
                <i className="fa-solid fa-circle-user"></i>
                </Link>
                <div className="icon cart-badge">
                    <Link to="/wishlist">
                        <i className="fa-solid fa-heart"></i>
                        <div className="notification-icon flex-center">
                            <span>3</span>
                        </div>   
                    </Link>
                </div> 
                <div className="icon cart-badge">
                    <Link to="/cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <div className="notification-icon flex-center">
                            <span>2</span>
                        </div>
                    </Link>
                </div>
                <div className="icon ">
                    <a href="#">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </a>
                </div>
            </div>
        </div>
        <ul class="links-container">
            <li className="link-item"><a href="#" className="link">TV's Audio , Video</a></li>
            <li className="link-item"><a href="#" className="link">Smartphone & Gadget</a></li>
            <li className="link-item"><a href="#" className="link">Computer & Laptops</a></li>
            <li className="link-item"><a href="#" className="link">Home Appliances</a></li>
            <li className="link-item"><a href="#" className="link">accessories</a></li>
        </ul>
    </nav>

    );
}

export {Navbar};