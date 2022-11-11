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
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/userReview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyReviews(data);
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
    </div>
  );
};

export default MyReviews;