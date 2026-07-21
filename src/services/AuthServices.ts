import type { User, UserCredentials } from "../types/user.types";
import { users } from "../users/Users";


class AuthServices {
  login(credentials: UserCredentials): User | null {
    const userData = users.get(credentials.login)

    if (userData && userData.password === credentials.password) {
      return userData.user
    }

    return null
  }
}

export const authService = new AuthServices()