import { useContext } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Products from "../../sharedComponents/Products/Products";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";
import { useEffect } from "react";
import ReviewCard from "./ReviewCard/ReviewCard";

const ProductsDetail = () => {
  const [isReviewForm, setIsReviewForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const productDetail = useLoaderData();
  const { title, price, img, dec, _id } = productDetail[0];
  const { user } = useContext(AuthContext);

  // adding reviews to database
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const rating = form.rating.value;
    const email = user?.email;
    const photoUrl = user?.photoURL;
    const productId = _id;

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
      body: JSON.stringify({ email, review, rating, productId, photoUrl }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsReviewForm(!isReviewForm);
        setRefresh(!refresh);
        form.reset();
        if (data?.acknowledged) {
          toast.success("Thanks for your review", {
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

  //toggling add review form
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

  //getting review data

  useEffect(() => {
    fetch(`http://localhost:5000/review/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [_id, refresh]);

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
            <h3>Total Reviews: {reviews.length || "0"}</h3>
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
                    required
                    type="number"
                    name="rating"
                    placeholder="Rate this product out of 5"
                    className=" py-4 px-4 rounded-lg bg-[#f3f5ed] mb-4"
                  />
                  <textarea
                    required
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
          <div>
            {reviews.map((rev) => (
              <ReviewCard key={rev._id} rev={rev} />
            ))}
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
