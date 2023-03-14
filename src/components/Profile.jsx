import { useContext } from "react";
import { UserContext } from "../contexts/User.context";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="main-header__profile">
      <p className="main-header__profile__text">{user.username}</p>
      <img
        className="main-header__profile__image"
        src={user.avatar_url}
        alt=""
      />
    </div>
  );
};

export default Profile;
