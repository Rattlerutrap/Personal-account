export interface User {
  avatar: string | undefined
  fname: string
  sname: string
  age: number
}

export interface UserCredentials {
  login: string
  password: string
}