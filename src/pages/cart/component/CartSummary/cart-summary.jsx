import { useCart } from "../../../../contexts/cart-context";
import {
  getDiscountPrice,
  getPrice,
  getTotalPrice,
} from "../../../../functions/CartSummary";
import "./cart-summary.css";
const CartSummary = () => {
  const { cart } = useCart();

  const cartSummary = {
    deliveryCharge: 80,
    price: getTotalPrice(cart),
    discountInPrice: getDiscountPrice(cart),
  };

  const totalPrice = cartSummary.price + cartSummary.deliveryCharge;

  return (
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
            <p>
              Total MRP ({cart.length} {cart.length > 1 ? "items" : "item"})
            </p>
            <p>
              <i className="fa-solid fa-indian-rupee-sign"></i>
              {cartSummary.price}
            </p>
          </ul>
          <ul>
            <p> Discount on MRP</p>
            <p>
              <i className="fa-solid fa-indian-rupee-sign"></i>
              {cartSummary.discountInPrice}
            </p>
          </ul>
          <ul>
            <p>Delivery charges</p>
            <p>{cartSummary.deliveryCharge}</p>
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
              <i className="fa-solid fa-indian-rupee-sign"></i>
              {totalPrice}
            </h4>
          </ul>
        </li>
      </div>
      <button className="btn primary-solid order">
        <a>PLACE ORDER</a>
      </button>
    </div>
  );
};
export { CartSummary };
