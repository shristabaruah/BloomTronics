const bestsellerFilter = (data, { bestSeller }) => {
  if (bestSeller) {
    return data.filter((products) => products.badge === "BESTSELLER");
  } else {
    return data;
  }
};

export { bestsellerFilter };
