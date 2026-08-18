import type { User } from "../types/user.types";

export function CreateUser(login: string, userData: User): boolean {
  if (localStorage.hasOwnProperty(login)) {
    return false
  }
  localStorage.setItem(login, 
    JSON.stringify({ password: userData.password, avatar: undefined, fname: userData.fname, sname: userData.sname, age: userData.age })
  )
  return true
}