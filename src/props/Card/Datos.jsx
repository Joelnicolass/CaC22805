import React from "react";

const Datos = ({ nombre, apellido, incrementar }) => {
  const algo = () => {
    false && console.log("algo");
  };

  algo();

  return (
    <div>
      <h1>{nombre}</h1>
      <h2>{apellido}</h2>
      <button
        onClick={() => {
          incrementar("algo");
        }}
      >
        +
      </button>
    </div>
  );
};

export default Datos;
