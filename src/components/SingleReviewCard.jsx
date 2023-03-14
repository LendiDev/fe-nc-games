import { dashCaseToHumanReadableString } from "../utils/dashCaseToHumanReadableString";
import { formatCreatedAt } from "../utils/formatCreatedAt";
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
    votes,
    comment_count,
  },
}) => {
  const formattedDate = formatCreatedAt(created_at);
  const categoryName = dashCaseToHumanReadableString(category);

  return (
    <section>
      <article>
        <SectionHeader title={title} />
        <p>{categoryName}</p>
        <p>
          {owner} <time dateTime={created_at}>{formattedDate}</time>
        </p>
        <img src={review_img_url} alt={title} />
        <p>{review_body}</p>
        <p>
          Designed by: {designer} |
          <CommentsCount comment_count={comment_count} />
          <Votes review_id={review_id} votes={votes} />
        </p>
      </article>
    </section>
  );
};

export default SingleReviewCard;
