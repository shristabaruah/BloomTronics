import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Footer, Navbar, RequireAuth } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MockmanEs from "mockman-js";
import {
  Home,
  ProductListing,
  WishList,
  Cart,
  Login,
  SignUp,
  ForgetPwd,
  SingleProductPage,
} from "./pages";

function App() {
  const location = useLocation();
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {location.pathname !== "/products" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPwd />} />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productId" element={<SingleProductPage />} />

        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route path="/mock" element={<MockmanEs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
