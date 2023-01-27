import { useState } from "react";
import React from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  let storageToken = localStorage.getItem("idToken");
  const [token, setToken] = useState(storageToken);
  const isLoggedInHandler = !!token;
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("idToken", token);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('idToken');
  };
  const cartContext = {
    token: token,
    isLoggedIn: isLoggedInHandler,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={cartContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
