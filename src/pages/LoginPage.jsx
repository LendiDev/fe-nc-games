import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import SectionHeader from "../components/SectionHeader";
import useAuth from "../hooks/useAuth";
import useTitle from "../hooks/useTitle";
import { fetchUsers } from "../utils/api";

const LoginPage = () => {
  useTitle('Login');

  const [userNameSelected, setUserNameSelected] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { user, login } = useAuth();

  useEffect(() => {
    console.log(user);
    if (!user) {
      setIsLoading(true);
      fetchUsers()
        .then((usersData) => {
          setUsers(usersData);
          setIsLoading(false);
        })
        .catch(() => {
          setError("Something went wrong. Couldn't fetch users.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user]);

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    if (!userNameSelected || userNameSelected === "") return;

    const userSelected = users.find(
      (user) => user.username === userNameSelected
    );

    login(userSelected);
    navigate(-1);
  };

  const handleChangeUserNameSelected = (e) => {
    setUserNameSelected(e.target.value);
  };

  return (
    <main>
      <SectionHeader title="Login" />
      <section className="login">
        {isLoading && <LoadingSpinner flexLoading />}
        {error && <p>{error}</p>}
        {users.length > 0 && !user && (
          <form className="login__form" onSubmit={handleSubmitLogin}>
            <label htmlFor="username">Login as: </label>
            <select
              className="login__select"
              id="username"
              onChange={handleChangeUserNameSelected}
            >
              <option value="">Select username...</option>
              {users.map(({ username }) => (
                <option key={username} value={username}>
                  {username}
                </option>
              ))}
            </select>
            <button
              className="login__button"
              type="submit"
              disabled={!userNameSelected || userNameSelected === ""}
            >
              Login
            </button>
          </form>
        )}
        {user && (
          <div className="login--logged-in">
            <p>You logged in as {user.username}</p>
            <Link to="/reviews">Browse Reviews</Link>
          </div>
        )}
      </section>
    </main>
  );
};

export default LoginPage;
