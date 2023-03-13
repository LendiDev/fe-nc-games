import ReviewCard from "./ReviewCard";
import SectionHeader from "./SectionHeader";

const Reviews = ({ reviews }) => {
  return (
    <section>
      <SectionHeader title="Reviews" />
      <ul>
        {reviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
