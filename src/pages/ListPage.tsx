import * as React from "react"
import PokemonList from "../components/pokemonList/PokemonList";

interface IProps {}

const ListPage : React.FC<IProps> = () => {
    return <>
        <PokemonList/>
    </>
}

export default ListPage


