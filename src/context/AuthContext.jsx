import React from 'react'
import React, { createContext, useState, useContext } from 'react';


  const AuthContext = createContext();

  export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    const login = () => {
      setIsAuthenticated(true);
    };
  
    const logout = () => {
      setIsAuthenticated(false);
    };
  

  return (
    <div>
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
    </div>
  )
}

export const useAuth = () => useContext(AuthContext);
