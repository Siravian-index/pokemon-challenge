import * as React from "react"
import PokemonCard from "./PokemonCard";
import {Grid} from "@mantine/core";
import {IPokemon} from "../../types/IPokemon";

interface IProps {
    list: IPokemon[]

}

const PokemonGrid : React.FC<IProps> = ({list}) => {
    const content = list.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)
    return <Grid justify='center'>
        {content}
    </Grid>
}

export default PokemonGrid


