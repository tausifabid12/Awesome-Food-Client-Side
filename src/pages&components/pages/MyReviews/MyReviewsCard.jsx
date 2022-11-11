import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const MyReviewsCard = ({ myReview, refresh, setRefresh }) => {
  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const { img, title } = product;
  //   console.log(product[0].title);
  const { rating, review, productId, _id } = myReview;
  //   /productsDetails/:id
  useEffect(() => {
    fetch(`https://awesome-food-server.vercel.app/productsDetails/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data[0]);
        console.log(data, "this is from priducts");
      });
  }, [productId]);

  const handleDelete = () => {
    const ans = window.confirm("do really want to delete");
    if (!ans) {
      return;
    }
    fetch(`https://awesome-food-server.vercel.app/userReview/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setRefresh(!refresh);
          toast.success(" Review Deleted", {
            position: "top-center",
            autoClose: 4000,
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

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const review = form.review.value;

    fetch(`https://awesome-food-server.vercel.app/userReview/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ rating, review }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setIsOpen(!isOpen);
          setRefresh(!refresh);
          toast.success(" Review Updated", {
            position: "top-center",
            autoClose: 4000,
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
    <div>
      <div className="container mb-10 flex flex-col h-auto w-4/5 p-6 mx-auto divide-y rounded-md divide-gray-700 shadow-md  text-gray-900">
        <div className="flex justify-between p-4 relative">
          <div className="flex items-center space-x-4">
            <div>
              <img
                src={img || "https://source.unsplash.com/100x100/?food"}
                alt=""
                className="object-cover w-24 h-24 rounded-2xl bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold text-xl">{title || ""}</h4>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-lime-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">{rating}</span>
          </div>
          {/* modal body start  */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-2 z-10 left-1/2`}
          >
            <div className="flex flex-col relative max-w-2xl bg-white p-8 shadow-2xl mx-auto rounded-xl lg:p-12  text-gray-900">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute top-2 right-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                </svg>
              </button>
              <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl text-lime-500 pb-8 font-semibold text-center">
                  Update your opinion
                </h2>

                <form
                  onSubmit={handleUpdateSubmit}
                  className="flex flex-col w-full"
                >
                  <input
                    defaultValue={rating}
                    type="number"
                    name="rating"
                    placeholder="Rate this product out of 5"
                    className=" py-4 px-4 rounded-lg bg-[#f3f5ed] mb-4"
                  />
                  <textarea
                    defaultValue={review}
                    rows="3"
                    name="review"
                    placeholder="Review..."
                    className="p-4 rounded-md resize-none bg-[#f3f5ed] text-gray-900 border-1 border-gray-900"
                  ></textarea>
                  <button
                    type="submit"
                    className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-lime-500"
                  >
                    Update feedback
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* modal body end  */}
        </div>
        <div className="p-4 space-y-2 text-sm text-gray-800 relative">
          <div className="absolute flex text-xl space-x-3  top-1 right-4">
            <span
              onClick={() => setIsOpen(!isOpen)}
              className="text-lime-500 cursor-pointer"
            >
              <FaEdit />
            </span>
            <span
              onClick={handleDelete}
              className="text-red-600 cursor-pointer"
            >
              <FaTrash />
            </span>
          </div>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default MyReviewsCard;
