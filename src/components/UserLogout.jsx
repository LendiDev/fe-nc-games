import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/User.context";
import LoadingSpinner from "./LoadingSpinner";

const UserLogout = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    
    const timer = setTimeout(() => {
      setUser(null);
      navigate("/");
    }, 1250);

    return () => clearTimeout(timer);
  }, [navigate, setUser, user]);

  return (
    <main>
      <section className="login">
        <p>Logging out... </p>
        <LoadingSpinner flexLoading />
      </section>
    </main>
  );
};

export default UserLogout;
