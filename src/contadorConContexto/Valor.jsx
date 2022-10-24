import React, { useContext, useEffect } from "react";
import { ContadorContext } from "./ContadorContext";

const Valor = () => {
  console.log("render");

  const { value2 } = useContext(ContadorContext);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div>
      <h2>{value2}</h2>
    </div>
  );
};

export default Valor;
