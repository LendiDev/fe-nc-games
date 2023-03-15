import { formatCreatedAt } from "../utils/formatCreatedAt";
import Votes from "./Votes";

const CommentCard = ({ comment: { comment_id, body, author, votes, created_at } }) => {
  const formattedCreatedAt = formatCreatedAt(created_at);

  return (
    <li>
      <article>
        <p>{author[0].toUpperCase()}</p>
        <p>
          {author} <time dateTime={created_at}>{formattedCreatedAt}</time>
        </p>
        <p>{body}</p>
        <Votes comment_id={comment_id} votes={votes} />
      </article>
    </li>
  );
};

export default CommentCard;
