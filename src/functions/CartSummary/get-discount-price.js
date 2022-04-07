const getDiscountPrice = (cart) => {
  return cart.reduce(
    (acc, curr) =>
      acc + (Number(curr.priceBefore) - Number(curr.price)) * Number(curr.qty),
    0
  );
};

export { getDiscountPrice };
