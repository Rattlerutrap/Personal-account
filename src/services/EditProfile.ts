import type { User } from "../types/user.types";


export default function EditProfile<T extends keyof User>(login: string, fieldName: T, newValue: User[T]) {

    const user = localStorage.getItem(login)

    if (user) {
        const updatedUser = editUserField(JSON.parse(user), fieldName, newValue)
        localStorage.setItem(login, JSON.stringify(updatedUser));
        return updatedUser
    }
     
}

function editUserField<T extends keyof User>(user: User, fieldName: T, newValue: User[T]) {
    user[fieldName] = newValue
    return {...user}
}