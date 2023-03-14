import { useEffect, useState } from "react";
import { fetchUser, postNewComment } from "../utils/api";
import { formatCreatedAt } from "../utils/formatCreatedAt";
import Votes from "./Votes";

const CommentCard = ({ comment: { body, author, votes, created_at } }) => {
  const formattedCreatedAt = formatCreatedAt(created_at);

  return (
    <li>
      <article>
        <p>{author[0].toUpperCase()}</p>
        <p>
          {author} <time dateTime={created_at}>{formattedCreatedAt}</time>
        </p>
        <p>{body}</p>
        <Votes votes={votes} />
      </article>
    </li>
  );
};

export default CommentCard;
