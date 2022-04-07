import "./navbar.css";
import { logo } from "../../assets/index";
import { Link } from "react-router-dom";
import { useFilter } from "../../contexts/filter-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";

const Navbar = () => {
  const { wishlist } = useWishlist();
  const { Filterdispatch } = useFilter();
  const { cart } =useCart();

  const Smartphone = () => {
    Filterdispatch({
      type: "CATEGORY_FILTER",
      payload: {
        category: "Smartphone",
        isChecked: true,
      },
    });
  };
  const Television = () => {
    Filterdispatch({
      type: "CATEGORY_FILTER",
      payload: {
        category: "Television",
        isChecked: true,
      },
    });
  };
  const Laptop = () => {
    Filterdispatch({
      type: "CATEGORY_FILTER",
      payload: {
        category: "Laptop",
        isChecked: true,
      },
    });
  };
  const HomeAppliances = () => {
    Filterdispatch({
      type: "CATEGORY_FILTER",
      payload: {
        category: "HomeAppliances",
        isChecked: true,
      },
    });
  };

  return (
    <nav className="nav">
      <div className="nav-main">
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <img className="logo-img" src={logo} alt="logo"></img>
            <h1 className="nav-header">BloomTronics</h1>
          </Link>
        </div>
        <div className="nav-search">
          <input type="text" className="search-box" placeholder="Search" />
          <button className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="nav-items">
          <Link to="/signup" className="sign-in">
            <i className="fa-solid fa-circle-user"></i>
          </Link>
          <div className="icon cart-badge">
            <Link to="/wishlist">
              <i className="fa-solid fa-heart"></i>
              <div className="notification-icon flex-center">
                <span>{wishlist.length}</span>
              </div>
            </Link>
          </div>
          <div className="icon cart-badge">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <div className="notification-icon flex-center">
                <span>{cart.length}</span>
              </div>
            </Link>
          </div>
          <div className="icon ">
            <Link to="/login">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </Link>
          </div>
        </div>
      </div>
      <ul className="links-container">
        <li className="link-item">
          <Link to="/products" className="link" onClick={Television}>
            TV's Audio , Video
          </Link>
        </li>
        <li className="link-item">
          <Link to="/products" className="link" onClick={Smartphone}>
            Smartphone & Gadget
          </Link>
        </li>
        <li className="link-item">
          <Link to="/products" className="link" onClick={Laptop}>
            Computer & Laptops
          </Link>
        </li>
        <li className="link-item">
          <Link to="/products" className="link" onClick={HomeAppliances}>
            Home Appliances
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
