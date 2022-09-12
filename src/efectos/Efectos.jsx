import React, { useEffect } from "react";
import { useState } from "react";

/* 

useEffect(
            () => { logica }, 
            [ dependencias ]
        );


useEffect(()=>{})

*/

const Efectos = () => {
  // se ejecuta una vez
  useEffect(() => {}, []);
  // se ejecuta cuando cambia una dependencia
  useEffect(() => {}, [null, null, null]);
  // se ejecuta una vez, y cuando se desmonta se ejecuta el return
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <h1>{}</h1>
    </>
  );
};

export default Efectos;
