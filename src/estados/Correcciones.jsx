import React, { useState, useEffect } from "react";

const Correcciones = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);

  const aumentar = (aumentarPor) => {
    setValue(aumentarPor);
  };

  const render = () => {
    setCount(count + value);
  };

  useEffect(() => {
    render();
  }, [value]);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          aumentar(10);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Correcciones;
