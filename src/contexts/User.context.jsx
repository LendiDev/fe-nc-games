import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, authChecked, setAuthChecked }}>
      {children}
    </UserContext.Provider>
  );
};
