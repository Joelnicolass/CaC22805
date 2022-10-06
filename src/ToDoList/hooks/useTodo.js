import { useState } from "react";

const useTodo = (form) => {
  const [tareas, setTareas] = useState([]);

  const crearTarea = () => {
    const nuevaTarea = {
      id: Date.now(),
      titulo: form.titulo,
      descripcion: form.descripcion,
      terminada: false,
    };

    return nuevaTarea;
  };

  const agregarTarea = () => {
    const nuevaTarea = crearTarea();
    setTareas([...tareas, nuevaTarea]);
  };

  const buscarTarea = (id) => {
    return tareas.find((tarea) => tarea.id === id);
  };

  // Estos tres métodos hacen lo mismo, pero de diferentes formas
  // la idea de ver esto es que hay muchas formas de hacer lo mismo
  // y que no hay una forma correcta o incorrecta de hacerlo

  const terminarTarea1 = (id) => {
    // buscar por id, filtrar y cambiar el estado
    const tarea = buscarTarea(id);
    tarea.terminada = true;

    const listaSinTarea = tareas.filter((tarea) => tarea.id !== id);
    setTareas([...listaSinTarea, tarea]);
  };

  const terminarTarea2 = (id) => {
    // buscar por index, cambiar el estado y reemplazar
    const indice = tareas.findIndex((tarea) => tarea.id === id);
    const listaTareas = [...tareas];
    listaTareas[indice].terminada = true;
    setTareas(listaTareas);
  };

  // esta es la manera mas estandar de hacerlo
  const terminarTarea = (id) => {
    // mapear, preguntar si es la tarea y cambiar el estado
    const tareasFiltradas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.terminada = !tarea.terminada;
      }
      return tarea;
    });
    setTareas(tareasFiltradas);
  };

  const eliminarTarea = (id) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasFiltradas);
  };

  return {
    tareas,
    agregarTarea,
    eliminarTarea,
    terminarTarea,
  };
};

export default useTodo;
