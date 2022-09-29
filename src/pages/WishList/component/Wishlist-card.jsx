import { useState } from "react";
import { useCart } from "../../../contexts/cart-context";
import { useWishlist } from "../../../contexts/wishlist-context";
import "./Wishlist-card.css";
const WishlistCard = (props) => {
  const {
    _id,
    imgSrc,
    title,
    badge,
    descp,
    price,
    alt,
    priceBefore,
    discount} = props
  const { removeWishlist }= useWishlist();
  const { addToCart , navigate ,cart} = useCart(); 
  const productInCart = cart.some((item)=>item._id === _id);
  const [btnDisabled, setBtnDisabled] = useState(false);


  const addToCartHandler = (product)=>addToCart(product , setBtnDisabled);
     
  const removeHandler = (_id)=>removeWishlist(_id , setBtnDisabled)
    
 

  return (
    <div className="wish-card">
      <img className="wish-card-img" src={imgSrc} alt={alt} />
      {badge ? <span className="card-badge">{badge}</span>:""}
      <span className="card-delete" onClick={()=>removeHandler(_id)}>
        <i className="fa-solid fa-xmark"></i>
      </span>
      <div className="card-info">
        <div className="card-title">
          <h3 className="card-header">{title}</h3>
          <p className="card-description">{descp}</p>
        </div>
        <div className="price">
          <p className="offer-price">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {priceBefore}
          </p>
          <p className="actual-price">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {price}
          </p>
          <p className="price-perc">({discount}% OFF)</p>
        </div>
      </div>
      <button className="btn secondary-solid add-bag" onClick={()=>productInCart ? navigate("/cart") :addToCartHandler(props)}>{productInCart ? "Go to Cart" : "Add To Cart"} </button>
    </div>
  );
};

export { WishlistCard };
