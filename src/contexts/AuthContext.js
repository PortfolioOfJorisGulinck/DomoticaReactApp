import React, { createContext, useState } from "react";
import { getToken } from "./../api/getJwtToken";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [account, setAccount] = useState({ username: "john", password: "john" });
  const [isValidated, setIsValidated] = useState(false);

  const getJwtToken = async () => {
    getToken(account).then((response) => setIsValidated(true));
  };

  const saveAccount = (userName, password) => {
    setAccount({ userName, password });
    getJwtToken();
  };

  return (
    <AuthContext.Provider
      value={{
        account,
        isValidated,
        saveAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
