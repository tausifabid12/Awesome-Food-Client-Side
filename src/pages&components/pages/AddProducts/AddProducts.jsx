import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProducts = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const ratings = form.ratings.value;
    const cat = form.category.value;
    const price = form.price.value;
    const dec = form.description.value;
    const title = form.title.value;

    const data = { title, img, ratings, cat, price, dec };
    fetch("https://awesome-food-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate("/allProducts");
          toast.success("Product Added Successfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  return (
    <section className="  text-gray-900 py-20">
      <form
        onSubmit={handleSubmit}
        className="container  flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md  ">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="text-3xl font-semibold text-red-600">Add Products</p>
            <p className="text-xs">
              You can Your Products so that other users can review that.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                title
              </label>
              <input
                name="title"
                id="title"
                type="text"
                placeholder="title"
                className="w-full bg-[#f3f5ed] h-12 pl-2 shadow-md rounded-md    border-gray-900 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                price
              </label>
              <input
                name=""
                id="price"
                type="text"
                placeholder="price"
                className="w-full bg-[#f3f5ed] h-12 pl-2 shadow-md rounded-md   focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="text" className="text-sm">
                category
              </label>
              <input
                name="category"
                id="text"
                type="category"
                placeholder="category"
                className="w-full bg-[#f3f5ed] h-12 pl-2 shadow-md rounded-md   focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="text" className="text-sm">
                description
              </label>
              <input
                name="description"
                id="description"
                type="text"
                placeholder="description"
                className="w-full bg-[#f3f5ed] h-12 pl-2 shadow-md rounded-md   focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="text" className="text-sm">
                ratings
              </label>
              <input
                name="ratings"
                id="ratings"
                type="text"
                placeholder="ratings"
                className="w-full bg-[#f3f5ed] h-12 pl-2 shadow-md rounded-md   focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="text" className="text-sm">
                Image Url
              </label>
              <input
                name="img"
                id="img"
                type="text"
                placeholder="img"
                className="w-full bg-[#f3f5ed] h-12 pl-2 shadow-md rounded-md   focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>

            <button
              type="submit"
              className=" col-span-full mt-5 mx-auto py-3 px-4 rounded-md text-white font-bold  bg-red-600 hover:bg-lime-500"
            >
              Add Products
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddProducts;
