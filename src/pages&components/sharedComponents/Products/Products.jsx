import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

const Products = ({ limit, col }) => {
  console.log(limit);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products", {
      headers: {
        limit: limit,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [limit]);
  return (
    <div
      className={`w-full grid grid-cols-1 md:grid-cols-${col} mx-auto gap-3`}
    >
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
