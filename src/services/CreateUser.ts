import type { User, UserCredentials } from "../types/user.types";
import { users } from "../users/Users";

export function CreateUser(credentials: UserCredentials, userData: User): boolean {
  if (users.has(credentials.login)) {
    return false
  }
  users.set(credentials.login, {
    password: credentials.password,
    user: { avatar: undefined, fname: userData.fname, sname: userData.sname, age: userData.age }
  })
  return true
}