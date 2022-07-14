import * as React from "react"
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/app/store";
import {useSelector} from "react-redux";
import {selectPokemonStatus, selectRawList} from "../../redux/features/pokemonSlice";
import {fetchStatus} from "../../types/generalTypes";
import {getRawPokemonListThunk} from "../../services/pokemonThunk";
import PokemonCard from "./PokemonCard";

interface IProps {}

const PokemonList : React.FC<IProps> = () => {
    const POKEMON_LIMIT = 50
    const dispatch = useAppDispatch()
    const status = useSelector(selectPokemonStatus())
    const rawList = useSelector(selectRawList())
    useEffect(() => {
        if (status === fetchStatus.IDLE) {
            dispatch(getRawPokemonListThunk(POKEMON_LIMIT))
        }
    }, [dispatch])
    return <>
        {rawList.map(raw => <PokemonCard key={raw.name} raw={raw} />)}
    </>
}

export default PokemonList


