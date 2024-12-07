import { Router } from "express";
import { getAllUsers } from "../controller/user.controller";

const router = Router();

router.get("/", getAllUsers); // Ruta para obtener todos los usuarios

export default router;
