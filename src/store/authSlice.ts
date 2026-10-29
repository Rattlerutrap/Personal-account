import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from '../types/user.types'
import type { RootState } from './index'

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
    loggedIn(state, action: PayloadAction<{ user: User, login: string}>) {
        state.user = action.payload.user
        state.login = action.payload.login
    },
    logout(state) {
      state.user = null
      state.login = null
    },
  },
})



export const { loggedIn, logout } = authSlice.actions

export const selectUser = (state: RootState) => state.auth.user
export const selectLogin = (state: RootState) => state.auth.login

export default authSlice.reducer