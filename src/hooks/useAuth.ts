import { useState } from "react";
import type { User, UserCredentials } from "../types/user.types";
import { authService } from "../services/AuthServices";

export function useAuth()
{
    const [user, setUser] = useState<User | null>(null)

    const login = (credentials : UserCredentials) : boolean =>
    {
        const foundUser = authService.login(credentials)

        if (foundUser)
        {
            setUser(foundUser)
            return true
        }
        else
        {
            setUser(null)
            return false
        }
    } 

    const logout = () => 
    {
        setUser(null)
    }

    return {user, login, logout}
}