import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import "./singleProduct.css";

const SingleProductPage = () => {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const {
    authState: { token },
  } = useAuth();
  const { cart, addToCart, navigate } = useCart();
  const { wishlist, addToWishlist } = useWishlist();

  const [btnDisabled, setBtnDisabled] = useState(false);
  const productInCart = cart.some((item) => item._id === singleProduct._id);
  const productInWishlist = wishlist.some(
    (item) => item._id === singleProduct._id
  );

  useEffect(
    () =>
      (async () => {
        try {
          const response = await axios.get(`/api/products/${productId}`);
          if (response.status === 200) {
            setSingleProduct(response.data.product);
          }
        } catch (e) {
          console.error(e);
        }
      })(),
    [productId]
  );
  const addToCartHandler = (singleProduct) => {
    if (token) {
      addToCart(singleProduct, setBtnDisabled);

      toast.success("Added to Cart");
    } else {
      navigate("/login");
    }
  };
  const wishlistHandler = (singleProduct) => {
    if (token) {
      addToWishlist(singleProduct, setBtnDisabled);
      toast.success("Added to Wishlist");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="single-product-page">
        <div className="main-container">
          <div className="image-container">
            <img
              className="image"
              src={singleProduct?.imgSrc}
              alt={singleProduct?.title}
            />
          </div>
          <div className="content-container">
            <div className="product-desc">
              <div className="product-title">{singleProduct?.title}</div>
              <div className="product-brand">{singleProduct?.brand}</div>
              <div className="product-rating">
                {singleProduct?.rating}
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="price-container">
              <div className="product-price">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                {singleProduct?.price}
              </div>
              <span className="price-before">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                {singleProduct?.priceBefore}{" "}
              </span>
              <span className="discount-price">
                ({singleProduct?.discount}%)OFF
              </span>
            </div>
            <div className="product-btn">
              <button
                className="btn secondary-solid cart-btn"
                disabled={btnDisabled}
                onClick={() =>
                  productInCart
                    ? navigate("/cart")
                    : addToCartHandler(singleProduct)
                }
              >
                {productInCart ? "Go to Cart" : "Add To Cart"}
              </button>
              <button
                disabled={btnDisabled}
                className="btn secondary-solid wishlist-btn"
                onClick={() =>
                  productInWishlist
                    ? navigate("/wishlist")
                    : wishlistHandler(singleProduct)
                }
              >
                <i
                  className={productInWishlist ? "" : "fa fa-heart-o "}
                  aria-hidden="true"
                ></i>
                {productInWishlist ? " Go to Wishlist" : " Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { SingleProductPage };
