import "./wishlist.css"
import { RedHeadphone , mobile} from "../../assets/index";
import { WishlistCard } from "./component/Wishlist-card";

const WishList =()=>{
    return (
        <div className="wishlist-container">
        <div className="wishlist-header flex-center">
            <h2>My Wishlist</h2>
            <span className="sub-text"> 3 items</span>
        </div>
        <div className="wishlist-main">

        <WishlistCard
        cardImage={RedHeadphone}
        cardTitle={"Red Headphone"}
        cardDescp={"Master & Dynamic"}
        cardPriceBefore={"2999"}
        cardPrice={"14999"}
        cardDiscount={"50"}
        />    

        <WishlistCard
        cardImage={mobile}
        cardTitle={"Smartphone"}
        cardDescp={"Master & Dynamic"}
        cardPriceBefore={"22999"}
        cardPrice={"11999"}
        cardDiscount={"50"}
        />         
                </div>
            </div>    
    );
}

export { WishList };