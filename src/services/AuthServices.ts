import type { User, UserCredentials } from "../types/user.types";


class AuthServices
{
    private users = new Map<string, {password: string, user: User}>(
        [
            ['example@example.com', 
                { password: 'example', user: { age: 1, fname: 'Example', sname: 'Example', avatar: undefined}}]
        ]
    )

    login(credentials: UserCredentials) : User | null
    {
        const userData = this.users.get(credentials.login);

        if (userData && userData.password === credentials.password)
        {
            return userData.user
        }

        return null
    }
}