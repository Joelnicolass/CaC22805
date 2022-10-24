import { createContext, useState } from "react";

export const ContadorContext = createContext();

const ContadorProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  const increment1 = () => {
    setValue(value + 1);
  };

  const increment2 = () => {
    setValue2(value2 + 1);
  };

  return (
    <ContadorContext.Provider value={{ value, increment1, value2, increment2 }}>
      {children}
    </ContadorContext.Provider>
  );
};

export default ContadorProvider;
