// src/api/api.ts
import axios from "axios";

const API_URL = "http://localhost:4000/api"; // ajusta si corresponde

// instancia axios por defecto
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// helpers nombrados (devuelven .data)
export const getProjects = async () => {
  const res = await api.get("/projects");
  return res.data;
};
export const createProject = async (project: any) => {
  const res = await api.post("/projects", project);
  return res.data;
};

export const getUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};
export const createUser = async (user: any) => {
  const res = await api.post("/users", user);
  return res.data;
};

// export default para que componentes que usan `api.post(...)` sigan funcionando
export default api;
