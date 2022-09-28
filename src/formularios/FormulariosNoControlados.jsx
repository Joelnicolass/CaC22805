import React, { useRef } from "react";

const FormulariosNoControlados = () => {
  const inputEmail = useRef(null);
  const file = useRef(null);

  const handleSubmit = (e) => {
    console.log(file.current.files[0]);
  };

  return (
    <div>
      <input type="text" ref={inputEmail} />
      <input type="file" ref={file} />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default FormulariosNoControlados;
