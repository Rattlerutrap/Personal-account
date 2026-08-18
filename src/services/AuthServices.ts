import type { User } from "../types/user.types";
import { users } from "../users/Users";


class AuthServices {
  login(login: string, password: string): User | null {
    const userData = users.get(login)
    
    if (userData && userData.password === password) {
      return userData
    }

    return null
  }
}

export const authService = new AuthServices()