import * as React from "react"
import {useEffect} from "react"
import {IRawResponse} from "../../types/generalTypes";
import {getPokemonThunk} from "../../services/pokemonThunk";
import {useAppDispatch} from "../../redux/app/store";
import {useSelector} from "react-redux";
import {selectPokemonByName, selectPokemonList} from "../../redux/features/pokemonSlice";

interface IProps {
    raw: IRawResponse
}

const PokemonCard: React.FC<IProps> = ({raw}) => {
    const dispatch = useAppDispatch()
    const pokemon = useSelector(selectPokemonByName(raw.name))
    const list = useSelector(selectPokemonList())


    useEffect(() => {
        console.log("fetched!")
        dispatch(getPokemonThunk(raw))
    }, [dispatch])

    return <>
        {pokemon && <p>{pokemon.name} list length = {list.length}</p>}
    </>
}

export default PokemonCard


