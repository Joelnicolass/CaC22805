import React, { useState } from "react";

const user = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 20,
};

const Ejercicio1 = () => {
  const [userData, setUserData] = useState(user.nombre);

  let count = 0;

  const cambiarDato = () => {
    count += 1;
    switch (count) {
      case 1:
        setUserData(user.apellido);
        break;
      case 2:
        setUserData(user.edad);
        break;

      default:
        setUserData(user.nombre);
        count = 0;
        break;
    }
  };

  return (
    <div>
      <h1>Ejercicio</h1>
      <h2>{userData}</h2>
      <button onClick={cambiarDato}>Cambiar dato</button>
    </div>
  );
};

export default Ejercicio1;
