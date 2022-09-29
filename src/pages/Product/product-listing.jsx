import "./product-listing.css";
import { Filter } from "./components/filters";
import { Navbar, ProductCard } from "../../components";
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
import { useState } from "react";

const ProductListing = () => {
  const { Filterstate } = useFilter();
  const products = useFetchData();
  const [searchInput, setSearchInput] = useState("");

  const searchHandler = (products, searchInput) => {
    if (searchInput) {
      const searchItems = products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase().trim())
      );
      return searchItems;
    }
    return products;
  };
  const sortFilter = sortData(products, Filterstate);
  const priceRangeFilter = priceRange(sortFilter, Filterstate);
  const bestSellerFilter = bestsellerFilter(priceRangeFilter, Filterstate);
  const categoriesFilter = categoryFilter(bestSellerFilter, Filterstate);
  const ratingsFilter = ratingFilter(categoriesFilter, Filterstate);
  const dataFilter = inStockFilter(ratingsFilter, Filterstate);
  const searchProducts = searchHandler(dataFilter, searchInput);

  return (
    <>
      <Navbar
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        searchHandler={searchProducts}
      />
      <div className="product-container">
        <Filter />
        <div className="product-main-list">
          <div className="product-header">
            <h3>All Products</h3>
            <span className="sub-text">{searchProducts.length}</span>
          </div>
          <div className="grid">
            {searchProducts.length > 0 ? (
              searchProducts.map((p) => {
                return (
                  <ProductCard
                    key={p._id}
                    _id={p.id}
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
              })
            ) : (
              <div>No Products</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductListing };
