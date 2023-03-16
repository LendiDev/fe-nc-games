import { Link } from "react-router-dom";
import { dashCaseToHumanReadableString } from "../utils/dashCaseToHumanReadableString";
import { formatCreatedAt } from "../utils/formatCreatedAt";
import { IoPersonCircleOutline } from "react-icons/io5";
import CommentsCount from "./CommentCount";
import SectionHeader from "./SectionHeader";
import Votes from "./Votes";

const SingleReviewCard = ({
  review: {
    review_id,
    title,
    category,
    designer,
    owner,
    review_body,
    review_img_url,
    created_at,
    comment_count,
    votes,
  },
  commentsLength,
}) => {
  const formattedDate = formatCreatedAt(created_at);
  const categoryName = dashCaseToHumanReadableString(category);

  return (
    <section>
      <article className="single-review">
        <SectionHeader className="single-review__header" title={title} />
        <p className="single-review__author">
          <IoPersonCircleOutline className="single-review-author__icon" />
          {owner} <time dateTime={created_at}>{formattedDate}</time>
        </p>
        <Link
          to={`/reviews/${category}`}
          className="review-card__category"
          aria-label={`Go to reviews in category ${categoryName}`}
        >
          {categoryName}
        </Link>

        <img
          className="single-review__image"
          src={review_img_url}
          alt={title}
        />
        <p className="review-card__body">{review_body}</p>
        <p className="review-card__body">Designed by: {designer}</p>
        <div className="review-card__footer">
          <CommentsCount
            comment_count={commentsLength || comment_count}
          />
          <Votes review_id={review_id} votes={votes} dividerPosition='left' />
        </div>
      </article>
    </section>
  );
};

export default SingleReviewCard;
