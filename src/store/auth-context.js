import { useState } from "react";
import React from "react";

const AuthContext = React.createContext({
  userId: "",
  name: "",
  token: "",
  isLoggedIn: false,
  login: (token, uid, name) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const initToken = localStorage.getItem("token");
  const initName = localStorage.getItem("name");
  const initUserId = localStorage.getItem("uid");
  const [token, setToken] = useState(initToken);
  const [name, setName] = useState(initName);
  const [userId, setUserId] = useState(initUserId);

  const userTokenStatus = !!token;

  const loginHandler = (token, uid, name) => {
    localStorage.setItem("token", token);
    localStorage.setItem("uid", uid);
    localStorage.setItem("name", name);
    setToken(token);
    setUserId(uid);
    setName(name);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("uid");
    setToken(null);
    setName(null);
    setUserId(null);
  };

  const context = {
    userId: userId,
    name: name,
    token: token,
    isLoggedIn: userTokenStatus,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
