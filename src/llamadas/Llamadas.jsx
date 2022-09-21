import axios from "axios";
import React, { useState, useEffect } from "react";

// declaramos una entidad

/* 
  
    const IUser = {
        id: int | string,
        name: string,
        email: string,
        website: string
    }
  
  */

const Llamadas = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setIsLoading(true);

    try {
      // llamaos un servicio
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      // adaptador -> adaptar los datos que recibo del backend a lo que necesita la vista
      const userAdapter = data.map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          website: user.website,
        };
      });

      console.log(userAdapter);
    } catch (error) {
      console.log(error);
      setError("Error desconocido");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
        <h1>Nombre</h1>
        <h2>Website</h2>
        <h5>email</h5>
      </div>
    </div>
  );
};

export default Llamadas;
