import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contexto from "./contexto/Contexto";
import Hijo1 from "./contexto/Hijo1";
import Efectos from "./efectos/Efectos";
import Ejercicio1 from "./Ejercicios/Ejercicio1";
import Ejercicio2 from "./Ejercicios/Ejercicio2";
import PiedraPapelTijeraV2 from "./Ejercicios/PiedraPapelTijeraV2";
import Correcciones from "./estados/Correcciones";
import Estados from "./estados/Estados";
import FormulariosControlados from "./formularios/FormulariosControlados";
import FormulariosNoControlados from "./formularios/FormulariosNoControlados";
import Llamadas from "./llamadas/Llamadas";
import LlamadasSr from "./llamadas/LlamadasSr";
import Promesas from "./promesas/Promesas";
import Card from "./props/Card/Card";
import ComponenteA from "./props/ComponenteA";
import HooksYFuncionesDeRutas from "./rutas/ComponenteParaExplicarRutas";
import ToDo from "./ToDoList/ToDo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<div>404</div>} />
        <Route path="" element={<div>Home</div>} />
        <Route path="form" element={<div>formularios</div>} />
        <Route path="todo" element={<ToDo />} />
        <Route path="contexto" element={<Contexto />} />
        <Route path="rutas" element={<HooksYFuncionesDeRutas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
