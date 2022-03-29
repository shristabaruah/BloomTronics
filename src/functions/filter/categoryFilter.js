const categoryFilter = (data, state) => {
  const selectedCategories = data.filter((product) =>
    state.category.includes(product.categoryName)
  );
  if (selectedCategories.length <= 0) {
    return data;
  }
  return selectedCategories;
};
export { categoryFilter };
