import "./Wishlist-card.css";
const WishlistCard = ({
  cardImage,
  cardTitle,
  cardDescp,
  cardPrice,
  cardPriceBefore,
  cardDiscount,
}) => {
  return (
    <div className="wish-card">
      <img className="wish-card-img" src={cardImage} alt="" />
      <span className="card-delete">
        <i className="fa-solid fa-xmark"></i>
      </span>
      <div className="card-info">
        <div className="card-title">
          <h3 className="card-header">{cardTitle}</h3>
          <p className="card-description">{cardDescp}</p>{" "}
        </div>
        <div className="price">
          <p className="offer-price">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {cardPriceBefore}
          </p>
          <p className="actual-price">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {cardPrice}
          </p>
          <p className="price-perc">({cardDiscount}% OFF)</p>
        </div>
      </div>
      <button className="btn secondary-solid add-bag">Move to cart</button>
    </div>
  );
};

export { WishlistCard };
