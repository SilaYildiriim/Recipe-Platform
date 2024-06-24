import { createContext, useState } from "react";
import { AuthService } from "../services/AuthService";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email, password) => {
    try {
      const response = await AuthService.loginService(email, password);
      if (response.data.access_token) {
        setIsAuthenticated(JSON.parse(localStorage.getItem("user")));
      }
    } catch (error) {
      setIsAuthenticated(false);
      throw new Error(error);
    }
  };

  const logout = () => {
    AuthService.logoutService();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
