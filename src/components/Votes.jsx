import { useState } from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { updateComment, updateReview } from "../utils/api";

const Votes = ({ review_id, comment_id, votes, dividerPosition = "" }) => {
  const [votedCount, setVotedCount] = useState(0);

  const updateVotesBy = (increaseBy) => {
    const updateRequest = review_id ? updateReview : updateComment;
    const id = review_id || comment_id;

    setVotedCount((voted) => voted + increaseBy);
    updateRequest(id, {
      inc_votes: increaseBy,
    }).catch(() => {
      setVotedCount((voted) => voted - increaseBy);
    });
  };

  return (
    <div className={`votes votes__divider--${dividerPosition}`}>
      <button
        className="votes__button votes__downvote"
        onClick={() => updateVotesBy(-1)}
        disabled={votedCount <= -1}
      >
        <BiDownvote
          className={`votes__icon votes__downvote${
            votedCount === -1 ? "--disabled" : ""
          }`}
          aria-label="Down vote this review"
        />
      </button>
      <p aria-label={`${votes + votedCount} review votes`}>
        {votes + votedCount}
      </p>
      <button
        className="votes__button votes__upvote"
        onClick={() => updateVotesBy(1)}
        disabled={votedCount >= 1}
      >
        <BiUpvote
          className={`votes__icon votes__upvote${
            votedCount === 1 ? "--disabled" : ""
          }`}
          aria-label="Up vote this review"
        />
      </button>
    </div>
  );
};

export default Votes;
