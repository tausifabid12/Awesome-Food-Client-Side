import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

const Products = ({ limit, col }) => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch("https://awesome-food-server.vercel.app/products", {
      headers: {
        limit: limit,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoaded(true);
      });
  }, [limit]);
  return (
    <div>
      <div className={loaded ? "hidden" : "block"}>
        <div className="min-w-full  flex items-center justify-center ">
          <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
        </div>
      </div>
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-${col} mx-auto gap-3`}
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
