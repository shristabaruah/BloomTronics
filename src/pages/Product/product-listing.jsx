import "./product-listing.css";
import { Filter } from "./components/filters";
import { ProductCard } from "../../components";
import { useFilter } from "../../contexts/filter-context";
import {
  sortData,
  priceRange,
  bestsellerFilter,
  categoryFilter,
  ratingFilter,
  inStockFilter,
} from "../../functions/index";
import { useFetchData } from "../../services/getdataservice";

const ProductListing = () => {
  const { Filterstate } = useFilter();
  const products = useFetchData();

  const sortFilter = sortData(products, Filterstate);
  const priceRangeFilter = priceRange(sortFilter, Filterstate);
  const bestSellerFilter = bestsellerFilter(priceRangeFilter, Filterstate);
  const categoriesFilter = categoryFilter(bestSellerFilter, Filterstate);
  const ratingsFilter = ratingFilter(categoriesFilter, Filterstate);
  const dataFilter = inStockFilter(ratingsFilter, Filterstate);

  return (
    <div className="product-container">
      <Filter />
      <div className="product-main-list">
        <div className="product-header">
          <h3>All Products</h3>
          <span className="sub-text">{dataFilter.length}</span>
        </div>
        <div className="grid">
          {dataFilter.map((p) => {
            return (
              <ProductCard
                key={p.id}
                _id={p._id}
                imgSrc={p.imgSrc}
                alt={p.title}
                badge={p.badge}
                rating={p.rating}
                title={p.title}
                descp={p.brand}
                priceBefore={p.priceBefore}
                price={p.price}
                inStock={p.inStock}
                discount={p.discount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { ProductListing };
