import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../FireBase/fireBase.config";
import Swal from "sweetalert2";

const AuthProvider = ({ children }) => {
  const sweetSuccess = (alertMessage) => {
    Swal.fire({
      title: `${alertMessage}`,
      icon: "success",
      draggable: true,
    });
  };
  const sweetError = (alertMessage) => {
    Swal.fire({
      title: `${alertMessage}`,
      icon: "error",
      draggable: true,
    });
  };

  const [currentUser, setCurrentUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const provider = new GoogleAuthProvider();

  const signInEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userProfile) => {
    return updateProfile(auth.currentUser, userProfile);
  };

  const signInGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
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
    createUser,
    updateUser,
    signInEmail,
    signInGoogle,
    logOut,
    resetPassword,
    sweetSuccess,
    sweetError,
  };
  return <AuthContext value={user}>{children}</AuthContext>;
};

export default AuthProvider;
