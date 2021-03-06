import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {InitialPokemonState} from "../../types/IPokemon";
import {fetchStatus} from "../../types/generalTypes";
import {RootState} from "../app/store";
import {getPokemonListThunk} from "../../services/pokemonThunk";

const initialState: InitialPokemonState = {
    pokemonList: [],
    filter: '',
    status: fetchStatus.IDLE,
    error: null,
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<number>) => {
            state.pokemonList = state.pokemonList.map(pokemon => pokemon.id === action.payload ? {
                ...pokemon,
                isFavorite: !pokemon.isFavorite
            } : pokemon)
        },
        updateFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload
        },
    },
    extraReducers: (builder) => {
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

//actions
export const {toggleFavorite, updateFilter} = pokemonSlice.actions

// selectors
export const selectPokemonList = () => (state: RootState) => state.pokemon.pokemonList
export const selectPokemonByName = (name: string) => (state: RootState) => state.pokemon.pokemonList.filter(p => p.name === name)
export const selectPokemonFavorite = () => (state: RootState) => state.pokemon.pokemonList.filter(p => p.isFavorite)
export const selectPokemonFilter = () => (state: RootState) => state.pokemon.filter
export const selectPokemonStatus = () => (state: RootState) => state.pokemon.status
export const selectPokemonError = () => (state: RootState) => state.pokemon.error