import { Router } from "express";
import { login, register } from "../controller/auth.controller";

const router = Router();

router.post("/login", login); // Ruta de login
router.post("/register", register); // Ruta de registro

export default router;
