import {ErrorType, fetchStatus, IRawResponse} from "./generalTypes";

export interface InitialPokemonState {
  pokemonList: IPokemon[]
  rawList: IRawResponse[]
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
