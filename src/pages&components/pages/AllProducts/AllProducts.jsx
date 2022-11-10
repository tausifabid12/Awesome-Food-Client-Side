import React from "react";

import productImg from "../../../assets/allProducts.jpg";
import ProductCard from "../../sharedComponents/Products/Products";

const AllProducts = () => {
  const allProductBgImgStyles = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url( ${productImg})`,
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
  };
  return (
    <div>
      <div
        style={allProductBgImgStyles}
        className="flex flex-col items-center justify-center h-80"
      >
        <h4 className="text-5xl text-white font-bold"> All Products</h4>
      </div>
      <div className="my-20">
        <ProductCard col={3} />
      </div>
    </div>
  );
};

export default AllProducts;
