import * as React from "react"
import FilterPokemonInput from "../components/pokemonSearch/FilterPokemonInput";
import {useSelector} from "react-redux";
import {selectPokemonFilter, selectPokemonList} from "../redux/features/pokemonSlice";
import PokemonGrid from "../components/pokemonList/PokemonGrid";
import EmptyPokemonList from "../components/shared/EmptyPokemonList";

interface IProps {
}

const SearchPage: React.FC<IProps> = () => {
    const filter = useSelector(selectPokemonFilter())
    const list = useSelector(selectPokemonList())
    const filteredList = list.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

    return <>
        <FilterPokemonInput/>
        {
            (filter && filteredList.length > 0)
                ?
                <PokemonGrid list={filteredList}/>
                :
                <EmptyPokemonList/>
        }
    </>
}

export default SearchPage


