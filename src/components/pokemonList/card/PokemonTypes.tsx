import * as React from "react";
import {Badge, useMantineTheme} from "@mantine/core";
import {IPokemon} from "../../../types/IPokemon";

interface IProps {
    pokemon: IPokemon
}

const PokemonTypes: React.FC<IProps> = ({pokemon}) => {
    const pokeTypes = {
        bug: '#A6B91A',
        dragon: '#6F35FC',
        electric: '#F7D02C',
        grass: '#7AC74C',
        poison: '#A33EA1',
        fighting: '#C22E28',
        flying: '#A98FF3',
        ghost: '#735797',
        ground: '#E2BF65',
        ice: '#96D9D6',
        normal: '#A8A77A',
        rock: '#B6A136',
        water: "#6390F0",
        fire: '#EE8130',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',

    }
    const theme = useMantineTheme();
    const isDark = theme.colorScheme === 'dark'
    const content = pokemon.types.map(type => {
        const variantStyle = isDark ? 'light' : 'filled'
        // @ts-ignore
        const typeColor = pokeTypes[type]
        return <Badge key={type} variant={variantStyle} styles={{root: {backgroundColor: typeColor}}}>{type}</Badge>
    })
    return <>
        {content}
    </>
}

export default PokemonTypes