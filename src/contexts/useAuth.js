import { createContext, useContext } from "react";


// Create the context
export const AuthContext = createContext();

// Custom hook (for easy access)
export const useAuth = () => useContext(AuthContext);