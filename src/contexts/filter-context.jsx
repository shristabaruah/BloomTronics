import { createContext } from "react";
import { useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filter-reducer";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [Filterstate, Filterdispatch] = useReducer(filterReducer, {
    sortBy: "",
    rangeValue: 50000,
    inStock: false,
    bestSeller: false,
    category: [],
    ratingValue: "",
  });

  return (
    <FilterContext.Provider value={{ Filterstate, Filterdispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
