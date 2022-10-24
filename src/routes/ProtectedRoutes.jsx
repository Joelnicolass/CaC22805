import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoutes;
