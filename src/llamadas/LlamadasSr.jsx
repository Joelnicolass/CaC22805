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

const jsonplaceholderApi = {
  urlBase: "https://jsonplaceholder.typicode.com",
  users: "/users",
  posts: "/posts",
};

const getUsersAxios = async () => {
  const res = await axios.get(
    `${jsonplaceholderApi.urlBase}${jsonplaceholderApi.users}`
  );
  return res.data;
};

const getUsersFetch = async () => {
  const res = await fetch(
    `${jsonplaceholderApi.urlBase}${jsonplaceholderApi.users}`
  );
  const data = await res.json();
  return data;
};

const userAdapter = (data) => {
  const users = data.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      website: user.website,
    };
  });
  return users;
};

const usersServices = {
  getUsers: async (provider) => {
    const data = await provider();
    return data;
  },

  addUser: async (provider, user) => {
    const data = await provider(user);
    return data;
  },
};

const userUseCases = {
  getUsers: async () => {
    const data = await usersServices.getUsers(getUsersFetch);
    const users = userAdapter(data);
    return users;
  },
};

const LlamadasSr = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setIsLoading(true);

    try {
      const data = await userUseCases.getUsers();
      console.log(data);
      setUsers(data);
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

export default LlamadasSr;
