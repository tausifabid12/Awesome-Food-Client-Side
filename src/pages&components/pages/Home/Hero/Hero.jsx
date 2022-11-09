import React from "react";
import heroImg from "../../../../assets/hero.jpg";

const Hero = () => {
  const heroBgImgStyles = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url( ${heroImg})`,
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
  };

  return (
    <section style={heroBgImgStyles} className="bg-gray-800 text-gray-100">
      <div className="container h-screen mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Awesome
          <span className="text-lime-500"> Healthy Food</span> Delivery
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Get the best deal of town and enjoy the glory.
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg  font-semibold rounded bg-red-700 text-white">
            Get started
          </button>
          <button className="px-8 py-3 m-2 text-lg font-semibold  rounded text-white bg-lime-500">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
