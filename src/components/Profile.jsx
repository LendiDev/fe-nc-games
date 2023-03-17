import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useIsMobile } from "../hooks/useIsMobile";

const Profile = () => {
  const { user, logout, authChecked } = useAuth();
  const isMobile = useIsMobile();

  const handleLogout = () => {
    logout(null);
  };

  return (
    <div className="main-header-profile">
      {user && authChecked && (
        <>
          <p className="main-header-profile__text">{user.username}</p>
          <img
            className="main-header-profile__image"
            src={user.avatar_url}
            alt={`Profile of ${user.username}`}
          />
          {!isMobile && (
            <button
              className="main-header-profile__link"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </>
      )}
      {!user && authChecked && (
        <Link className="main-header-profile__link" to="/user/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Profile;
