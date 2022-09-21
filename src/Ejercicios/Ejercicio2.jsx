import React, { useEffect, useState } from "react";

const user = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 20,
};

const keys = Object.keys(user);

const Ejercicio2 = () => {
  const [key, setKey] = useState(keys[0]);

  const changeKey = () => {
    const newIndex =
      keys.length - 1 === keys.indexOf(key) ? 0 : keys.indexOf(key) + 1;
    setKey(keys[newIndex]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      changeKey();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [key]);

  return (
    <div>
      <h1>{user[key]}</h1>
      <button onClick={changeKey}>cambiar dato</button>
    </div>
  );
};

export default Ejercicio2;
