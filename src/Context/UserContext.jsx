import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null); // Retrieve token from storage

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem("token", authToken); // Store token for persistence
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token"); // Remove token from storage
  };

  return (
    <UserContext.Provider value={{ user, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
