import * as React from "react"
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectPokemonByName} from "../../redux/features/pokemonSlice";
import PokemonGrid from "../pokemonList/PokemonGrid";
import EmptyPokemonList from "../shared/EmptyPokemonList";

interface IProps {
}

const PokemonDetails: React.FC<IProps> = () => {
    const params = useParams()
    const name = params.name as string
    const maybePokemon = useSelector(selectPokemonByName(name))

    return <>
        {maybePokemon.length > 0 ?
            <PokemonGrid list={maybePokemon}/>
            :
            <EmptyPokemonList/>
        }


    </>
}

export default PokemonDetails


