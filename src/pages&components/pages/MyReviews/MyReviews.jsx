import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import productImg from "../../../assets/allProducts.jpg";
import { AuthContext } from "../../../contexts/AuthProvider";
import MyReviewsCard from "./MyReviewsCard";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://awesome-food-server.vercel.app/userReview?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
        setLoaded(true);
      });
  }, [user?.email, refresh]);

  const reviewsBgImgStyles = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url( ${productImg})`,
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
  };
  return (
    <div>
      <div
        style={reviewsBgImgStyles}
        className="flex flex-col items-center justify-center h-80"
      >
        <h4 className="text-5xl text-white font-bold"> My Reviews</h4>
      </div>

      {myReviews.length === 0 && loaded ? (
        <div className="h-80 w-full text-gray-700 text-7xl font-bold flex items-center justify-center">
          No Review Added !!!!!
        </div>
      ) : (
        <div>
          {myReviews.map((myReview) => (
            <MyReviewsCard
              key={myReview._id}
              myReview={myReview}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          ))}
        </div>
      )}
      <div className={loaded ? "hidden" : "block"}>
        <div className="w-full flex items-center justify-center">
          <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
