// import { useState, useEffect } from "react";

import { products } from "../data/products";
import Product from "../components/Product";
// import axios from "axios";

export default function HomeScreen() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await axios.get("/api/products");
  //     setProducts(res);
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {products.map((product, i) => (
        <Product key={i} product={product} />
      ))}
    </div>
  );
}
