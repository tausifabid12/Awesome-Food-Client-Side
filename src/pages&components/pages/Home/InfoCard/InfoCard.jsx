import React from "react";
import { FaTruck, FaCcAmazonPay } from "react-icons/fa";

const InfoCard = () => {
  return (
    <div className="w-full md:w-4/5 md:h-64 mx-auto rounded-lg grid grid-cols-1  md:grid-cols-3 shadow-xl md:relative md:-top-20 ">
      <div className="w-full h-full grid grid-cols-3 rounded-tl-lg rounded-bl-lg px-4 bg-white">
        <div className=" flex items-center">
          <span className="text-8xl text-lime-500 ">
            <FaTruck />
          </span>
        </div>
        <div className="col-span-2  flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Free delivery service
          </h2>
          <p className="text-md pt-4 text-center font-semibold text-gray-600">
            Enjoy Free Delivery on order over $50
          </p>
        </div>
      </div>
      {/* ---------------------- */}
      <div className="w-full h-full grid grid-cols-3 bg-lime-500 p-4">
        <div className=" flex items-center">
          <span className="text-8xl text-white ">
            <FaCcAmazonPay />
          </span>
        </div>
        <div className="col-span-2  flex flex-col items-center justify-center">
          <h2 className="text-2xl text-center font-bold text-white">
            Easy Payment
          </h2>
          <p className="text-md pt-4 text-center font-semibold text-gray-800">
            Make Payment with any card or mobile banking method
          </p>
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-3 rounded-tr-lg rounded-br-lg bg-gray-900 p-4 text-white">
        <div className=" flex items-center">
          <span className="text-8xl text-lime-500 ">
            <FaTruck />
          </span>
        </div>
        <div className="col-span-2  flex flex-col items-center justify-center">
          <h2 className="text-2xl text-center font-bold ">Exact calories</h2>
          <p className="text-md pt-4 text-center font-semibold ">
            Enjoy Free Delivery on order over $50
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
