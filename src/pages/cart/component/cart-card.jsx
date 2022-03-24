import "./cart-card.css"
const CartCard = ({
    cardImage,
    cardTitle,
    cardDescp,
    cardPrice,
    cardPriceBefore,
    cardDiscount
}) =>{
    return (
        <div className="card-horizontal">
            <img className="card-image horizontal-img" src={cardImage} alt="" />
            <div className="card-main">
              <div className="card-title">
                <h3 className="card-header">{cardTitle}</h3>
                <p className="card-description">{cardDescp}</p>
              </div>
              <div className="price">
                <p className="offer-price">
                  <i class="fa-solid fa-indian-rupee-sign"></i>{cardPriceBefore}
                </p>
                <p className="actual-price">
                  <i class="fa-solid fa-indian-rupee-sign"></i>{cardPrice}
                </p>
                <p className="price-perc">({cardDiscount} % OFF)</p>
              </div>
              <div className="qty">
                <label for="qty-count">Quantity</label>
                <button className="minus">-</button>
                <input className="qty-count" type="number" value="1" />
                <button className="add">+</button>
              </div>
              <div className="horizontal-btn">
                <button className="btn secondary-solid buy-now">REMOVE</button>
                <button className="btn secondary-solid wishlist">
                  MOVE TO WISHLIST
                </button>
              </div>
            </div>
          </div>
       

    );
} 
 export { CartCard };