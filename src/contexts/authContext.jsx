import { createContext, useCallback, useContext, useMemo, useState } from "react";
import PropTypes from 'prop-types';

const MY_AUTH_APP = "MY_AUTH_APP_1";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem(MY_AUTH_APP) ?? false
  );

  const login = useCallback(function () {
    localStorage.setItem(MY_AUTH_APP, true);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(function () {
    localStorage.removeItem(MY_AUTH_APP);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
    }),
    [login, logout, isAuthenticated]
    );
    
    return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
}

AuthContextProvider.proptypes = {
    children: PropTypes.object
};

export function useAuthContext() {
  return useContext(AuthContext)
}
