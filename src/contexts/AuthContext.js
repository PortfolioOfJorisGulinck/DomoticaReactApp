import React, { createContext, useState } from "react";
import { getToken } from "./../api/getJwtToken";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [userName, setUserName] = useState({userName: ""});
  const [password, setPassword] = useState({password: "" });
  const [isValidated, setIsValidated] = useState(false);

  const getJwtToken = async () => {
    getToken({...userName, ...password}).then((response) => setIsValidated(true));
  };

  const saveUserName = (userName) => {
    setUserName(userName);
  };

  const savePassword = (password) => {
    setPassword(password);
  };

  const logout = () => {
    localStorage.clear();
    setUserName({userName: ""});
    setPassword({password: ""});
    setIsValidated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        saveUserName,
        savePassword,
        getJwtToken,
        isValidated,
        logout,
        userName,
        password,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
