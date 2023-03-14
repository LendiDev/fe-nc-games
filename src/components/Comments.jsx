import { useEffect, useState } from "react";
import { fetchCommentsForReview, fetchUsers } from "../utils/api";
import CommentAdder from "./CommentAdder";
import CommentCard from "./CommentCard";
import SectionHeader from "./SectionHeader";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCommentsForReview(review_id)
      .then(({ comments }) => {
        setComments(comments);
      })
      .catch(() => {
        setError("Something went wrong. Couldn't fetch comments.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [review_id]);

  return (
    <section>
      <SectionHeader title="Comments" />
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && !error && (
        <CommentAdder setComments={setComments} review_id={review_id} />
      )}
      {comments && comments.length > 0 && (
        <ul>
          {comments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))}
        </ul>
      )}
      {comments && comments.length === 0 && <p>No comments yet.</p>}
    </section>
  );
};

export default Comments;
