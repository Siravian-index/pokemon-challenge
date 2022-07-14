import * as React from "react"
import {Center, TextInput} from "@mantine/core";
import {useEffect, useState} from "react";
import {useDebouncedValue} from "@mantine/hooks";
import {useAppDispatch} from "../../redux/app/store";
import {updateFilter} from "../../redux/features/pokemonSlice";

interface IProps {
}

const FilterPokemonInput: React.FC<IProps> = () => {
    const [input, setInput] = useState("")
    const [debouncedValue] = useDebouncedValue(input, 300);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(updateFilter(debouncedValue))
    }, [debouncedValue])
    return <Center>
        <TextInput
            placeholder='Search by name...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
    </Center>
}

export default FilterPokemonInput


