import "./product-listing.css"
import { Filter } from "./components/filters";
import { ProductCard } from "../../components";
import { RedHeadphone, headphone } from "../../assets";

const ProductListing = () => {
  return (
    <div class="product-container">
      <Filter />
      <div class="product-main-list">
        <div class="product-header">
          <h3>All Products</h3>
          <span class="sub-text">-12 items</span>
        </div>
        <div class="grid">
          <ProductCard
            cardImage={RedHeadphone}
            cardTitle={"Red Headphone"}
            cardDescp={"Master & Dynamic"}
            cardPriceBefore={"2999"}
            cardPrice={"1499"}
            cardDiscount={"50"}
          />

          <ProductCard
            cardImage={headphone}
            cardTitle={"New Smart Phone"}
            cardDescp={"Master & Dynamic"}
            cardPriceBefore={"22999"}
            cardPrice={"20999"}
            cardDiscount={"20"}
          />

          <ProductCard
            cardImage={RedHeadphone}
            cardTitle={"Red Headphone"}
            cardDescp={"Master & Dynamic"}
            cardPriceBefore={"2999"}
            cardPrice={"1499"}
            cardDiscount={"50"}
          />

          <ProductCard
            cardImage={RedHeadphone}
            cardTitle={"Red Headphone"}
            cardDescp={"Master & Dynamic"}
            cardPriceBefore={"2999"}
            cardPrice={"1499"}
            cardDiscount={"50"}
          />

            <ProductCard
            cardImage={RedHeadphone}
            cardTitle={"Red Headphone"}
            cardDescp={"Master & Dynamic"}
            cardPriceBefore={"2999"}
            cardPrice={"1499"}
            cardDiscount={"50"}
          />

            <ProductCard
            cardImage={RedHeadphone}
            cardTitle={"Red Headphone"}
            cardDescp={"Master & Dynamic"}
            cardPriceBefore={"2999"}
            cardPrice={"1499"}
            cardDiscount={"50"}
          />
           <ProductCard
            cardImage={RedHeadphone}
            cardTitle={"Red Headphone"}
            cardDescp={"Master & Dynamic"}
            cardPriceBefore={"2999"}
            cardPrice={"1499"}
            cardDiscount={"50"}
          />
        </div>
      </div>
    </div>
  );
};

export { ProductListing } ;
