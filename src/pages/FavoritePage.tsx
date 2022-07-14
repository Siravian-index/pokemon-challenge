import * as React from "react"
import ListFavorites from "../components/pokemonFavorites/ListFavorites";

interface IProps {}

const FavoritePage : React.FC<IProps> = () => {
    return <>
        <ListFavorites/>
    </>
}

export default FavoritePage


