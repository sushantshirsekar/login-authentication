import { useState } from "react";
import React from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const isLoggedInHandler = !!token;
  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
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
