import React, { createContext } from "react";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const value = {
    user: "n",
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
