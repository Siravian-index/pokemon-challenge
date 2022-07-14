import * as React from "react"
import {useEffect} from "react"
import {useAppDispatch} from "../../redux/app/store";
import {useSelector} from "react-redux";
import {selectPokemonError, selectPokemonList, selectPokemonStatus} from "../../redux/features/pokemonSlice";
import {fetchStatus} from "../../types/generalTypes";
import {getPokemonListThunk} from "../../services/pokemonThunk";

interface IProps {
}

// const GridPokemon = (rawList: IRawResponse[]) => {
//     return rawList.map(raw => <PokemonCard key={raw.name} raw={raw} />)
// }

const PokemonList : React.FC<IProps> = () => {
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
            dispatch(getPokemonListThunk(5))
        }
    }, [dispatch])
    return <>
    </>
}

export default PokemonList


