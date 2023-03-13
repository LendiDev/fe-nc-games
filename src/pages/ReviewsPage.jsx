import { useEffect, useState } from "react";
import Reviews from "../components/Reviews";
import { fetchReviews } from "../utils/api";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews().then((reviewsData) => {
      setReviews(reviewsData.reviews);
    });
  }, []);

  return (
    <main>
      <Reviews reviews={reviews} />
    </main>
  );
};

export default ReviewsPage;
