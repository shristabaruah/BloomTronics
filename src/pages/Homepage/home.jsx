import { Hero } from "./components/hero/hero";
import  {ProductCard} from "../../components/index";
import { RedHeadphone, headphone } from "../../assets/index";
import "./home.css";

const Home = () => {
    return (
        <div>
        <Hero/>

        <section className="product">
        <h2 className="product-category">New Arrivals</h2>
        <div className="product-card">

         <ProductCard
         cardImage={headphone}
         cardTitle={"New Smart Phone"}
         cardDescp={"Master & Dynamic"}
         cardPriceBefore={'22999'}
         cardPrice={'20999'}
         cardDiscount={"20"}
         />   
        
         <ProductCard
         cardImage={RedHeadphone}
         cardTitle={"Red Headphone"}
         cardDescp={"Master & Dynamic"}
         cardPriceBefore={'2999'}
         cardPrice={'1499'}
         cardDiscount={"50"}
         />   
        
         <ProductCard
         cardImage={RedHeadphone}
         cardTitle={"Red Headphone"}
         cardDescp={"Master & Dynamic"}
         cardPriceBefore={'2999'}
         cardPrice={'1499'}
         cardDiscount={"50"}
         />   
        
         <ProductCard
         cardImage={RedHeadphone}
         cardTitle={"Red Headphone"}
         cardDescp={"Master & Dynamic"}
         cardPriceBefore={'2999'}
         cardPrice={'1499'}
         cardDiscount={"50"}
         />   
        
         <ProductCard
         cardImage={RedHeadphone}
         cardTitle={"Red Headphone"}
         cardDescp={"Master & Dynamic"}
         cardPriceBefore={'2999'}
         cardPrice={'1499'}
         cardDiscount={"50"}
         />   
        </div>
        </section>

        <section className="category-facilities">
        <div className="facilities">
            <div className="icon-facilities"><i className="fa-solid fa-truck-fast"></i></div>
            <div className="text-center">
                <h4>Free Shipping</h4>
                <p>Free shipping on all order</p>
            </div>
           
        </div>
        <div className="facilities">
            <div className="icon-facilities"><i class="fa-solid fa-arrow-right-arrow-left"></i></div>
            <div className="text-center">
                <h4>Return within 30 days</h4>
                <p>of your order</p>
            </div>
            
        </div>
        <div className="facilities">
            <div className="icon-facilities"><i class="fa-solid fa-headset"></i></div>
            <div className="text-center">
                <h4>Support 24/7</h4> 
                <p>Online support 24 hours a day</p>
            </div>
        </div>
    </section>

    <section className="product">
        <h2 className="product-category">Best Seller</h2>
        <div className="product-card">

        <ProductCard
         cardImage={RedHeadphone}
         cardTitle={"Red Headphone"}
         cardDescp={"Master & Dynamic"}
         cardPriceBefore={'2999'}
         cardPrice={'1499'}
         cardDiscount={"50"}
         />   

         <ProductCard
         cardImage={headphone}
         cardTitle={"New Smart Phone"}
         cardDescp={"Master & Dynamic"}
         cardPriceBefore={'22999'}
         cardPrice={'20999'}
         cardDiscount={"20"}
         />   
        
         <ProductCard
         cardImage={RedHeadphone}
         cardTitle={"Red Headphone"}
         cardDescp={"Master & Dynamic"}
         cardPriceBefore={'2999'}
         cardPrice={'1499'}
         cardDiscount={"50"}
         />   
        
         <ProductCard
         cardImage={RedHeadphone}
         cardTitle={"Red Headphone"}
         cardDescp={"Master & Dynamic"}
         cardPriceBefore={'2999'}
         cardPrice={'1499'}
         cardDiscount={"50"}
         />   
        
         <ProductCard
         cardImage={RedHeadphone}
         cardTitle={"Red Headphone"}
         cardDescp={"Master & Dynamic"}
         cardPriceBefore={'2999'}
         cardPrice={'1499'}
         cardDiscount={"50"}
         />   
        
        </div>
    </section>  
        </div>
        
        
    );
};

export { Home };