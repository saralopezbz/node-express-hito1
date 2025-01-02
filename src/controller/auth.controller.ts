import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

// Login de usuario
export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const user = await authService.validateUser(email, password); // Usar await

        if (!user) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        res.json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error});
    }
};

// Registro de usuario
export const register = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const emailTaken = await authService.isEmailTaken(email); // Usar await

        if (emailTaken) {
            res.status(400).json({ message: "User already exists" });
            return;
        }

        const newUser = await authService.createUser(email, password); // Usar await
        res.status(201).json({ message: "User registered successfully", newUser });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error });
    }
};
