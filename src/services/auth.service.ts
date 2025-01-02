import {UserService} from "./user.service";
import { User } from "../interfaces/user.interface";

export class AuthService {
    private userService = new UserService();

    public async validateUser(email: string, password: string): Promise<User | undefined> {
        const user = await this.userService.findUserByEmail(email);
        if (user && user.password === password) {
            return user;
        }
        return undefined;
    }

    public async isEmailTaken(email: string): Promise<boolean> {
      try {
          const user = await this.userService.findUserByEmail(email);
          return !!user;
      } catch (error) {
          console.error("Error checking if email is taken:", error);
          throw new Error("Error checking if email is taken");
      }
  }

    public async createUser(email: string, password: string): Promise<User> {
        const user = await this.userService.createUser(email, password);
        return user;
    }
}
