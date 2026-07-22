import type { User } from "../types/user.types";

export function EditUserField<T extends keyof User>(user: User, fieldName: T, newValue: User[T])
{
    user[fieldName] = newValue
    return {...user}
}