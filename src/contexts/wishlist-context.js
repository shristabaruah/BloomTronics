import axios from "axios";
import { createContext, useContext, useEffect ,useState } from "react";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhM2RlZjRlMS1kNGY2LTQ4NjItYTY3Ny01NmRkNDI0NDg0ZTEiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.Qp89fuxRPRdk4xRhdIlLomynnh2aPIVr2V5dm7LubNo";
const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [ wishlist  ,setWishlist] = useState([]);

  useEffect(
    () =>
      (async () => {
        try {
          const response = await axios.get("/api/user/wishlist", {
            headers: { authorization: token },
          });
         setWishlist(response.data.wishlist)
        } catch (e) {
          console.log("error:", e.response);
        }
      })(),
    []
  );

  const addToWishlist = async ( products)=>{
    try {
        const response = await axios.post("/api/user/wishlist",{product:products},{headers:{authorization:token}});
        setWishlist(response.data.wishlist)
       
        }catch(e){
            console.log("error:",e)
        }
      }
      const removeWishlist = async (id)=>{
        try{
            const response =await axios.delete(`/api/user/wishlist/${id}`,{headers:{authorization:token}})
            setWishlist(response.data.wishlist)
           
        }catch(e){
            console.log("error:",e)
        }
    };   
   
  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist , addToWishlist , removeWishlist}}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
