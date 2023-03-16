import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { fetchUsers } from "../utils/api";

const LoginPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((usersData) => {
        setUsers(usersData);
      })
      .catch(() => {
        setError("Something went wrong. Couldn't fetch users.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main>
      <SectionHeader title="Login" />
      <form className="login">
        <label htmlFor="username">Login as: </label>
        <select className="login__select" id="username">
          {users.map(({ username }) => (
            <option
              className="login__select__option"
              key={username}
              value={username}
            >
              {username}
            </option>
          ))}
        </select>
        <button>Login</button>
      </form>
    </main>
  );
};

export default LoginPage;
