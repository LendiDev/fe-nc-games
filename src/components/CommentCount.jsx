import { BiComment } from "react-icons/bi";

const CommentCount = ({ comment_count }) => {
  return (
    <div className="comment-count">
      <BiComment className="comment-count__icon" />
      {comment_count} comments
    </div>
  );
};

export default CommentCount;
