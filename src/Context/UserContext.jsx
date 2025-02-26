import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || null);



  const login = (authToken) => {
    setToken(authToken);
    console.log("this works")
    localStorage.setItem("token", JSON.stringify(authToken)); // Store token for persistence
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    console.log("this works as well")
    localStorage.removeItem("token"); // Remove token from storage
  };

  return (
    <UserContext.Provider value={{ user, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;