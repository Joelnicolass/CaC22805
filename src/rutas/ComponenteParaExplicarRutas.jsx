import React from "react";
import {
  Link,
  useNavigate,
  useLocation,
  Navigate,
  NavLink,
} from "react-router-dom";

const HooksYFuncionesDeRutas = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Link to={"/todo"}>ir a Todo List</Link>
      <button
        onClick={() => {
          navigate("/todo");
        }}
      >
        Todo List
      </button>
    </div>
  );
};

export default HooksYFuncionesDeRutas;
