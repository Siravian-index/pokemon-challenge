import {createSlice} from '@reduxjs/toolkit'
import {InitialPokemonState} from "../../types/IPokemon";
import {fetchStatus} from "../../types/generalTypes";
import {RootState} from "../app/store";
import {getPokemonListThunk} from "../../services/pokemonThunk";

const initialState: InitialPokemonState = {
    pokemonList: [],
    status: fetchStatus.IDLE,
    error: null,
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //raw list response
        builder.addCase(getPokemonListThunk.pending, (state) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(getPokemonListThunk.rejected, (state) => {
            state.error = "Something went wrong on initial fetch."
            state.status = fetchStatus.REJECTED
        })
        builder.addCase(getPokemonListThunk.fulfilled, (state, action) => {
            state.pokemonList = action.payload
            state.status = fetchStatus.FULFILLED
        })
    },
})

export default pokemonSlice.reducer

// selectors
export const selectPokemonList = () => (state: RootState) => state.pokemon.pokemonList
export const selectPokemonByName = (name: string) => (state: RootState) => state.pokemon.pokemonList.find(p => p.name === name)
export const selectPokemonStatus = () => (state: RootState) => state.pokemon.status
export const selectPokemonError = () => (state: RootState) => state.pokemon.error