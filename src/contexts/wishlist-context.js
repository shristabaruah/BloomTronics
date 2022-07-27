import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(
    () =>
      (async () => {
        if (token) {
          try {
            const response = await axios.get("/api/user/wishlist", {
              headers: { authorization: token },
            });
            setWishlist(response.data.wishlist);
          } catch (e) {
            console.error("error:", e.response);
          }
        }
      })(),
    [token, navigate]
  );

  const addToWishlist = async (products) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product: products },
        { headers: { authorization: token } }
      );
      setWishlist(response.data.wishlist);
    } catch (e) {
      console.error("error:", e);
    }
  };
  const removeWishlist = async (id) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: { authorization: token },
      });
      setWishlist(response.data.wishlist);
    } catch (e) {
      console.error("error:", e);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, setWishlist, addToWishlist, removeWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
