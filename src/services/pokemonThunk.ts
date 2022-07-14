import {createAsyncThunk} from "@reduxjs/toolkit";
import {IRawResponse} from "../types/generalTypes";
import {IPokemon} from "../types/IPokemon";

const ENDPOINT = 'https://pokeapi.co/api/v2/'

const getPokemon = async (raw: IRawResponse) => {
    const response = await fetch(raw.url)
    const data = await response.json()
    const pokemon: IPokemon = {
        name: data.name,
        types: data.types.map((obj: { type: { name: string } }) => obj.type.name),
        id: data.id,
        isFavorite: false,
        sprite: data.sprites.front_default,
        weight: data.weight
    }
    return pokemon
}

export const getPokemonListThunk = createAsyncThunk( "get/pokemonList",async (limit: number = 50) => {
    const response = await fetch(`${ENDPOINT}pokemon?limit=${limit}`)
    const data = await response.json()
    const rawList = data.results as IRawResponse[]
    const result: IPokemon[] = []
    for (const rawItem of rawList) {
        const pokemon = await getPokemon(rawItem)
        result.push(pokemon)
    }
    return result
})


