import React, { createContext, useState } from "react";

export const AuthContextData = createContext();

const AuthContext = ({ children }) => {
  const [logUser, setLogUser] = useState(() => {
    try {
      const saved = localStorage.getItem("logUser");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const registerUser = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const formattedEmail = newUser.email ? newUser.email.trim().toLowerCase() : "";

    const alreadyExist = users.find((user) => {
      const existingEmail = user.email ? user.email.trim().toLowerCase() : "";
      return existingEmail === formattedEmail;
    });

    if (alreadyExist) {
      return {
        success: false,
        message: "User already exists",
      };
    }

    const userToSave = {
      ...newUser,
      email: formattedEmail,
    };

    const updateUser = [...users, userToSave];
    localStorage.setItem("users", JSON.stringify(updateUser));

    return {
      success: true,
      message: "User created successfully",
    };
  };

  const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const searchEmail = email ? email.trim().toLowerCase() : "";

    const alreadyExist = users.find((user) => {
      const existingEmail = user.email ? user.email.trim().toLowerCase() : "";
      return existingEmail === searchEmail && user.password === password;
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

  const logoutUser = () => {
    setLogUser(null);
    localStorage.removeItem("logUser");
  };

  return (
    <AuthContextData.Provider value={{ registerUser, loginUser, logoutUser, logUser }}>
      {children}
    </AuthContextData.Provider>
  );
};

export default AuthContext;
