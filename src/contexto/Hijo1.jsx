import React, { useContext } from "react";
import ContextoBanner from "./ContextoBanner";
import Hijo2 from "./Hijo2";

const Hijo1 = () => {
  const { comision, setComision } = useContext(ContextoBanner);

  return (
    <div>
      Hijo1
      <h5>{comision}</h5>
      <button
        onClick={() => {
          setComision("comision cambiada");
        }}
      >
        Cambiar dato
      </button>
      <Hijo2 />
    </div>
  );
};

export default Hijo1;
