import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhM2RlZjRlMS1kNGY2LTQ4NjItYTY3Ny01NmRkNDI0NDg0ZTEiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.Qp89fuxRPRdk4xRhdIlLomynnh2aPIVr2V5dm7LubNo";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const  navigate  = useNavigate();

  useEffect(
    () =>
      (async () => {
        try {
          const response = await axios.get("api/user/cart", {
            headers: { authorization: token },
          });

          setCart(response.data.cart);
        } catch (e) {
          console.error("error:", e);
        }
      })(),
    []
  );

  const addToCart = async (products) => {
    try {
      const response = await axios.post(
        "api/user/cart",
        { product: products },
        {
          headers: { authorization: token },
        }
      );

      setCart(response.data.cart);
    } catch (e) {
      console.error("error", e);
    }
  };

  const removeCart = async (id) => {
    try {
      const response = await axios.delete(`api/user/cart/${id}`, {
        headers: { authorization: token },
      });
      setCart(response.data.cart);
    } catch (e) {
      console.error("error", e);
    }
  };

  const updateQty = async (id, type) => {
    try {
      const response = await axios.post(
        `api/user/cart/${id}`,
        { action: {type} },
        { headers: { authorization: token } }
      );
      setCart(response.data.cart);
    } catch (e) {
      console.error("error", e);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeCart, updateQty, navigate }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
