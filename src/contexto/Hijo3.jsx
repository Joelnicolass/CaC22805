import React, { useContext } from "react";
import ContextoBanner from "./ContextoBanner";

const Hijo3 = () => {
  const { comision } = useContext(ContextoBanner);

  return (
    <div>
      <div>Hijo 3</div>
      <h5>{comision}</h5>
    </div>
  );
};

export default Hijo3;
