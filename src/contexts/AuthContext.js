import React, { createContext, useState } from "react";
import { getToken } from "./../api/getJwtToken";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [isValidated, setIsValidated] = useState(false);

  const getJwtToken = async () => {
    getToken(account).then((response) => setIsValidated(true));
  };

  const saveAccount = (userName, password) => {
    setAccount({ userName, password });
    getJwtToken();
  };

  const logout = () => {
    localStorage.clear();
    setAccount({ username: "", password: "" });
    setIsValidated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        account,
        isValidated,
        saveAccount,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
