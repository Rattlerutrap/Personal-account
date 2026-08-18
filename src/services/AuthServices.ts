import type { User } from "../types/user.types";


class AuthServices {
  login(login: string, password: string): User | null {
    const userData = localStorage.getItem(login)
    
    if (userData && JSON.parse(userData).password === password) {
      return JSON.parse(userData)
    }

    return null
  }
}

export const authService = new AuthServices()