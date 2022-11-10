import { useContext } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Products from "../../sharedComponents/Products/Products";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";

const ProductsDetail = () => {
  const productDetail = useLoaderData();
  const { title, price, img, dec, _id } = productDetail[0];
  const [isReviewForm, setIsReviewForm] = useState(false);
  const { user } = useContext(AuthContext);

  // adding reviews to database
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const rating = form.rating.value;
    const email = user?.email;

    if (parseInt(rating) > 5) {
      toast.error("you have to rate this product out of 5", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, review, rating, _id }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleReviewClick = () => {
    if (user?.email) {
      setIsReviewForm(!isReviewForm);
    } else {
      toast.error("Please login to leave a review", {
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
  };

  return (
    <div className="p-12">
      <section className=" grid grid-cols-1 lg:grid-cols-3  text-gray-900">
        <div>
          <img src={img} className="rounded-lg h-full lg:h-96 w-full" alt="" />
        </div>
        <div className="col-span-2 py-12 px-24 space-y-4">
          <h2 className="text-4xl font-bold ">{title}</h2>
          <h4 className="text-2xl text-red-600"> ${price}</h4>
          <p>{dec}</p>
        </div>
      </section>

      <section className="grid grid-cols-3 my-24 ">
        <div className="col-span-2">
          <div className="flex justify-between font-bold w-4/5 mx-auto py-5">
            <h3>Total Reviews: </h3>
            <button
              onClick={handleReviewClick}
              className="bg-lime-500 py-2 px-5 rounded-md text-white"
            >
              Add review
            </button>
          </div>
          {/* review input field start */}
          <div className={isReviewForm ? "block" : "hidden"}>
            <div className="flex flex-col relative max-w-xl p-8 shadow-2xl mx-auto rounded-xl lg:p-12  text-gray-900">
              <button
                onClick={handleReviewClick}
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
                <h2 className="text-3xl text-lime-500 font-semibold text-center">
                  Your opinion matters!
                </h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                  <span className="text-center">How was your experience?</span>
                </div>
                <form
                  onSubmit={handleReviewSubmit}
                  className="flex flex-col w-full"
                >
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rate this product out of 5"
                    className=" py-4 px-4 rounded-lg bg-[#f3f5ed] mb-4"
                  />
                  <textarea
                    rows="3"
                    name="review"
                    placeholder="Review..."
                    className="p-4 rounded-md resize-none bg-[#f3f5ed] text-gray-900 border-1 border-gray-900"
                  ></textarea>
                  <button
                    type="submit"
                    className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-lime-500"
                  >
                    Leave feedback
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* review input field end */}
          <div className="container  flex flex-col h-auto w-4/5 p-6 mx-auto divide-y rounded-md divide-gray-700 shadow-2xl  text-gray-900">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                  <span className="text-xs text-gray-400">2 days ago</span>
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
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-400">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan
                feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-full h-screen overflow-scroll">
          <h4 className="text-center text-red-600 text-3xl font-bold py-5">
            Related Products
          </h4>
          <Products limit="3" col={1} />
        </div>
      </section>
    </div>
  );
};

export default ProductsDetail;
