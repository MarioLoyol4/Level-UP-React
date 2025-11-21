import { createContext, useContext, useState, useEffect } from 'react';
import { isAuthenticated, getEmail, logout as logoutService } from '../services/AuthService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(isAuthenticated());
  const [email, setEmail] = useState(getEmail());

  const login = (token, user) => {
    setIsAuth(true);
    setEmail(user);
  };

  const logout = () => {
    logoutService();
    setIsAuth(false);
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
