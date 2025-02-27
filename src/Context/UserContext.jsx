import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode"; // Install with `npm install jwt-decode`

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    const storedToken = JSON.parse(localStorage.getItem("token")) || null;
    return storedToken;
  });

  useEffect(() => {
    if (token) {
      try {
        const decodedUser = jwtDecode(token.access); // Decode the JWT
        setUser(decodedUser);
      } catch (error) {
        console.error("Error decoding token:", error);
        logout();
      }
    }
  }, [token]);

  const login = (authToken) => {
    setToken(authToken);
    localStorage.setItem("token", JSON.stringify(authToken));

    try {
      const decodedUser = jwtDecode(authToken.access); // Extract user info
      setUser(decodedUser);
    } catch (error) {
      console.error("Invalid token:", error);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
