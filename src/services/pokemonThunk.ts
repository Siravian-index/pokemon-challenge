import {createAsyncThunk} from "@reduxjs/toolkit";
import {IRawResponse} from "../types/generalTypes";
import {IPokemon} from "../types/IPokemon";

const ENDPOINT = 'https://pokeapi.co/api/v2/'


export const getRawPokemonListThunk = createAsyncThunk("rawList", async (limit: number = 50) => {
    const response = await fetch(`${ENDPOINT}pokemon?limit=${limit}`)
    const data = await response.json()
    const rawList = data.result
    return rawList as IRawResponse[]
})

export const getPokemonThunk = createAsyncThunk('pokemon', async (raw: IRawResponse) => {
    const response = await fetch(raw.url)
    const data = await response.json()
    const pokemon: IPokemon = {
        name: data.name,
        types: data.types,
        id: data.id,
        isFavorite: false,
        sprite: data.sprites.front_default,
        weight: data.weight
    }
    return pokemon
})


