import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";

import ReviewCard from "./ReviewCard";
import SectionHeader from "./SectionHeader";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviews().then((reviewsData) => {
      setIsLoading(false);
      setReviews(reviewsData.reviews);
    });
  }, []);

  return (
    <section>
      <SectionHeader title="Reviews" />
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
