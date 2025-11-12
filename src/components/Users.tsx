// src/components/Users.tsx
import React, { useEffect, useState } from "react";
import { getUsers, createUser } from "../api/api";

interface User {
  _id?: string;
  name?: string;
  email: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  useEffect(() => {
    (async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        console.error("Error al obtener usuarios:", err);
      }
    })();
  }, []);

  const handleCreateUser = async () => {
    if (!newUser.name || !newUser.email) return;
    try {
      const created = await createUser(newUser);
      setUsers((prev) => [...prev, created]);
      setNewUser({ name: "", email: "" });
    } catch (err: any) {
      console.error("Error al crear usuario:", err);
      // si el backend devuelve 400 con mensaje, opcional mostrarlo:
      if (err?.response?.data?.message) {
        alert(`Error: ${err.response.data.message}`);
      } else {
        alert("Error al crear usuario. Revisa la consola.");
      }
    }
  };

  return (
    <div style={{ padding: 12 }}>
      <h2>👥 Usuarios</h2>
      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        <input
          placeholder="Nombre"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          placeholder="Correo"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={handleCreateUser}>Crear Usuario</button>
      </div>

      <ul style={{ padding: 0, listStyle: "none" }}>
        {users.map((u) => (
          <li key={u._id} style={{ marginBottom: 8 }}>
            <strong>{u.name ?? "—"}</strong> — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
