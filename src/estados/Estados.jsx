import React, { useState } from "react";

/* 

    useState es asincrono

*/

const Estados = () => {
  const [contador, setContador] = useState(10);

  const aumentar = () => {
    setContador(contador + 1);
    console.log(contador); // no coincide
  };

  const disminuir = () => {
    setContador(contador - 1);
  };

  const reset = () => {
    setContador(0);
  };

  return (
    <>
      <h1>Estados</h1>
      <h3>contador: {contador} </h3>
      <button onClick={aumentar}>+1</button>
      <button onClick={disminuir}>-1</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default Estados;
