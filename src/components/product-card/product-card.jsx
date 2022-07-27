import { toast } from "react-toastify";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";
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
  const { cart, addToCart, navigate } = useCart();
  const productInWishlist = wishlist.some((item) => item._id === _id);
  const productInCart = cart.some((item) => item._id === _id);
  const {
    authState: { token },
  } = useAuth();

  const addToCartHandler = (product) => {
    if (token) {
      addToCart(product);
      toast.success("Added to Cart");
    } else {
      navigate("/login");
    }
  };

  const toggleWishlist = (product) => {
    if (token) {
      const itemExists = wishlist.some((item) => item._id === product._id);
      if (itemExists) {
        removeWishlist(product._id);
        toast.success("Removed from wishlist");
      } else {
        addToWishlist(product);
        toast.success("Added to Wishlist");
      }
    } else {
      navigate("/login");
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
      <button
        className="btn secondary-solid add-cart"
        onClick={() =>
          productInCart ? navigate("/cart") : addToCartHandler(props)
        }
      >
        {productInCart ? "Go to Cart" : "Add To Cart"}
      </button>
      <button
        className="btn secondary-solid wishlist"
        onClick={() => toggleWishlist(props)}
      >
        <i
          className={productInWishlist ? "wish fa fa-heart " : "fa fa-heart-o "}
          aria-hidden="true"
        ></i>
      </button>
    </div>
  );
};
export { ProductCard };
