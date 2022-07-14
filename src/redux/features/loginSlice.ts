import {RootState} from './../app/store'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ILoggedState, IUser} from "../../types/IUser";


const initialState: ILoggedState = {
  user: null,
  error: null
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUser: (state, action:PayloadAction<IUser>) => {
      state.user = action.payload
    },
    logoutUser: (state) => {
      state.user = null
    },
    setLoginError: (state, action:PayloadAction<string>) => {
      state.error = action.payload
    }
  },
})

export default loginSlice.reducer

export const {loginUser, logoutUser, setLoginError} = loginSlice.actions


// selectors
export const selectUser = () => (state: RootState) => state.login.user
export const selectUserError = () => (state: RootState) => state.login.error
