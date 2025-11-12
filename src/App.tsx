import React, { useEffect, useState } from "react";
import { getProjects, createProject, getUsers, createUser } from "./api/api";
import { Rocket, Users } from "lucide-react";

interface Project {
  _id?: string;
  name: string;
  description: string;
}

interface User {
  _id?: string;
  name: string;
  email: string;
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [projectData, setProjectData] = useState<Project>({ name: "", description: "" });
  const [userData, setUserData] = useState<User>({ name: "", email: "" });

  useEffect(() => {
    getProjects().then(setProjects);
    getUsers().then(setUsers);
  }, []);

  const handleCreateProject = async () => {
    const newProject = await createProject(projectData);
    if (newProject) {
      setProjects([...projects, newProject]);
      setProjectData({ name: "", description: "" });
    }
  };

  const handleCreateUser = async () => {
    const newUser = await createUser(userData);
    if (newUser) {
      setUsers([...users, newUser]);
      setUserData({ name: "", email: "" });
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <h1 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Rocket size={30} color="#ff5e00" /> HarmoniQ - Proyectos
      </h1>

      <p style={{ marginTop: "-5px", marginBottom: "1rem", color: "#444" }}>
        <b>Desarrollo del prototipo HarmoniQ:</b> Desarrollo del prototipo funcional de la plataforma HarmoniQ.
      </p>

      <div style={{ marginBottom: "2rem", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
        <input
          type="text"
          placeholder="Nombre del proyecto"
          value={projectData.name}
          onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
          style={{ marginRight: "5px" }}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={projectData.description}
          onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
          style={{ marginRight: "5px" }}
        />
        <button onClick={handleCreateProject}>Crear Proyecto</button>

        <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
          {projects.map((project) => (
            <li
              key={project._id}
              style={{
                background: "#f8f8f8",
                borderRadius: "6px",
                padding: "8px",
                marginBottom: "5px",
                borderLeft: "4px solid #ff5e00",
              }}
            >
              <b>{project.name}</b>: {project.description}
            </li>
          ))}
        </ul>
      </div>

      <h2 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Users size={26} color="#007bff" /> Usuarios
      </h2>

      <div style={{ marginBottom: "2rem", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
        <input
          type="text"
          placeholder="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          style={{ marginRight: "5px" }}
        />
        <input
          type="email"
          placeholder="Correo"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          style={{ marginRight: "5px" }}
        />
        <button onClick={handleCreateUser}>Crear Usuario</button>

        <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
          {users.map((user) => (
            <li
              key={user._id}
              style={{
                background: "#f0f8ff",
                borderRadius: "6px",
                padding: "8px",
                marginBottom: "5px",
                borderLeft: "4px solid #007bff",
              }}
            >
              👤 {user.name} – <i>{user.email}</i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
