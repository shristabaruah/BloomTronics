const inStockFilter = (data, state) => {
  if (state.inStock) {
    return data;
  }
  return data.filter((product) => product.inStock === true);
};
export { inStockFilter };
