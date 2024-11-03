import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';


  const AuthContext = createContext();

  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log('Loaded user from localStorage:', parsedUser);
      setUser(parsedUser);
    } else {
      console.log('No user found in localStorage');
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await loginAuthor(credentials);
      const decodedToken = jwtDecode(response.token);
      const userWithDetails = {
        ...response,
        userId: decodedToken.userId,
        fname: response.fname || response.name || decodedToken.name,
        lname: response.lname || decodedToken.lname,
        email: response.email || decodedToken.email,
        createdAt: response.createdAt || decodedToken.iat,
        username: response.username || response.email?.split('@')[0] || decodedToken.username,
        totalPosts: response.totalPosts || 0,
        totalComments: response.totalComments || 0,
        likesReceived: response.likesReceived || 0
      };
      setUser(userWithDetails);
      localStorage.setItem('user', JSON.stringify(userWithDetails));
      return userWithDetails;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await registerAuthor(userData);
      const userWithDetails = {
        ...response,
        fname: userData.fname || response.fname,
        lname: userData.lname || response.lname,
        email: userData.email || response.email,
        createdAt: response.createdAt || new Date().toISOString(),
        username: userData.username || response.username || userData.email?.split('@')[0],
        totalPosts: 0,
        totalComments: 0,
        likesReceived: 0
      };
      setUser(userWithDetails);
      localStorage.setItem('user', JSON.stringify(userWithDetails));
      return userWithDetails;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };


  return (
    <div>
    <AuthContext.Provider value={{
      
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
    </div>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};