import { useState } from "react";
import React from "react";

const AuthContext = React.createContext({
  name: "",
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  setName: (name) => {},
});

export const AuthContextProvider = ({ children }) => {
  const initToken = localStorage.getItem("token");
  const initName = localStorage.getItem("name");
  const [token, setToken] = useState(initToken);
  const [name, setName] = useState(initName);

  const userTokenStatus = !!token;

  const loginHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setToken(null);
    setName(null);
  };

  const setNameHandler = (name) => {
    localStorage.setItem("name", name);
    setName(name);
  };

  const context = {
    name: name,
    token: token,
    isLoggedIn: userTokenStatus,
    login: loginHandler,
    logout: logoutHandler,
    setName: setNameHandler,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
