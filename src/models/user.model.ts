import { User } from "../interfaces/user.interface";

export const findUserByEmail = (
  email: string,
  users: User[]
): User | undefined => {
  return users.find((user) => user.email === email);
};

export const createUser = (email: string, password: string): User => {
  return { id: Date.now(), email, password };
};
