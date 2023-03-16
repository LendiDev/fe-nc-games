import { useState } from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { updateComment, updateReview } from "../utils/api";

const Votes = ({ review_id, comment_id, votes: originalVotes, dividerPosition = '' }) => {
  const [votesCount, setVotesCount] = useState(originalVotes);

  const votesDifference = votesCount - originalVotes;

  const handleUpVote = () => {
    updateVotesBy(1);
  };

  const handleDownVote = () => {
    updateVotesBy(-1);
  };

  const updateVotesBy = (increaseBy) => {
    const newVotesDifference = votesDifference + increaseBy;

    if (newVotesDifference > 1 || newVotesDifference < -1) {
      return;
    }

    const updateRequest = review_id ? updateReview : updateComment;
    const id = review_id || comment_id;

    setVotesCount((currentVotesCount) => currentVotesCount + increaseBy);
    updateRequest(id, {
      inc_votes: increaseBy,
    }).catch(() => {
      setVotesCount((currentVotesCount) => currentVotesCount - increaseBy);
    });
  };

  const votesColorStyle =
    votesDifference === 0
      ? ""
      : votesDifference > 0
      ? "votes--voted_up"
      : "votes--voted_down";

  return (
    <div className={`votes votes__divider--${dividerPosition}`}>
      <button
        className="votes__button votes__downvote"
        onClick={handleDownVote}
      >
        <BiDownvote
          className={`votes__icon votes__downvote ${
            votesDifference < 0 ? "votes--voted_down" : ""
          }`}
          aria-label="Down vote this review"
        />
      </button>
      <p className={votesColorStyle} aria-label={`${votesCount} review votes`}>
        {votesCount}
      </p>
      <button className="votes__button votes__upvote" onClick={handleUpVote}>
        <BiUpvote
          className={`votes__icon votes__upvote ${
            votesDifference > 0 ? "votes--voted_up" : ""
          }`}
          aria-label="Up vote this review"
        />
      </button>
    </div>
  );
};

export default Votes;
