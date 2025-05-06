import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "../FireBase/fireBase.config";

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loader, setLoader] = useState(true);
const provider =new GoogleAuthProvider();


const signInGoogle=()=>{
    return signInWithPopup(auth,provider)
}

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (presentUser) => {
      setCurrentUser(presentUser);
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const user = {
    loader,
    currentUser,
    setCurrentUser,
    signInGoogle,
  };
  return <AuthContext value={user}>{children}</AuthContext>;
};

export default AuthProvider;
