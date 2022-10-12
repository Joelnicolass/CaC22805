import React, { useContext } from "react";
import ContextoBanner from "./ContextoBanner";
import Hijo5 from "./Hijo5";

const Hijo4 = () => {
  const { comision } = useContext(ContextoBanner);
  return (
    <div>
      Hijo4
      <h5>{comision}</h5>
      <Hijo5 />
    </div>
  );
};

export default Hijo4;
