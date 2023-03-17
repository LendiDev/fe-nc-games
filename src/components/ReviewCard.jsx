import { Link } from "react-router-dom";
import { dashCaseToHumanReadableString } from "../utils/dashCaseToHumanReadableString";
import { truncateWithEllipses } from "../utils/truncateWithEllipses";
import { formatCreatedAt } from "../utils/formatCreatedAt";
import { IoPersonCircleOutline } from "react-icons/io5";
import Votes from "./Votes";
import CommentCount from "./CommentCount";

const ReviewCard = ({
  review: {
    review_id,
    title,
    category,
    owner,
    review_body,
    review_img_url,
    created_at,
    votes,
    comment_count,
  },
}) => {
  const formattedDate = formatCreatedAt(created_at);
  const categoryName = dashCaseToHumanReadableString(category);
  const shotDescription = truncateWithEllipses(review_body, 150);

  return (
    <li>
      <article className="review-card">
        <img className="review-card__image" src={review_img_url} alt={title} />
        <div className="review-card__content">
          <Link className="review-card__header__link" to={`/review/${review_id}`}>
            <h3>{title}</h3>
          </Link>
          <Link
            to={`/reviews/${category}`}
            className="review-card__category"
            aria-label={`Go to reviews in category ${categoryName}`}
          >
            {categoryName}
          </Link>
          <p className="review-card__author__info">
            <IoPersonCircleOutline className="single-review-author__icon" />
            {owner} <time dateTime={created_at}>{formattedDate}</time>
          </p>
          <p className="review-card__body">
            {shotDescription}
            <Link
              className="review-card__body__link"
              to={`/review/${review_id}`}
            >
              Read more
            </Link>
          </p>

          <div className="review-card__footer">
            <CommentCount comment_count={comment_count} />
            <Votes review_id={review_id} votes={votes} dividerPosition='left' />
          </div>
        </div>
      </article>
    </li>
  );
};

export default ReviewCard;
