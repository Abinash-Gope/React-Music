import React, { createContext, useState } from "react";

export const AuthContextData = createContext();

const AuthContext = ({ children }) => {
  const [logUser, setLogUser] = useState(null);
  const registerUser = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const alreadyExist = users.find((user) => {
      return user.email === newUser.email;
    });

    if (alreadyExist) {
      return {
        success: false,
        message: "User already exists",
      };
    }

    const updateUser = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updateUser));

    return {
      success: true,
      message: "User created successfully",
    };
  };

  const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const alreadyExist = users.find((user) => {
      return user.email === email && user.password === password;
    });

    if (!alreadyExist) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    setLogUser(alreadyExist);
    localStorage.setItem("logUser", JSON.stringify(alreadyExist));

    return {
      success: true,
      message: "Login successfully",
      user: alreadyExist,
    };
  };

  return (
    <AuthContextData.Provider value={{ registerUser, loginUser, logUser }}>
      {children}
    </AuthContextData.Provider>
  );
};

export default AuthContext;
