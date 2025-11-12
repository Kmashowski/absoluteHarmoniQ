// src/components/Projects.tsx
import React, { useEffect, useState } from "react";
import { getProjects, createProject } from "../api/api";

interface Project {
  _id?: string;
  name: string;
  description: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState({ name: "", description: "" });

  useEffect(() => {
    (async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        console.error("Error al obtener proyectos:", err);
      }
    })();
  }, []);

  const handleCreateProject = async () => {
    if (!newProject.name || !newProject.description) return;
    try {
      const created = await createProject(newProject);
      setProjects((prev) => [...prev, created]);
      setNewProject({ name: "", description: "" });
    } catch (err) {
      console.error("Error al crear proyecto:", err);
      alert("Error al crear proyecto. Mira la consola del backend.");
    }
  };

  return (
    <div style={{ padding: 12 }}>
      <h2>📁 Proyectos</h2>
      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        <input
          placeholder="Nombre"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        />
        <input
          placeholder="Descripción"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <button onClick={handleCreateProject}>Crear</button>
      </div>

      <ul style={{ padding: 0, listStyle: "none" }}>
        {projects.map((p) => (
          <li key={p._id} style={{ marginBottom: 8 }}>
            <strong>{p.name}</strong> — {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

