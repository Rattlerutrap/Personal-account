import { useState } from "react";
import type { User } from "../types/user.types";
import { authService } from "../services/AuthServices";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)

  const login = (login: string, password: string ): boolean => {
    const foundUser = authService.login(login, password)
    

    if (foundUser) {
      setUser(foundUser)
      return true
    }
    else {
      setUser(null)
      return false
    }
  }

  const logout = () => {
    setUser(null)
  }

  return { user, login, logout }
}