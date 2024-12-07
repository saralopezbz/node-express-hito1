import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

export const login = (req: Request, res: Response): void => {
  const { email, password } = req.body;
  const user = authService.validateUser(email, password);

  if (!user) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }

  res.json({ message: "Login successful", user });
};

export const register = (req: Request, res: Response): void => {
  const { email, password } = req.body;

  if (authService.isEmailTaken(email)) {
    res.status(400).json({ message: "User already exists" });
    return;
  }

  const newUser = authService.createUser(email, password);
  res.status(201).json({ message: "User registered successfully", newUser });
};
