import { UserService } from "./user.service";
import { User } from "../interfaces/user.interface";

export class AuthService {
  private userService = new UserService();

  public validateUser(email: string, password: string): User | undefined {
    const user = this.userService.findUserByEmail(email);
    if (user && user.password === password) {
      return user;
    }
    return undefined;
  }

  public isEmailTaken(email: string): boolean {
    return !!this.userService.findUserByEmail(email);
  }

  public createUser(email: string, password: string): User {
    return this.userService.createUser(email, password);
  }
}
