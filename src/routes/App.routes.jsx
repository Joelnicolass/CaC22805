import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Estados from "../estados/Estados";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <ProtectedRoutes>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </ProtectedRoutes>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route path="/contador" element={<Estados />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
