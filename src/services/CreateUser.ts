import type { User } from "../types/user.types";
import { users } from "../users/Users";

export function CreateUser(login: string, userData: User): boolean {
  if (users.has(login)) {
    return false
  }
  users.set(login, 
    { password: userData.password, avatar: undefined, fname: userData.fname, sname: userData.sname, age: userData.age }
  )
  return true
}