import React from "react";
import { Link } from "react-router-dom";
import Products from "../../../sharedComponents/Products/Products";

const HomeMenu = () => {
  return (
    <div className=" my-16">
      <div className="pb-16">
        <h5 className="text-lime-500  text-center ">Our Menu</h5>
        <h2 className="text-gray-900 text-5xl font-bold text-center">
          Popular Dishes
        </h2>
      </div>

      <Products limit="3" col={3} />

      <Link to="/allProducts">
        <button
          type="button"
          className="px-8 py-3 mt-12 block mx-auto font-bold border rounded border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-250"
        >
          See more
        </button>
      </Link>
    </div>
  );
};

export default HomeMenu;
