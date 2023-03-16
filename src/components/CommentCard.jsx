import { useContext, useState } from "react";
import { UserContext } from "../contexts/User.context";
import { deleteComment } from "../utils/api";
import { formatCreatedAt } from "../utils/formatCreatedAt";
import Votes from "./Votes";

const CommentCard = ({
  comment: { comment_id, body, author, votes, created_at },
}) => {
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [isDeleted, setIsDeleted] = useState(null);

  const { user } = useContext(UserContext);

  const formattedCreatedAt = formatCreatedAt(created_at);

  const handleCommentDeletion = () => {
    setPending(true);
    deleteComment(comment_id)
      .then(() => {
        setIsDeleted(true);
      })
      .catch(() => {
        setError("Couldn't delete this comment. Try again later.");
      })
      .finally(() => {
        setPending(false);
      });
  };

  if (isDeleted) {
    return (
      <li>
        <p className="comment-card__text--deleted">This comment is deleted</p>
      </li>
    );
  }

  return (
    <li>
      <article>
        <p>{author[0].toUpperCase()}</p>
        <p>
          {author} <time dateTime={created_at}>{formattedCreatedAt}</time>
        </p>
        <p>{body}</p>
        {error && <p className="comment-card__text--error">{error}</p>}
        <Votes comment_id={comment_id} votes={votes} />
        {author === user.username && (
          <button onClick={handleCommentDeletion} disabled={isPending}>
            {isPending ? "Deleting..." : "Delete"}
          </button>
        )}
      </article>
    </li>
  );
};

export default CommentCard;
