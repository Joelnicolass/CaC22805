import React, { useState } from "react";
import styles from "./ToDo.module.css";

const ToDo = () => {
  const [activo, setActivo] = useState(true);

  return (
    <div className={activo ? styles["container-1"] : styles["container-2"]}>
      ToDo
    </div>
  );
};

export default ToDo;
