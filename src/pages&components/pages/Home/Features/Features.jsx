import React from "react";
import aboutImg from "../../../../assets/about.jpg";
import { FaClock, FaPhone } from "react-icons/fa";

const Features = () => {
  return (
    <section className="bg-white text-gray-900 mx-auto w-4/5 py-20">
      <div className="container flex flex-col mx-auto lg:flex-row">
        <div className="w-full md:w-1/2">
          <img src={aboutImg} className="w-full h-full rounded-lg" alt="" />
        </div>
        <div className="flex flex-col w-full lg:w-2/3 md:p-16 p-4 space-y-8">
          <h2 className="text-4xl font-bold leading-none">
            Healthy and tasty foods with
          </h2>
          <h3 className="text-lime-500 text-4xl font-bold ">
            natural ingredients
          </h3>
          <p className="mt-4 mb-8 text-sm">
            Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam
            malesuada eros nec luctus laoreet. Fusce sodales consequat velit
            eget dictum
          </p>
          <div className="flex items-center">
            <span className="text-lime-500 text-4xl">
              <FaClock />
            </span>
            <span className="font-bold ml-5">Every day from 8:00 to 12:00</span>
          </div>
          <div className="flex items-center ">
            <span className="text-lime-500 text-4xl">
              <FaPhone />
            </span>
            <span className="font-bold ml-5">+880 1789900000</span>
          </div>
          <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl transition duration-200 bg-red-500 text-white hover:bg-lime-500">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
