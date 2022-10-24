import React, { useReducer } from "react";

/* 

    un reducer es una funcion que recibe dos parametros, el primero es el estado y el segundo es la accion

    la accion es un objeto que tiene dos propiedades, el type y el payload

    el type es un string que indica que tipo de accion se va a realizar

    el payload es un objeto que contiene la informacion que se va a modificar

    el reducer debe retornar un nuevo estado



    action = {
        type: string,
        payload?: any, any[]
    }


*/

const initialState = {
  value: 0,
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        value: state.value + action.payload,
      };

    case "decrementar":
      return { ...state, value: state.value - 1 };

    case "incrementarPor":
      return { ...state, value: state.value + action.payload };

    default:
      return state;
  }
};

const ComponenteConReductor = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      {state.value}
      <button
        onClick={() =>
          dispatch({
            type: "incrementar",
            payload: 5,
          })
        }
      >
        incrementar
      </button>
    </div>
  );
};

export default ComponenteConReductor;
