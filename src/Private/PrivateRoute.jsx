import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import LoaderDiv from "../Components/LoaderDiv";

const PrivateRoute = ({ children }) => {
  const { currentUser, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return <LoaderDiv></LoaderDiv>;
  }

  if (currentUser) {
    return children;
  }

  return <Navigate state={location.pathname} to="/"></Navigate>;
};

export default PrivateRoute;
