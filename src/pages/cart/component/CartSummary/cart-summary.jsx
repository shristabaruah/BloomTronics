import { useState } from "react";
import { toast } from "react-toastify";
import { logo } from "../../../../assets";
import { useAuth } from "../../../../contexts/auth-context";
import { useCart } from "../../../../contexts/cart-context";
import {
  getDiscountPrice,
  getTotalPrice,
} from "../../../../functions/CartSummary";
import "./cart-summary.css";
import { Coupon } from "./Component/Coupon";

const CartSummary = () => {
  const { cart, removeCart, navigate } = useCart();

  const {
    authState: { user },
  } = useAuth();
  const [couponModalOpen, setCouponModalOpen] = useState(false);
  const [couponType, setCouponType] = useState("");

  const cartSummary = {
    deliveryCharge: 80,
    price: getTotalPrice(cart),
    discountInPrice: getDiscountPrice(cart),
  };

  const totalPrice = cartSummary.price + cartSummary.deliveryCharge;
  const couponDiscount = (totalPrice * Number(couponType)) / 100;
  const finalPrice = totalPrice - couponDiscount;

  const couponPrice = (couponType) => {
    if (couponType !== "") {
      return finalPrice;
    } else {
      return totalPrice;
    }
  };
  const cartAmount = couponPrice(couponType);

  const couponHandler = () => {
    setCouponModalOpen(true);
  };

  const loadScript = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const placeOrder = async () => {
    const response = await loadScript();
    if (response) {
      const options = {
        key: "rzp_test_qA26GvCzWjJUc7",
        amount: cartAmount * 100,
        currency: "INR",
        name: "Bloomtronics",
        description: "Test Transaction",
        image: logo,
        handler: function (response) {
          cart.map((product) => {
            removeCart(product._id);
            navigate("/products");
          });
          toast.success("Payment is successfull");
        },
        prefill: {
          name: user.firstName,
          email: user.email,
          contact: "9999999999",
        },
        notes: { address: "Razorpay Corporate Office" },
        theme: { color: "#FFA500" },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      {couponModalOpen ? (
        <Coupon
          setCouponModalOpen={setCouponModalOpen}
          totalPrice={totalPrice}
          couponType={couponType}
          setCouponType={setCouponType}
          couponDiscount={couponDiscount}
        />
      ) : null}
      <div className="order-summary">
        <div className="coupon">
          <h3>COUPONS</h3>
          <div className="apply-coupon">
            <p>
              <i className="fa-solid fa-tags"></i> Apply Coupon
            </p>
            <button
              className="btn primary-outline apply"
              onClick={couponHandler}
            >
              APPLY
            </button>
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
                - <i className="fa-solid fa-indian-rupee-sign"></i>
                {cartSummary.discountInPrice}
              </p>
            </ul>
            <ul>
              <p>Delivery charges</p>
              <p>{cartSummary.deliveryCharge}</p>
            </ul>
            <ul>
              <p>Coupon Discount</p>
              {couponDiscount < 1 ? (
                <p className="coupon-discount" onClick={couponHandler}>
                  Apply Coupon
                </p>
              ) : (
                <p>
                  - <i className="fa-solid fa-indian-rupee-sign"></i>
                  {couponDiscount}
                </p>
              )}
            </ul>
            <ul className="total">
              <h4>Total Amount</h4>
              <h4>
                <i className="fa-solid fa-indian-rupee-sign"></i>
                {cartAmount}
              </h4>
            </ul>
          </li>
        </div>
        <button className="btn primary-solid order" onClick={placeOrder}>
          <a>PLACE ORDER</a>
        </button>
      </div>
    </>
  );
};
export { CartSummary };
