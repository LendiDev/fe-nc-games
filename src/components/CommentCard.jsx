import { useEffect, useState } from "react";
import { fetchUser } from "../utils/api";
import { formatCreatedAt } from "../utils/formatCreatedAt";
import Votes from "./Votes";

const CommentCard = ({ comment: { body, author, votes, created_at } }) => {
  const [user, setUser] = useState({});
  const formattedCreatedAt = formatCreatedAt(created_at);

  useEffect(() => {
    fetchUser(author).then((user) => {
      setUser(user);
    });
  }, [author]);

  return (
    <li>
      <article>
        {user.avatar_url && (
          <img src={user.avatar_url} alt={`${author}'s avatar`} />
        )}
        <p>
          {author} on <time dateTime={created_at}>{formattedCreatedAt}</time>
        </p>
        <p>{body}</p>
        <Votes votes={votes} />
      </article>
    </li>
  );
};

export default CommentCard;
