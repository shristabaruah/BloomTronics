const filterReducer = (state, action) => {

  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.type };
    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.type };
    case "PRICE_RANGE":
      return { ...state, rangeValue: action.payload.rangeValue };
    case "IN_STOCK":
      return { ...state, inStock: !action.payload };
    case "BESTSELLER":
      return { ...state, bestSeller: action.payload.bestSeller };
    case "CATEGORY_FILTER":
      if (!state.category.includes(action.payload.category)) {
        return {
          ...state,
          category: [...state.category, action.payload.category],
        };
      } else {
        const removeCategory = state.category.find(
          (categories) => categories === action.payload.category
        );
        const newCategory = state.category.filter(
          (categories) => categories !== removeCategory
        );
        return { ...state, category: newCategory };
      }
    case "RATING":
      return { ...state, ratingValue: action.payload.ratingValue };
    case "CLEAR":
      return {
        sortBy: "",
        rangeValue: 50000,
        inStock: false,
        bestSeller: false,
        category: [],
        ratingValue: "",
      };
    default:
      return state;
  }
};

export { filterReducer };
