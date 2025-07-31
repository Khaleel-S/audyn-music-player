// src/context/UserAuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // make sure this path is correct

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export const UserAuth = () => useContext(UserContext);
