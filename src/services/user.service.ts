import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { User } from "../interfaces/user.interface";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersFilePath = path.join(__dirname, "../../data/users.json");

export class UserService {
  private getUsers(): User[] {
    return JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
  }

  private saveUsers(users: User[]): void {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
  }

  public findUserByEmail(email: string): User | undefined {
    const users = this.getUsers();
    return users.find((user) => user.email === email);
  }

  public createUser(email: string, password: string): User {
    const users = this.getUsers();
    const newUser: User = { id: Date.now(), email, password };
    users.push(newUser);
    this.saveUsers(users);
    return newUser;
  }

  public getAllUsers(): User[] {
    return this.getUsers();
  }
}
