import * as React from "react"
import PokemonDetails from "../components/SinglePokemon/PokemonDetails";

interface IProps {}

const PokemonPage : React.FC<IProps> = () => {
    return <>
        <PokemonDetails/>
    </>
}

export default PokemonPage


