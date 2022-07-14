import * as React from "react"
import {useSelector} from "react-redux";
import {selectPokemonError, selectPokemonList, selectPokemonStatus} from "../../redux/features/pokemonSlice";
import {fetchStatus} from "../../types/generalTypes";
import FetchErrorComponent from "../shared/FetchErrorComponent";
import LoadingSpinner from "../shared/LoadingSpinner";
import PokemonGrid from "./PokemonGrid";

const PokemonList : React.FC = () => {
    //work on search bar
    //login?

    const pokemonList = useSelector(selectPokemonList())
    const status = useSelector(selectPokemonStatus())
    const error = useSelector(selectPokemonError())

    return <>
        {error && <FetchErrorComponent error={error}/>}
        {status === fetchStatus.PENDING && <LoadingSpinner/>}
        {pokemonList.length > 0 && <PokemonGrid list={pokemonList}/>}
    </>
}

export default PokemonList


