import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User.context";
import { useIsMobile } from "../hooks/useIsMobile";

const Profile = () => {
  const { user } = useContext(UserContext);
  const isMobile = useIsMobile();

  return (
    <div className="main-header-profile">
      {user ? (
        <>
          <p className="main-header-profile__text">{user.username}</p>
          <img
            className="main-header-profile__image"
            src={user.avatar_url}
            alt={`Profile of ${user.username}`}
          />
          {!isMobile && (
            <Link className="logout__link" to="/user/logout">
              Logout
            </Link>
          )}
        </>
      ) : (
        <Link className="main-header-profile__link" to="/user/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Profile;
