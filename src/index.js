import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./auth/AuthContext";
import Contador from "./contadorConContexto/Contador";
import ContadorProvider from "./contadorConContexto/ContadorContext";
import "./index.css";
import ComponenteConReductor from "./reducer/ComponenteConReductor";
import AppRoutes from "./routes/App.routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ComponenteConReductor />);
