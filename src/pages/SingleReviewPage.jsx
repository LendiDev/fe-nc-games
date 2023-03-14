import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorSection from "../components/ErrorSection";
import SingleReviewCard from "../components/SingleReviewCard";
import { fetchReview } from "../utils/api";

const SingleReviewPage = () => {
  const { review_id } = useParams();

  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReview(review_id)
      .then((reviewData) => {
        setReview(reviewData);
      })
      .catch((error) => {
        if (error.response.status === 404 || error.response.status === 400) {
          setError({
            message: "Review not found.",
          });
        } else {
          setError({
            message: "Couldn't fetch a review.",
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [review_id]);

  return (
    <main>
      {error && <ErrorSection message={error.message} />}
      {isLoading && <p>Loading...</p>}
      {review && <SingleReviewCard review={review} />}
    </main>
  );
};

export default SingleReviewPage;
