import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import loginReducer from '../features/loginSlice'
import pokemonReducer from '../features/pokemonSlice'

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    login: loginReducer,
  },
})

//types
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
