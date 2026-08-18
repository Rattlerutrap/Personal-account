import type { User } from "../types/user.types";

export const users = new Map<string, User >(
  [
    ['example@example.com',
      { password: 'example', age: 1, fname: 'Example', sname: 'Example', avatar: undefined  }]
  ]
)