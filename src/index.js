import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { FilterProvider } from "./contexts/filter-context";
import { WishlistProvider } from "./contexts/wishlist-context";
import { CartProvider } from "./contexts/cart-context";
import { AuthProvider } from "./contexts/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <CartProvider>
      <WishlistProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
      </WishlistProvider>
      </CartProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
