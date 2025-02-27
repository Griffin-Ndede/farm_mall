import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    try {
      const storedToken = JSON.parse(localStorage.getItem("token"));
      return storedToken || null;
    } catch (error) {
      console.error("Error parsing token from localStorage:", error);
      return null;
    }
  });

  useEffect(() => {
    if (token?.access) {
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
    try {
      const decodedUser = jwtDecode(authToken.access); // Extract user info
      setUser(decodedUser);
      setToken(authToken);
      localStorage.setItem("token", JSON.stringify(authToken)); // Store token persistently
    } catch (error) {
      console.error("Invalid token:", error);
    }
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
