import * as React from "react"
import {useEffect} from "react"
import {useAppDispatch} from "../../redux/app/store";
import {useSelector} from "react-redux";
import {selectPokemonError, selectPokemonList, selectPokemonStatus} from "../../redux/features/pokemonSlice";
import {fetchStatus} from "../../types/generalTypes";
import {getPokemonListThunk} from "../../services/pokemonThunk";
import FetchErrorComponent from "../shared/FetchErrorComponent";
import {IPokemon} from "../../types/IPokemon";
import PokemonCard from "./PokemonCard";
import {Grid} from "@mantine/core";
import LoadingSpinner from "../shared/LoadingSpinner";

interface IGridPokemonProps {
    list: IPokemon[]
}

const GridPokemon: React.FC<IGridPokemonProps> = ({list}) => {
    const content = list.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)
    return <Grid>
        {content}
    </Grid>
}

const PokemonList : React.FC = () => {
    //fix fetching pokemon DONE
    //make pokemon card
    //make func to display type with colors
    //add favorite action
    //work on search bar
    //login?

    const POKEMON_LIMIT = 50
    const dispatch = useAppDispatch()
    const pokemonList = useSelector(selectPokemonList())
    const status = useSelector(selectPokemonStatus())
    const error = useSelector(selectPokemonError())
    useEffect(() => {
        if (status === fetchStatus.IDLE) {
            dispatch(getPokemonListThunk(50))
        }
    }, [dispatch])


    return <>
        {error && <FetchErrorComponent error={error}/>}
        {status === fetchStatus.PENDING && <LoadingSpinner/>}
        {pokemonList.length > 0 && <GridPokemon list={pokemonList}/>}
    </>
}

export default PokemonList


