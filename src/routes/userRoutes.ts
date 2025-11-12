import { Router } from "express";
import { createUser, getUsers } from "../controllers/userController";

const router = Router();

// ✅ Asegúrate de que createUser y getUsers estén exportados correctamente
router.post("/", createUser);
router.get("/", getUsers);

export default router;
