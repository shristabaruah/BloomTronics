const getTotalPrice = (cart) => {
  return cart.reduce(
    (acc, curr) => acc + Number(curr.qty) * Number(curr.price),
    0
  );
};

export { getTotalPrice };
