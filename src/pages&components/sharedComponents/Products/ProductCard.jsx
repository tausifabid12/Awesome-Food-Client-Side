import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
// import { FaAngleRight } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { title, price, dec, img, _id } = product;
  return (
    <div className="flex flex-col w-full md:w-11/12 mx-auto p-2 space-y-6 overflow-hidden rounded-lg shadow-md text-gray-900 text-center bg-[#f3f5ed]">
      <div>
        <PhotoProvider>
          <PhotoView src={img}>
            <img
              src={img}
              alt=""
              className="object-cover w-full mb-4 h-60 sm:h-96  rounded-lg"
            />
          </PhotoView>
        </PhotoProvider>

        <h2 className="mb-1 text-2xl font-bold">{title}</h2>
        <p className="text-sm text-gray-800">
          {dec.length > 100 ? dec.slice(0, 100) : dec + "...."}{" "}
          {
            <Link
              to={`/productsDetails/${_id}`}
              className="hover:underline hover:text-red-600"
            >
              Read more
            </Link>
          }
        </p>
      </div>
      <div className="flex flex-wrap justify-between pb-4">
        <div className="space-x-2">
          <button
            aria-label="Share this post"
            type="button"
            className="p-2 text-lg font-bold text-red-600 text-center"
          >
            Price: ${price}
          </button>
        </div>
        <div className="flex space-x-2 text-sm text-gray-400">
          <Link to={`/productsDetails/${_id}`}>
            <button
              type="button"
              className="px-3 py-2 font-bold border rounded transition duration-200  border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              view details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
