import pool from "../config/db";
import { User } from "../interfaces/user.interface";

export class UserService {
    // Obtener todos los usuarios
    public async getAllUsers(): Promise<User[]> {
        try {
            const result = await pool.query("SELECT id, email FROM users");
            return result.rows;
        } catch (error) {
            console.error("Error retrieving users:", error);
            throw new Error("Database query error");
        }
    }

    // Obtener un usuario por ID
    public async getUserById(id: number): Promise<User | null> {
        try {
            const result = await pool.query("SELECT id, email FROM users WHERE id = $1", [id]);
            return result.rows[0] || null;
        } catch (error) {
            console.error("Error retrieving user by ID:", error);
            throw new Error("Database query error");
        }
    }

    // Crear un nuevo usuario
    public async createUser(email: string, password: string): Promise<User> {
        try {
            const result = await pool.query(
                "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
                [email, password]
            );
            return result.rows[0];
        } catch (error) {
            console.error("Error creating user:", error);
            throw new Error("Database query error");
        }
    }

    // Actualizar un usuario por ID
    public async updateUser(id: number, email: string, password: string): Promise<User | null> {
        try {
            const result = await pool.query(
                "UPDATE users SET email = $1, password = $2 WHERE id = $3 RETURNING id, email",
                [email, password, id]
            );
            return result.rows[0] || null;
        } catch (error) {
            console.error("Error updating user:", error);
            throw new Error("Database query error");
        }
    }

    // Eliminar un usuario por ID
    public async deleteUser(id: number): Promise<void>  {
        try {
            await pool.query("DELETE FROM users WHERE id = $1", [id]);
            
        } catch (error) {
            console.error("Error deleting user:", error);
            throw new Error("Database query error");
        }
    }
}
