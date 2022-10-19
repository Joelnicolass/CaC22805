import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Bienvenido {user}</h1>
    </div>
  );
};

export default Home;
