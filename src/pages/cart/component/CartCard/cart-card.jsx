import { useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "../../../../contexts/cart-context";
import { useWishlist } from "../../../../contexts/wishlist-context";
import "./cart-card.css";

const CartCard = ({ product }) => {
  const { _id, imgSrc, title, descp, price, priceBefore, qty, discount } =
    product;
  const [btnDisabled, setBtnDisabled] = useState(false);

  const { wishlist, addToWishlist } = useWishlist();
  const { removeCart, updateQty } = useCart();

  const removeCartHandler = (product) => {
    removeCart(product._id);
    toast.info(`${product.title} is removed from cart`);
  };

  const updateQtyHandler = (product, type, _id) => {
    if (type === "decrement" && product.qty === 1) {
      removeCartHandler(product);
    } else {
      updateQty(product._id, type);
    }
  };

  const moveToWishlistHandler = (product) => {
    removeCartHandler(product);
    const itemExist = wishlist.some((item) => item._id === product._id);

    if (!itemExist) {
      addToWishlist(product, setBtnDisabled);
    }
  };

  return (
    <div className="card-horizontal">
      <img className="card-image horizontal-img" src={imgSrc} alt="" />
      <div className="card-main">
        <div className="card-title">
          <h3 className="card-header">{title}</h3>
          <p className="card-description">{descp}</p>
        </div>
        <div className="price">
          <p className="offer-price">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {price}
          </p>
          <p className="actual-price">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {priceBefore}
          </p>
          <p className="price-perc">({discount} % OFF)</p>
        </div>
        <div className="qty">
          <label htmlFor="qty-count">Quantity</label>
          <button
            className="minus"
            onClick={() => updateQtyHandler(product, "decrement", _id)}
          >
            -
          </button>
          <input type="number" value={qty} readOnly />
          <button
            className="add"
            onClick={() => updateQtyHandler(product, "increment", _id)}
          >
            +
          </button>
        </div>
        <div className="horizontal-btn">
          <button
            className="btn secondary-solid buy-now"
            onClick={() => removeCartHandler(product)}
          >
            REMOVE
          </button>
          <button
            className="btn secondary-solid wishlist"
            onClick={() => moveToWishlistHandler(product)}
          >
            MOVE TO WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
};
export { CartCard };
