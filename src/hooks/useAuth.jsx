import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/User.context";
import { fetchUser } from "../utils/api";

const useAuth = () => {
  const { user, setUser, authChecked, setAuthChecked } =
    useContext(UserContext);

  const useCheckAuth = () => {
    useEffect(() => {
      if (!localStorage.getItem("visited")) {
        login({
          username: "happyamy2016",
          name: "Amy Happy",
          avatar_url:
            "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
        });
        localStorage.setItem("visited", true);
        setAuthChecked(true);
        return;
      }

      if (localStorage.getItem("user")) {
        const userDataString = localStorage.getItem("user");
        const userData = JSON.parse(userDataString);
        setUser(userData);

        // fetch updates of the user details
        fetchUser(userData.username).then((user) => {
          setUser(user);
          setAuthChecked(true);
        });
      } else {
        setAuthChecked(true);
      }
    }, []);
  };

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user", null);
  };

  return { user, login, logout, useCheckAuth, authChecked, setAuthChecked };
};

export default useAuth;
