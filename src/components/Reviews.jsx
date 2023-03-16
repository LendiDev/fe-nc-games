import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";
import LoadingSpinner from "./LoadingSpinner";
import ReviewCard from "./ReviewCard";

const Reviews = ({ searchParams, category, error, setError }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setReviews([]);
    fetchReviews({ category, searchParams })
      .then((reviewsData) => {
        setIsLoading(false);
        setReviews(reviewsData.reviews);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          if (error.response.data.message.includes("Category")) {
            setError({
              title: "Category not found.",
              message:
                "Oops, it seems like the reviews category you are looking for doesn't exist",
            });
          }
        } else {
          setError("Something went wrong. couldn't fetch reviews.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [category, searchParams, setError]);

  return (
    <section>
      {error && <p>{error}</p>}
      {isLoading ? (
        <LoadingSpinner flexLoading size={50} borderWidth={8} topOffset={50} />
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
