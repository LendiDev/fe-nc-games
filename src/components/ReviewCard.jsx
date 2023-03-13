import { Link } from "react-router-dom";
import { dashCaseToHumanReadableString } from "../utils/dashCaseToHumanReadableString";

const ReviewCard = ({
  review: {
    review_id,
    title,
    category,
    designer,
    owner,
    review_body,
    review_img_url,
    created_at,
    votes,
    comment_count,
  },
}) => {
  return (
    <li>
      <article>
        <p>{review_img_url}</p>

        <Link to={`/review/{review_id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{dashCaseToHumanReadableString(category)}</p>

        <p>
          Reviewed by: {owner} at {created_at}
        </p>

        <p>{review_body}</p>
        <Link to={`/review/{review_id}`}>Read more...</Link>
        <p>
          Board game designer by: {designer} | Comments: {comment_count} |
          Votes: {votes}
        </p>
      </article>
    </li>
  );
};

export default ReviewCard;
