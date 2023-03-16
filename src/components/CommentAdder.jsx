import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User.context";
import { postNewComment } from "../utils/api";
import LoadingSpinner from "./LoadingSpinner";

const CommentAdder = ({ review_id, setComments }) => {
  const [commentBody, setCommentBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useContext(UserContext);

  const handleSubmitComment = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    postNewComment(review_id, { body: commentBody, username: user.username })
      .then((comment) => {
        setComments((comments) => {
          return [{ ...comment, created_at: "just now" }, ...comments];
        });
        setCommentBody("");
      })
      .catch(() => {
        setError("Something went wrong. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCommentBodyChange = (e) => {
    setCommentBody(e.target.value);
  };

  if (!user) {
    return <div className="comment-adder__login-first">
      <p>
      Please <Link to='/user/login'>log in</Link> to your account to leave a comment on this review.
      </p>
    </div>
  }

  return (
    <form className="comment-adder__form" onSubmit={handleSubmitComment}>
      <textarea
        className="comment-adder__textarea"
        id="comment_body"
        rows="3"
        value={commentBody}
        aria-placeholder="What do you think about this review? Leave a comment"
        placeholder="What do you think about this review? Leave a comment"
        onChange={handleCommentBodyChange}
        disabled={isLoading}
      />

      <div className="comment-adder__action__container">
        <button
          className="comment-adder__button"
          type="submit"
          disabled={isLoading || commentBody.length < 1}
        >
          Add comment
        </button>
        {isLoading && <LoadingSpinner size={25} borderWidth={5} />}
      </div>
      {error && <p className="comment-adder__error">{error}</p>}
    </form>
  );
};

export default CommentAdder;
