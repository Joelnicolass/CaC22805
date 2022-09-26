import React, { useState } from "react";
import Botonera from "./Botonera";
import Datos from "./Datos";

const Card = () => {
  const [count, setCount] = useState(0);

  const incrementar = (parametro) => {
    console.log("incrementar", parametro);
    setCount(count + 1);
  };

  return (
    <>
      <Datos nombre={"Marcelo"} apellido={"Simon"} incrementar={incrementar} />
      <h2>{count}</h2>
    </>
  );
};

export default Card;
