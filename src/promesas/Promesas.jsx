import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

/* 
    Promesa -> pendiente
    Promesa -> resuelta
    Promesa -> rechazada
*/

/* const res = {
  id: 1,
  nombre: "Pablo",
  apellido: "Perez",
};

const mayorQue5 = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value > 5) {
        resolve(value);
      } else {
        reject("Error");
      }
    }, 5000);
  });
}; */

const Promesas = () => {
  const [users, setUsers] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(url);
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <h1>Promesas</h1>
      <h2>
        {users.map((user) => {
          return (
            <div>
              <h2>{user.name}</h2>
              <h3>{user.email}</h3>
            </div>
          );
        })}
      </h2>
    </div>
  );
};

export default Promesas;
