import "./navbar.css"
import {logo} from "../../assets/index";
const Navbar = ()=>{
    return (<nav className="nav">
        <div className="nav-main">
            <div className="nav-logo">
                <a href="#" className="logo-link">
                <img className="logo-img" src={logo}></img>
                <h1 className="nav-header">BloomTronics</h1>
                </a>
            </div>
            <div className="nav-search">
            <input type="text" class="search-box" placeholder="Search"/>
            <button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="nav-items">
                <a href="#" className="sign-in">
                <i className="fa-solid fa-circle-user"></i>
                </a>
                <div className="icon cart-badge">
                    <a href="#">
                        <i className="fa-solid fa-heart"></i>
                        <div className="notification-icon flex-center">
                            <span>3</span>
                        </div>   
                    </a>
                </div> 
                <div className="icon cart-badge">
                    <a href="#">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <div className="notification-icon flex-center">
                            <span>2</span>
                        </div>
                    </a>
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