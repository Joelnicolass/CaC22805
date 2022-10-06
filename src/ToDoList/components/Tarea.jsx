import React, { useState } from "react";

const Tarea = ({ tarea, terminarTarea, eliminarTarea }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  // a fines practicos, para el ejercicio, esto funciona. Cada componente mantiene su propio estado
  // sin embargo, si se quisiera que el estado de la tarea se mantenga en el componente padre, o en un contexto global, se deberia usar el estado del componente padre. Por tanto no tengo otra opcion que pasar la funcion terminarTarea como prop de todas formas.

  // esto da pie al tema fuerte que con el que vamos a continuar: context

  return (
    <div>
      <h2>{tarea.titulo}</h2>
      <p>{tarea.descripcion}</p>
      <button
        onClick={() => {
          eliminarTarea(tarea.id);
        }}
      >
        Eliminar tarea
      </button>
      <input
        type="checkbox"
        onChange={() => {
          handleCheck(); //esado local
          //terminarTarea(tarea.id); // estado del componente padre
        }}
        checked={isChecked} // estado local
        /* checked={tarea.terminada} */ // estado del componente padre
      />
    </div>
  );
};

export default Tarea;
