import React from "react";

const Gallery = () => {
  return (
    <section className="py-6  text-gray-900">
      <h1 className="text-center text-5xl font-bold  pt-10">Gallery</h1>
      <h1 className="text-center  pb-7 ">Watch Our latest photos </h1>

      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src="https://source.unsplash.com/random/301x301/"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-900 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-900 aspect-square"
          src="https://source.unsplash.com/random/200x200/?0"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-900 aspect-square"
          src="https://source.unsplash.com/random/200x200/?1"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-900 aspect-square"
          src="https://source.unsplash.com/random/200x200/?2"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-900 aspect-square"
          src="https://source.unsplash.com/random/200x200/?3"
        />
      </div>
    </section>
  );
};

export default Gallery;
