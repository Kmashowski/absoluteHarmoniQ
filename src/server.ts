import app from "./app";
import connectDB from "./config/db";
import dotenv from "dotenv";

dotenv.config();

// ✅ Conexión a MongoDB
connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
