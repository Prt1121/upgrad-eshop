import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

/* This component is used to provide Authentication Context Variables and useState hooks */

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [userId, setUserIds] = useState(null);
  const [isAdmin, setIsAdmins] = useState(false);

  const setToken = (token) => {
    localStorage.setItem("token", token);
    setAuthToken(token);
  };
  const setUserId =(id)=>{
    console.log('userid  ---- ',id)
    localStorage.setItem("userID", id);
    setUserIds(id)
  }
  const setIsAdmin = (i)=>{
    console.log('setIsAdmin ---- ',i)
    localStorage.setItem("isAdmin", i);
    setIsAdmins(i)
  }

  useEffect(() => {
    const tokens = localStorage.getItem('token');
    if (tokens && tokens.length > 0) {
      setAuthToken(tokens);
      setUserIds(localStorage.getItem('userID'));
      setIsAdmins(localStorage.getItem('isAdmin'));
    }
  }, []);
  

  console.log('userId isAdmin token---- ',userId , isAdmin , authToken)

  return (
    <AuthContext.Provider
      value={{ authToken, userId, isAdmin, setToken, setUserId, setIsAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};