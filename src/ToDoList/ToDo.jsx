import React, { useState } from "react";
import useForm from "../hooks/useForm";
import ListaTareas from "./components/ListaTareas";
import { todoForm } from "./helpers/ToDoForm";
import useTodo from "./hooks/useTodo";

const ToDo = () => {
  const { form, handleChange, handleSubmit } = useForm(todoForm);
  const { agregarTarea, eliminarTarea, tareas, terminarTarea } = useTodo(form);

  return (
    <div>
      {/* todo el formulario podria ser un componente aparte */}
      <form
        onSubmit={(e) => {
          handleSubmit(e, agregarTarea);
        }}
      >
        <input
          type="text"
          value={form.titulo}
          onChange={handleChange}
          name="titulo"
        />
        <input
          type="text"
          value={form.descripcion}
          onChange={handleChange}
          name="descripcion"
        />
        <button type="submit">agregar tarea</button>
      </form>

      {/* componente que lista las tareas */}
      <ListaTareas
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        terminarTarea={terminarTarea}
      />
    </div>
  );
};

export default ToDo;
