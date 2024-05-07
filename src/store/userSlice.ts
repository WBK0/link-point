import { createSlice } from '@reduxjs/toolkit'

export type UserSlice = {
  isLoggedIn: boolean,
  API_TOKEN: string
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    API_TOKEN: sessionStorage.getItem('token') || ''
  },
  reducers: {
    login: (state, action) => {
      sessionStorage.setItem('token', action.payload);
      
      state.isLoggedIn = true,
      state.API_TOKEN = action.payload
    },

    updateIsLoggedIn: (state) => {
      state.isLoggedIn = true
    }
  },
})

export const { login, updateIsLoggedIn } = userSlice.actions

export default userSlice.reducer