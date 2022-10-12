import React, { useContext } from "react";
import ContextoBanner from "./ContextoBanner";
import Hijo3 from "./Hijo3";

const Hijo2 = () => {
  const { comision } = useContext(ContextoBanner);
  return (
    <div>
      Hijo2
      <h5>{comision}</h5>
      <Hijo3 />
    </div>
  );
};

export default Hijo2;
