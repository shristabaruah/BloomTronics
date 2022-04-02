import { useWishlist } from "../../contexts/wishlist-context";
import "./product-card.css";
const ProductCard = (props) => {
  const {
    _id,
    inStock,
    imgSrc,
    title,
    badge,
    rating,
    descp,
    price,
    alt,
    priceBefore,
    discount,
  } = props;

  const { wishlist, addToWishlist, removeWishlist } = useWishlist();
 

  const toggleWishlist = (product) => {
    const itemExists = wishlist.some((item) => item._id === product._id);
    if (itemExists) {
      removeWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="card">
      {inStock === true ? null : (
        <span className="card-overlay">
          <div>OUT OF STOCK</div>
        </span>
      )}
      <img className="card-img" src={imgSrc} alt={alt} />
      {badge ? <span className="card-badge">{badge}</span> : ""}
      <span className="rating">
        {rating}
        <i className="fa-solid fa-star"></i>
      </span>
      <div className="card-info">
        <div className="card-title">
          <h3 className="card-header">{title}</h3>
          <p className="card-description">{descp}</p>{" "}
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
          <p className="price-perc">({discount}% OFF)</p>
        </div>
      </div>
      <button className="btn secondary-solid add-cart">Add to cart</button>
      <button
        className="btn secondary-solid wishlist"
        onClick={() => toggleWishlist(props)}
      >
        <i
          className={
            wishlist.some((item) => item._id === _id)
              ? "wish fa fa-heart "
              : "fa fa-heart-o "
          }
          aria-hidden="true"
        ></i>
      </button>
    </div>
  );
};
export { ProductCard };
