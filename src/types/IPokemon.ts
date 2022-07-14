import {ErrorType, fetchStatus, IRawResponse} from "./generalTypes";

export interface InitialPokemonState {
  pokemonList: IPokemon[]
  error: ErrorType
  status: fetchStatus
  filter: string
}


export interface IPokemon {
  id: number
  name: string
  sprite: string
  types: string[]
  weight: number
  isFavorite: boolean
}
