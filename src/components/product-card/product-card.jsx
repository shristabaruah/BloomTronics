import "./product-card.css"
const ProductCard = ({
  cardImage,
  cardTitle,
  cardBadge,
  cardDescp,
  cardPrice,
  cardPriceBefore,
  cardDiscount,
})=>{
    return (
        <div className="card">
                <img className="card-img" src={cardImage} alt=""/>
                <span class="card-badge">{cardBadge}</span>
                    <div className="card-info">
                        <div className="card-title">
                            <h3 className="card-header">{cardTitle}</h3>
                            <p className="card-description">{cardDescp}</p>            	 			      			</div>
                        <div className="price">
                            <p className="offer-price"><i className="fa-solid fa-indian-rupee-sign"></i>{cardPriceBefore}</p>
                            <p className="actual-price"><i className="fa-solid fa-indian-rupee-sign"></i>{cardPrice}</p>
                            <p className="price-perc">({cardDiscount}% OFF)</p>
                        </div>
                        </div>
                       <button className="btn secondary-solid add-cart">
                         Add to cart
                          </button>
                       <button className="btn secondary-solid wishlist"> 
                         <i className="fa fa-heart-o" aria-hidden="true"></i>
                        </button>
                    </div>

    );
}
export { ProductCard };