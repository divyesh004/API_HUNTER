import React, { createContext, useState } from 'react';

// Create AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuth: false,
    token: null,
  });

  // Login function
  const loginUser = (token) => {
    setAuthState({
      isAuth: true,
      token,
    });
  };

  // Logout function
  const logoutUser = () => {
    setAuthState({
      isAuth: false,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
