import { createSlice } from '@reduxjs/toolkit'
import type { User } from '../types/user.types'

interface AuthState {
  user: User | null
  login: string | null
}

const initialState: AuthState = {
  user: null,
  login: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null
      state.login = null
    },
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer