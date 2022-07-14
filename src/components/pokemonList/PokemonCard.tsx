import * as React from "react"
import {useAppDispatch} from "../../redux/app/store";
import {IPokemon} from "../../types/IPokemon";
import {ActionIcon, Badge, Card, Center, Grid, Group, Image, Title, useMantineTheme} from "@mantine/core";
import {Star, StarOff} from "tabler-icons-react";
import {toggleFavorite} from "../../redux/features/pokemonSlice";

interface IProps {
    pokemon: IPokemon
}



const PokemonCard: React.FC<IProps> = ({pokemon}) => {
    const dispatch = useAppDispatch()
    const theme = useMantineTheme();

    return <Grid.Col md={3}>
        <Card shadow="sm" p="lg">
            <FavoriteStar pokemon={pokemon} />
            <Card.Section>
                <Center>
                    <Image src={pokemon.sprite} alt={`${pokemon.name} sprite`} width={300}/>
                </Center>
            </Card.Section>
            <Title order={3} align='center'>{pokemon.name}</Title>

            <Group position="center" style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                <PokemonTypes pokemon={pokemon}/>
            </Group>
        </Card>
    </Grid.Col>
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

export default PokemonCard


