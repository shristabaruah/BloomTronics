import { useState } from "react";
import { useFilter } from "../../../contexts/filter-context";
import "./filter.css";

const Filter = () => {
  const { Filterstate, Filterdispatch } = useFilter();
  const { rangeValue, sortBy, inStock, bestSeller, category, ratingValue } =
    Filterstate;
  const [filterMob, setFilterMob] = useState(false);
  const [sortMob, setSortMob] = useState(false);
  return (
    <>
      <div className="filter-container">
        <div className="filter-header">
          <h3>Filters</h3>
          <button
            className="links primary-outline"
            onClick={() => Filterdispatch({ type: "CLEAR" })}
          >
            Clear All
          </button>
        </div>

        <div className="filter-category center-hr">
          <h4 className="header">CATEGORY</h4>
          <div className="category-main">
            <label className="select-input">
              <input
                type="checkbox"
                className="checkbox-input"
                name="category"
                checked={category.includes("Smartphone")}
                onChange={(e) =>
                  Filterdispatch({
                    type: "CATEGORY_FILTER",
                    payload: {
                      category: "Smartphone",
                      isChecked: e.target.checked,
                    },
                  })
                }
              />
              <span className="inp-text">Mobiles</span>
            </label>
            <label className="select-input">
              <input
                type="checkbox"
                className="checkbox-input"
                name="category"
                checked={category.includes("Laptop")}
                onChange={(e) =>
                  Filterdispatch({
                    type: "CATEGORY_FILTER",
                    payload: {
                      category: "Laptop",
                      isChecked: e.target.checked,
                    },
                  })
                }
              />
              <span className="inp-text">Laptops</span>
            </label>
            <label className="select-input">
              <input
                type="checkbox"
                className="checkbox-input"
                name="category"
                checked={category.includes("Television")}
                onChange={(e) =>
                  Filterdispatch({
                    type: "CATEGORY_FILTER",
                    payload: {
                      category: "Television",
                      isChecked: e.target.checked,
                    },
                  })
                }
              />
              <span className="inp-text">Television</span>
            </label>
            <label className="select-input">
              <input
                type="checkbox"
                className="checkbox-input"
                name="category"
                checked={category.includes("HomeAppliances")}
                onChange={(e) =>
                  Filterdispatch({
                    type: "CATEGORY_FILTER",
                    payload: {
                      category: "HomeAppliances",
                      isChecked: e.target.checked,
                    },
                  })
                }
              />
              <span className="inp-text">Home Appliances</span>
            </label>
          </div>
        </div>

        <div className="filter-price center-hr">
          <h4 className="header">PRICE</h4>
          <div className="price-main ">
            <label htmlFor="slider-input">&#8377;0 - &#8377;{rangeValue}</label>
            <input
              type="range"
              className="slider-input"
              min="0"
              step={1000}
              max="50000"
              value={rangeValue}
              onChange={(e) =>
                Filterdispatch({
                  type: "PRICE_RANGE",
                  payload: { rangeValue: e.target.value },
                })
              }
            />
            <div className="slider-value"></div>
          </div>
        </div>
        <div className="filter-rating center-hr">
          <h4 className="header">CUSTOMER RATING</h4>
          <div className="rating-main ">
            <label className="select-input">
              <input
                type="radio"
                className="radio-input"
                name="rating"
                checked={ratingValue === "4"}
                onChange={() =>
                  Filterdispatch({
                    type: "RATING",
                    payload: { ratingValue: "4" },
                  })
                }
              />
              <span className="inp-text">
                4 <i className="fa-solid fa-star"></i> & above
              </span>
            </label>
            <label className="select-input">
              <input
                type="radio"
                className="radio-input"
                name="rating"
                checked={ratingValue === "3"}
                onChange={() =>
                  Filterdispatch({
                    type: "RATING",
                    payload: { ratingValue: "3" },
                  })
                }
              />
              <span className="inp-text">
                3 <i className="fa-solid fa-star"></i> & above
              </span>
            </label>
            <label className="select-input">
              <input
                type="radio"
                className="radio-input"
                name="rating"
                checked={ratingValue === "2"}
                onChange={() =>
                  Filterdispatch({
                    type: "RATING",
                    payload: { ratingValue: "2" },
                  })
                }
              />
              <span className="inp-text">
                2 <i className="fa-solid fa-star"></i> & above
              </span>
            </label>
            <label className="select-input">
              <input
                type="radio"
                className="radio-input"
                name="rating"
                checked={ratingValue === "1"}
                onChange={() =>
                  Filterdispatch({
                    type: "RATING",
                    payload: { ratingValue: "1" },
                  })
                }
              />
              <span className="inp-text">
                1 <i className="fa-solid fa-star"></i> & above
              </span>
            </label>
          </div>
        </div>
        <div className="filter-sort center-hr">
          <h4 className="header">SORT BY</h4>
          <div className="sort-main ">
            <label className="select-input">
              <input
                type="checkbox"
                className="radio-input"
                name="sort"
                checked={bestSeller}
                onChange={(e) =>
                  e.target.checked
                    ? Filterdispatch({
                        type: "BESTSELLER",
                        payload: { bestSeller: true },
                      })
                    : Filterdispatch({
                        type: "BESTSELLER",
                        payload: { bestSeller: false },
                      })
                }
              />
              <span className="inp-text">Popularity </span>
            </label>
            <label className="select-input">
              <input
                type="radio"
                className="radio-input"
                name="sort"
                checked={sortBy === "LOW_TO_HIGH"}
                onChange={() => Filterdispatch({ type: "LOW_TO_HIGH" })}
              />
              <span className="inp-text">Price--Low to High </span>
            </label>
            <label className="select-input">
              <input
                type="radio"
                className="radio-input"
                name="sort"
                checked={sortBy === "HIGH_TO_LOW"}
                onChange={() => Filterdispatch({ type: "HIGH_TO_LOW" })}
              />
              <span className="inp-text">Price--High to Low </span>
            </label>
            <label className="select-input">
              <input
                type="checkbox"
                className="radio-input"
                checked={inStock}
                onChange={() =>
                  Filterdispatch({ type: "IN_STOCK", payload: inStock })
                }
              />
              <span className="inp-text">Include out Of Stock</span>
            </label>
          </div>
        </div>
      </div>

      {/* Mobile Sort  & filter layout */}
      {sortMob ? (
        <div className="filter-mob-layout">
          <h4 className="header">SORT BY</h4>
          <div className="clear-btn">
          <button
            className="links primary-outline"
            onClick={() => Filterdispatch({ type: "CLEAR" })}
          >
            Clear All
          </button>
          </div>
          
          <div className="sort-main ">
            <label className="select-input">
              <input
                type="checkbox"
                className="radio-input"
                name="sort"
                checked={bestSeller}
                onChange={(e) =>
                  e.target.checked
                    ? Filterdispatch({
                        type: "BESTSELLER",
                        payload: { bestSeller: true },
                      })
                    : Filterdispatch({
                        type: "BESTSELLER",
                        payload: { bestSeller: false },
                      })
                }
              />
              <span className="inp-text">Popularity </span>
            </label>
            <label className="select-input">
              <input
                type="radio"
                className="radio-input"
                name="sort"
                checked={sortBy === "LOW_TO_HIGH"}
                onChange={() => Filterdispatch({ type: "LOW_TO_HIGH" })}
              />
              <span className="inp-text">Price--Low to High </span>
            </label>
            <label className="select-input">
              <input
                type="radio"
                className="radio-input"
                name="sort"
                checked={sortBy === "HIGH_TO_LOW"}
                onChange={() => Filterdispatch({ type: "HIGH_TO_LOW" })}
              />
              <span className="inp-text">Price--High to Low </span>
            </label>
            <label className="select-input">
              <input
                type="checkbox"
                className="radio-input"
                checked={inStock}
                onChange={() =>
                  Filterdispatch({ type: "IN_STOCK", payload: inStock })
                }
              />
              <span className="inp-text">Include out Of Stock</span>
            </label>
          </div>
        </div>
      ) : (
        ""
      )}
      {filterMob ? (
        <div className="sort-mob-layout">
          <div className="filter-header">
            <h3>Filters</h3>
            <button
              className="links primary-outline"
              onClick={() => Filterdispatch({ type: "CLEAR" })}
            >
              Clear All
            </button>
          </div>

          <div className="filter-category center-hr">
            <h4 className="header">CATEGORY</h4>
            <div className="category-main">
              <label className="select-input">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  name="category"
                  checked={category.includes("Smartphone")}
                  onChange={(e) =>
                    Filterdispatch({
                      type: "CATEGORY_FILTER",
                      payload: {
                        category: "Smartphone",
                        isChecked: e.target.checked,
                      },
                    })
                  }
                />
                <span className="inp-text">Mobiles</span>
              </label>
              <label className="select-input">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  name="category"
                  checked={category.includes("Laptop")}
                  onChange={(e) =>
                    Filterdispatch({
                      type: "CATEGORY_FILTER",
                      payload: {
                        category: "Laptop",
                        isChecked: e.target.checked,
                      },
                    })
                  }
                />
                <span className="inp-text">Laptops</span>
              </label>
              <label className="select-input">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  name="category"
                  checked={category.includes("Television")}
                  onChange={(e) =>
                    Filterdispatch({
                      type: "CATEGORY_FILTER",
                      payload: {
                        category: "Television",
                        isChecked: e.target.checked,
                      },
                    })
                  }
                />
                <span className="inp-text">Television</span>
              </label>
              <label className="select-input">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  name="category"
                  checked={category.includes("HomeAppliances")}
                  onChange={(e) =>
                    Filterdispatch({
                      type: "CATEGORY_FILTER",
                      payload: {
                        category: "HomeAppliances",
                        isChecked: e.target.checked,
                      },
                    })
                  }
                />
                <span className="inp-text">Home Appliances</span>
              </label>
            </div>
          </div>

          <div className="filter-price center-hr">
            <h4 className="header">PRICE</h4>
            <div className="price-main ">
              <label htmlFor="slider-input">
                &#8377;0 - &#8377;{rangeValue}
              </label>
              <input
                type="range"
                className="slider-input"
                min="0"
                step={1000}
                max="50000"
                value={rangeValue}
                onChange={(e) =>
                  Filterdispatch({
                    type: "PRICE_RANGE",
                    payload: { rangeValue: e.target.value },
                  })
                }
              />
              <div className="slider-value"></div>
            </div>
          </div>
          <div className="filter-rating center-hr">
            <h4 className="header">CUSTOMER RATING</h4>
            <div className="rating-main ">
              <label className="select-input">
                <input
                  type="radio"
                  className="radio-input"
                  name="rating"
                  checked={ratingValue === "4"}
                  onChange={() =>
                    Filterdispatch({
                      type: "RATING",
                      payload: { ratingValue: "4" },
                    })
                  }
                />
                <span className="inp-text">
                  4 <i className="fa-solid fa-star"></i> & above
                </span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  className="radio-input"
                  name="rating"
                  checked={ratingValue === "3"}
                  onChange={() =>
                    Filterdispatch({
                      type: "RATING",
                      payload: { ratingValue: "3" },
                    })
                  }
                />
                <span className="inp-text">
                  3 <i className="fa-solid fa-star"></i> & above
                </span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  className="radio-input"
                  name="rating"
                  checked={ratingValue === "2"}
                  onChange={() =>
                    Filterdispatch({
                      type: "RATING",
                      payload: { ratingValue: "2" },
                    })
                  }
                />
                <span className="inp-text">
                  2 <i className="fa-solid fa-star"></i> & above
                </span>
              </label>
              <label className="select-input">
                <input
                  type="radio"
                  className="radio-input"
                  name="rating"
                  checked={ratingValue === "1"}
                  onChange={() =>
                    Filterdispatch({
                      type: "RATING",
                      payload: { ratingValue: "1" },
                    })
                  }
                />
                <span className="inp-text">
                  1 <i className="fa-solid fa-star"></i> & above
                </span>
              </label>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
       <div className="filter-buttons">
        <button
          id="sort-btn"
         onClick={()=> {setSortMob(!sortMob) ; setFilterMob(false)}}
          className="btn secondary-solid "
        >
          <i className="fas fa-sort"></i> Sort
        </button>
        <button
          id="filter-btn"
         onClick={()=>{setFilterMob(!filterMob) ; setSortMob(false)}}
          className="btn secondary-solid "
        >
          <i className="fas fa-filter"></i> Filter
        </button>
      </div>
    </>
  );
};
export { Filter };
