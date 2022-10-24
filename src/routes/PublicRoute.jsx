import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
