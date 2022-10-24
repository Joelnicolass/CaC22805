import React, { useContext, useState } from "react";
import { ContadorContext } from "./ContadorContext";
import Valor from "./Valor";

const Contador = () => {
  const { value, value2, increment1, increment2 } = useContext(ContadorContext);

  return (
    <div>
      <h1>Contador</h1>
      <button onClick={increment1}>+</button>
      <button onClick={increment2}>+ value2</button>
    </div>
  );
};

export default Contador;
