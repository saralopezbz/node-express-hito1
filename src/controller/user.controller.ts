
import pool from '../config/db'
import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

// Obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

// Obtener un usuario por ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const user = await userService.getUserById(Number(id));
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await userService.createUser(email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

// Actualizar un usuario por ID
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { email, password } = req.body;

    try {
        const user = await userService.updateUser(Number(id), email, password);
        if (!user) {
             res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

// Eliminar un usuario por ID
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await userService.deleteUser(Number(id));
        res.status(204).send(); // 204 No Content
    } catch (error) {
        res.status(500).json({ message: error });
    }
};