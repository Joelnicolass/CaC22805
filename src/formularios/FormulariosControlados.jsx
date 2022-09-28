import axios from "axios";
import React, { useState } from "react";

const FormulariosControlados = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormulariosControlados;
