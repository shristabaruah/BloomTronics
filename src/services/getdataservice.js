import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = () => {
  const [products, setProducts] = useState([]);

  useEffect(
    () =>
      (async () => {
        try {
          const response = await axios.get("/api/products");
          setProducts(() => response.data.products);
        } catch (e) {
          console.log("error:", e);
        }
      })(),
    []
  );
  return products;
};
export { useFetchData };
