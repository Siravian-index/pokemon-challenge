import {createSlice} from '@reduxjs/toolkit'
import {InitialPokemonState} from "../../types/IPokemon";
import {fetchStatus} from "../../types/generalTypes";
import {getPokemonThunk, getRawPokemonListThunk} from "../../services/pokemonThunk";

const initialState: InitialPokemonState = {
    pokemonList: [],
    rawList: [],
    status: fetchStatus.IDLE,
    error: null,
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //raw list response
        builder.addCase(getRawPokemonListThunk.pending, (state) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(getRawPokemonListThunk.rejected, (state) => {
            state.error = "Something went wrong on initial fetch."
            state.status = fetchStatus.REJECTED
        })
        builder.addCase(getRawPokemonListThunk.fulfilled, (state, action) => {
            state.rawList = action.payload
            state.status = fetchStatus.FULFILLED
        })
    //    single pokemon
        builder.addCase(getPokemonThunk.pending, (state) => {
            state.status = fetchStatus.PENDING
        })
        builder.addCase(getPokemonThunk.rejected, (state) => {
            state.error = "Something went wrong while fetching a particular pokemon."
            state.status = fetchStatus.REJECTED
        })
        builder.addCase(getPokemonThunk.fulfilled, (state, action) => {
            state.pokemonList.push(action.payload)
            state.status = fetchStatus.FULFILLED
        })
    },
})

export default pokemonSlice.reducer

// selectors
