const priceRange = (data, { rangeValue }) => {
  return data.filter((product) => Number(product.price) <= Number(rangeValue));
};

export { priceRange };
