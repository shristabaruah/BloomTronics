import "./cart.css";
import { CartCard } from "./component/CartCard/cart-card";
import { CartSummary } from "./component/CartSummary/cart-summary";
import { useCart } from "../../contexts/cart-context";

const Cart = () => {
  const { cart }=useCart();
  return (
    <div className="cart-wrapper">
      <h2 className="flex-center">My Cart-{cart.length}</h2>
      {cart.length === 0 ?(
        <h1>Cart is empty :(</h1>
      ):(
      <div className="cart">
        <div className="cart-main">
         {cart.map((p)=>{return(
          <CartCard 
         product={p}
         key={p._id}
          />
          )})} 
       
          </div>
        <CartSummary/>
      </div>
      )}
    </div>
  );
};
export { Cart };
