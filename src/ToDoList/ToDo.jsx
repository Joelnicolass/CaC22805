import React, { useState } from "react";
import useForm from "../hooks/useForm";
import { todoForm } from "./helpers/ToDoForm";

const ToDo = () => {
  const { form, handleChange, handleSubmit } = useForm(todoForm);

  const funcion = () => {
    console.log(form);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e, funcion);
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

      <div>
        <h1>Lista de tareas</h1>
      </div>
    </div>
  );
};

export default ToDo;
