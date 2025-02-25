import { createContext, useState, useEffect } from "react";

// Create UserContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Load user from local storage if available
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Function to store user in state and local storage
    const loginUser = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));  // Persist user
    };

    // Function to remove user on logout
    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
