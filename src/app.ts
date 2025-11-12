import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes";
import projectRoutes from "./routes/projectRoutes";

const app: Application = express(); // 🔹 debe ir antes de usar app.use

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("🌎 HarmoniQ API funcionando correctamente");
});

app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);

export default app;
