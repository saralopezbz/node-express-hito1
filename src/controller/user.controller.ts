import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export const getAllUsers = (req: Request, res: Response) => {
  const users = userService.getAllUsers();
  res.json(users);
};
