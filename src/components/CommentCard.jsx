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
  const isLoggedInUserComment = author === user.username;

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
      <li className="comment-card__deleted">
        <p className="comment-card__text--deleted">Your comment is deleted</p>
      </li>
    );
  }

  return (
    <li className="comment-card__list-item">
      <article className="comment-card">
        <div className="comment-card__header">
          <div className="comment-card__initials">
            <p className="comment-card__initials__letter">{author[0]}</p>
          </div>
          <p>
            {author} <time dateTime={created_at}>{formattedCreatedAt}</time>
          </p>
        </div>
        <p className="comment-card__body">{body}</p>
        {error && <p className="comment-card__text--error">{error}</p>}
        <div className="comment-card__actions">
          <Votes
            comment_id={comment_id}
            votes={votes}
            dividerPosition={isLoggedInUserComment && 'right'}
          />
          {isLoggedInUserComment && (
            <button
              className="comment-card__button__delete"
              onClick={handleCommentDeletion}
              disabled={isPending}
            >
              {isPending ? "Deleting..." : "Delete"}
            </button>
          )}
        </div>
      </article>
    </li>
  );
};

export default CommentCard;
