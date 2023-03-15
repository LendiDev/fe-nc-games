import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";

const Reviews = ({ searchParams }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchReviews({ searchParams })
      .then((reviewsData) => {
        setIsLoading(false);
        setReviews(reviewsData.reviews);
      })
      .catch(() => {
        setError("Something went wrong. couldn't fetch reviews.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  return (
    <section>
      {error && <p>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <ReviewCard key={review.review_id} review={review} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Reviews;
