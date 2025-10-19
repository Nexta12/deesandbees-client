import { useState, useEffect } from "react";
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from "@utils/localStorage";
import { AuthContext } from "./useAuth";
import { apiClient } from "@api/apiClient";
import { endpoints } from "@api/endpoints";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => getLocalStorageItem("user") || null);
  const [token, setToken] = useState(() => getLocalStorageItem("token") || null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!getLocalStorageItem("token"));

  // ✅ Login
  const login = (userData, tokenData) => {
    setUser(userData);
    setToken(tokenData);
    setIsAuthenticated(true);
    setLocalStorageItem("user", userData);
    setLocalStorageItem("token", tokenData);
    
  };

  // ✅ Logout
  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    removeLocalStorageItem("user");
    removeLocalStorageItem("token");
  };

  // ✅ Validate token on mount
  const validateAuth = async () => {
    const storedToken = getLocalStorageItem("token");

    if (!storedToken) {
      logout();
      return;
    }

    try {
      const response = await apiClient.get(endpoints.validateAuth, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });

      const userData = response.data?.user;
      if (userData) {
        setUser(userData);
        setIsAuthenticated(true);
        setLocalStorageItem("user", userData);
      }
    } catch (error) {
      console.error("Auth validation failed:", error);
      logout();
    }
  };

  // ✅ Run validation when token changes or component mounts
  useEffect(() => {
    if (token) validateAuth();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        login,
        logout,
        validateAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
