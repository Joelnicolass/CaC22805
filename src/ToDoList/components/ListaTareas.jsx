import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ tareas, eliminarTarea, terminarTarea }) => {
  return (
    <div>
      <h1>Lista de tareas</h1>

      {tareas.map((tarea) => {
        return (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            eliminarTarea={eliminarTarea}
            terminarTarea={terminarTarea}
          />
        );
      })}
    </div>
  );
};

export default ListaTareas;
