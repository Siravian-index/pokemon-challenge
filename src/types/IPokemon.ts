import {ErrorType, fetchStatus, IRawResponse} from "./generalTypes";

export interface InitialPokemonState {
  pokemonList: IPokemon[]
  error: ErrorType
  status: fetchStatus
}


export interface IPokemon {
  id: number
  name: string
  sprite: string
  types: {
    type: {
      name: string
    }[]
  }
  weight: number
  isFavorite: boolean
}
