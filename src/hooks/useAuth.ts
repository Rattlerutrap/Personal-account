import { useState } from "react";
import type { User, UserCredentials } from "../types/user.types";
import { authService } from "../services/AuthServices";

export function useAuth()
{
    const [user, setUser] = useState<User | null>(null)

    const login = (credentials : UserCredentials) =>
    {
        setUser(authService.login(credentials))
    } 

    const logout = () => 
    {
        setUser(null)
    }

    return {user, login, logout}
}