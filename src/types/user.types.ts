export interface User {
  id: number
  avatar?: string | undefined
  fname: string
  sname: string
  age: number
  login: string
}

export interface UserCredentials {
  login: string
  password: string
}