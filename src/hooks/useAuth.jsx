import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/User.context";
import { fetchUser } from "../utils/api";

const useAuth = () => {
  const { user, setUser } = useContext(UserContext);

  const useCheckAuth = () => {
    useEffect(() => {
      if (localStorage.getItem("user")) {
        const userDataString = localStorage.getItem("user");
        const userData = JSON.parse(userDataString);
        setUser(userData);

        // fetch updates of the user details
        fetchUser(userData.username).then((user) => {
          setUser(user);
        });
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

  return { user, login, logout, useCheckAuth };
};

export default useAuth;
