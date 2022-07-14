import * as React from "react"
import {useSelector} from "react-redux";
import {selectPokemonError, selectPokemonFavorite, selectPokemonStatus} from "../../redux/features/pokemonSlice";
import FetchErrorComponent from "../shared/FetchErrorComponent";
import {fetchStatus} from "../../types/generalTypes";
import LoadingSpinner from "../shared/LoadingSpinner";
import PokemonGrid from "../pokemonList/PokemonGrid";
import EmptyPokemonList from "../shared/EmptyPokemonList";

interface IProps {
}

const ListFavorites: React.FC<IProps> = () => {
    const pokemonList = useSelector(selectPokemonFavorite())
    const status = useSelector(selectPokemonStatus())
    const error = useSelector(selectPokemonError())
    return <>
        {error && <FetchErrorComponent error={error}/>}
        {status === fetchStatus.PENDING && <LoadingSpinner/>}
        {pokemonList.length > 0 ? <PokemonGrid list={pokemonList}/> : <EmptyPokemonList/>}
    </>
}

export default ListFavorites


