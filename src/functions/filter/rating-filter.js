const ratingFilter = (data, { ratingValue }) => {
  if (ratingValue) {
    return data.filter(
      (product) => Number(product.rating) >= Number(ratingValue)
    );
  } else {
    return data;
  }
};
export { ratingFilter };
