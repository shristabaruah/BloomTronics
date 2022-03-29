import axios from "axios";

const getProducts = async (dataDispatch) => {
  try {
    const response = await axios.get("/api/products");
    dataDispatch({
      type: "NO_FILTER_DATA ",
      payload: response.data.products,
    });
    console.log(dataState);
  } catch (e) {
    console.log("ERROR:", e);
  }
  return dataDispatch;
};

export { getProducts };
