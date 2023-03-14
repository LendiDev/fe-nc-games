import { Link } from "react-router-dom";
import { BiComment } from "react-icons/bi";
import { dashCaseToHumanReadableString } from "../utils/dashCaseToHumanReadableString";
import { truncateWithEllipses } from "../utils/truncateWithEllipses";
import { formatCreatedAt } from "../utils/formatCreatedAt";
import Votes from "./Votes";

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
          <Link to={`/review/${review_id}`}>
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
            {owner} on <time datetime={created_at}>{formattedDate}</time>
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
            <div>
              <BiComment className="review-card__comments__icon" />
              {comment_count} comments
            </div>
            <Votes votes={votes} />
          </div>
        </div>
      </article>
    </li>
  );
};

export default ReviewCard;
