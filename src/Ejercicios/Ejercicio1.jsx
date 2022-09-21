import React, { useState } from "react";

const user = {
  nombre: "Nico",
  apellido: "Perez",
  edad: 20,
};

const keys = Object.keys(user);

const Ejercicio1 = () => {
  const [key, setKey] = useState(keys[0]);

  const changeKey = () => {
    const newKey =
      keys.length - 1 === keys.indexOf(key) ? 0 : keys.indexOf(key) + 1;

    setKey(keys[newKey]);
  };

  return (
    <div>
      <h1>Ejercicio 1</h1>
      <h2>{user[key]}</h2>
      <button onClick={changeKey}>Cambiar dato</button>
    </div>
  );
};

export default Ejercicio1;
