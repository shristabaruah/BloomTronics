import "./wishlist.css";
import { WishlistCard } from "./component/Wishlist-card";
import { useWishlist } from "../../contexts/wishlist-context";

const WishList = () => {
  const { wishlist } = useWishlist();
  
  return (
    <div className="wishlist-container">
      <div className="wishlist-header flex-center">
        <h2>My Wishlist -</h2>
        <h2 className="wishlist-header flex-center"> {wishlist.length}</h2>
      </div>
      {wishlist.length === 0 ? (
        <h1 className="sub-text">Wishlist empty :(</h1>
      ) : (
        <div className="wishlist-main">
          {wishlist.map((p) => {

            return (
              <WishlistCard
                key={p._id}
                _id={p._id}
                imgSrc={p.imgSrc}
                alt={p.title}
                badge={p.badge}
                title={p.title}
                descp={p.brand}
                priceBefore={p.priceBefore}
                price={p.price}
                inStock={p.inStock}
                discount={p.discount}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export { WishList };
