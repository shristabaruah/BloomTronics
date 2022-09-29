import "./navbar.css";
import { logo } from "../../assets/index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFilter } from "../../contexts/filter-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";
import { useAuth } from "../../contexts/auth-context";
import { toast } from "react-toastify";
import { useState } from "react";

const Navbar = ({ setSearchInput }) => {
  const { wishlist } = useWishlist();
  const { Filterdispatch } = useFilter();
  const { cart } = useCart();
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const location = useLocation();
  const [searchBtn, setSearchBtn] = useState("");

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    toast.success("You Logged out");
  };

  const userHandler = (type) => {
    type === "Login" ? navigate("/login") : logoutHandler();
  };

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
  const searchInputHandler = (searchBtn) => {
    setSearchInput(searchBtn);
    setSearchBtn("");
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
        {location.pathname === "/products" && (
          <div className="nav-search">
            <input
              type="search"
              className="search-box"
              placeholder="Search"
              onChange={(e) => setSearchBtn(e.target.value)}
              value={searchBtn}
            />
            <button
              className="search-btn"
              onClick={() => searchInputHandler(searchBtn)}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        )}
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
          <div className="icon " onClick={userHandler}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </div>
        </div>
      </div>
      <ul className="links-container">
        <li className="link-item">
          <Link to="/products" className="link" onClick={Television}>
            Television
          </Link>
        </li>
        <li className="link-item">
          <Link to="/products" className="link" onClick={Smartphone}>
            Smartphone
          </Link>
        </li>
        <li className="link-item">
          <Link to="/products" className="link" onClick={Laptop}>
            Laptops
          </Link>
        </li>
        <li className="link-item">
          <Link to="/products" className="link" onClick={HomeAppliances}>
            Appliances
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
