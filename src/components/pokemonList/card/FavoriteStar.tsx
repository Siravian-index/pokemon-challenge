import * as React from "react";
import {useAppDispatch} from "../../../redux/app/store";
import {toggleFavorite} from "../../../redux/features/pokemonSlice";
import {ActionIcon} from "@mantine/core";
import {Star, StarOff} from "tabler-icons-react";
import {IPokemon} from "../../../types/IPokemon";


interface IProps {
    pokemon: IPokemon
}


const FavoriteStar: React.FC<IProps> = ({pokemon}) => {
    const dispatch = useAppDispatch()

    const handleClick = (id: number) => {
        dispatch(toggleFavorite(id))
    }
    return <ActionIcon color='yellow' onClick={() => handleClick(pokemon.id)}>
        {pokemon.isFavorite ? <StarOff/> : <Star/>}
    </ActionIcon>
}

export default FavoriteStar