import React, { useState } from "react";
import ContextoBanner from "./ContextoBanner";
import Hijo1 from "./Hijo1";
import Hijo4 from "./Hijo4";

const Contexto = () => {
  const [comision, setComision] = useState("22805");

  return (
    <div>
      <h1>PADRE</h1>

      <ContextoBanner.Provider
        value={{
          comision,
          setComision,
        }}
      >
        <Hijo1 />
        <Hijo4 />
      </ContextoBanner.Provider>
    </div>
  );
};

export default Contexto;

/* 

            useState - Estados
            useEffectos - Efectos secundarios y ciclo de vida
            useContext - Contexto
            
            useReducer - Reducers
            
            ////////////////////////////////
            
            useRef - Referencias
            useLayoutEffect - Efectos secundarios y ciclo de vida
            
            ////////////////////////////////
            
            useCallback - Memorización
            useMemo - Memorización
            memo - Memorización


*/
