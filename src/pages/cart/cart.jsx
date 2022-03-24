import "./cart.css";
import { RedHeadphone, mobile } from "../../assets/index";
import { CartCard } from "./component/cart-card";

const Cart = () => {
  return (
    <div className="cart-wrapper">
      <h2 className="flex-center">My Cart</h2>
      <div className="cart">
        <div className="cart-main">
          
          <CartCard 
          cardImage={RedHeadphone}
          cardTitle={"Red Headphone"}
          cardDescp={"Master & Dynamic"}
          cardPriceBefore={"2999"}
          cardPrice={"14999"}
          cardDiscount={"50"}
          />

          <CartCard 
          cardImage={mobile}
          cardTitle={"Red Headphone"}
          cardDescp={"Master & Dynamic"}
          cardPriceBefore={"2999"}
          cardPrice={"14999"}
          cardDiscount={"50"}
          />
        </div>
        <div className="order-summary">
          <div className="coupon">
            <h3>COUPONS</h3>
            <div className="apply-coupon">
              <p>
                <i className="fa-solid fa-tags"></i> Apply Coupon
              </p>
              <button className="btn primary-outline apply">APPLY</button>
            </div>
          </div>
          <div className="price-details">
            <h3>PRICE DETAILS</h3>
          </div>
          <div className="price-calculate">
            <li>
              <ul>
                <p>Total MRP</p>
                <p>
                  <i className="fa-solid fa-indian-rupee-sign"></i>5998
                </p>
              </ul>
              <ul>
                <p> Discount on MRP</p>
                <p>
                  <i className="fa-solid fa-indian-rupee-sign"></i>3000
                </p>
              </ul>
              <ul>
                <p>Delivery charges</p>
                <p>FREE</p>
              </ul>
              <ul>
                <p>Coupon Discount</p>
                <p>
                  <i className="fa-solid fa-indian-rupee-sign"></i>0
                </p>
              </ul>
              <ul className="total">
                <h4>Total Amount</h4>
                <h4>
                  <i className="fa-solid fa-indian-rupee-sign"></i>2998
                </h4>
              </ul>
            </li>
          </div>
          <button className="btn primary-solid order">
            <a href="#">PLACE ORDER</a>
          </button>
        </div>
      </div>
    </div>
  );
};
export { Cart };
