import { useState } from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";

const Votes = ({ votes }) => {
  // TODO: handle server handled votes
  // eslint-disable-next-line no-unused-vars
  const [votesCount, setVotesCount] = useState(votes);

  return (
    <div className="votes">
      <button className="votes__button votes__downvote">
        <BiDownvote
          className="votes__icon votes__downvote"
          aria-label="Down vote this review"
        />
      </button>
      <p aria-label="rating">{votesCount}</p>
      <button className="votes__button votes__upvote">
        <BiUpvote
          className="votes__icon votes__upvote"
          aria-label="Up vote this review"
        />
      </button>
    </div>
  );
};

export default Votes;
