import React from "react";
import { useState } from "react";
import ComponenteB from "./ComponenteB";

const ComponenteA = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <ComponenteB valorContador={counter} />
    </div>
  );
};

export default ComponenteA;
