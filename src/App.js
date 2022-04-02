import "./App.css";
import { Routes , Route } from "react-router-dom"
import { Footer,Navbar } from "./components";
import MockmanEs from "mockman-js";
import {
  Home ,
  ProductListing,
  WishList,
  Cart,
  Login,
  SignUp,
  ForgetPwd,
} from "./pages"; 


function App() {
  return (
    
    <>
      <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/forget-password" element={<ForgetPwd/>}/>
       <Route path="/wishlist" element={<WishList/>}/>
       <Route path="/products" element={<ProductListing/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/mock" element={<MockmanEs />} />
     </Routes>
      <Footer/>
    </>
  );
}

export default App;
