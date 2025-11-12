import mongoose, { Schema, Document } from "mongoose";

// Definimos la interfaz del usuario
export interface IUser extends Document {
  nombre: string;
  email: string;
  password: string;
  tipo_usuario?: string;
  biografia?: string;
  foto_perfil?: string;
  ubicacion?: string;
  redes_sociales?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

// Creamos el esquema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: "user" },
});

// Exportamos el modelo
export default mongoose.model<IUser>("User", userSchema);
