import type { User } from "../types/user.types";

export const users = new Map<string, { password: string, user: User }>(
  [
    ['example@example.com',
      { password: 'example', user: { age: 1, fname: 'Example', sname: 'Example', avatar: undefined } }]
  ]
)