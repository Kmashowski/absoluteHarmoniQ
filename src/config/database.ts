import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // carga .env

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error("❌ No se encontró MONGO_URI en las variables de entorno.");
    }

    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000, // espera 10 seg máx
    });

    console.log("✅ Conectado a MongoDB correctamente");
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
