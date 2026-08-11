import React, { createContext } from "react";

export const AuthContextData = createContext();
const AuthContext = ({ children }) => {
  const user = "Namaste";
  return (
    <AuthContextData.Provider value={user}>{children}</AuthContextData.Provider>
  );
};

export default AuthContext;
