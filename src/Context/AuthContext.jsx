import { createContext } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/config"; // Replace with your API base URL

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Function to handle user registration
  const registerUser = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/register/`, formData);
      return response.data; // Return data so the Signup page can use it
    } catch (error) {
      console.error("Registration error:", error.response?.data || error);
      throw error.response?.data || error; // Throw error for the Signup component to handle
    }
  };

  // Function to handle user login
  const loginUser = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/login/`, formData);
      return response.data;
    } catch (error) {
      console.error("Login error:", error.response?.data || error);
      throw error.response?.data || error;
    }
  };

  return (
    <AuthContext.Provider value={{ registerUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
