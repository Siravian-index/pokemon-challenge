import { RootState } from './../app/store'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogged: false,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    toggleIsLogged: (state) => {
      state.isLogged = !state.isLogged
    },
  },
})

export default loginSlice.reducer

// selectors
export const selectIsLogged = () => (state: RootState) => state.login.isLogged
