import * as React from "react"
import {IPokemon} from "../../types/IPokemon";
import {Card, Center, Grid, Group, Image, Title, useMantineTheme} from "@mantine/core";
import {useLocation, useNavigate} from "react-router-dom";
import {capitalizeFirstLetterOf} from "../../utils/stringUtils";
import {ExtraDetails, FavoriteStar, PokemonTypes} from "./card";


interface IProps {
    pokemon: IPokemon
}


const PokemonCard: React.FC<IProps> = ({pokemon}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const inPageDetails = location.pathname.includes(pokemon.name)
    const theme = useMantineTheme();

    const handleNavigate = () => {
        if (!inPageDetails) {
            navigate(`/${pokemon.name}`)
        }
    }

    const pointer = !inPageDetails ? "pointer" : ''

    return <Grid.Col md={3}>
        <Card shadow="sm" p="lg" style={{marginTop: 10}}>
            <FavoriteStar pokemon={pokemon}/>
            <Card.Section onClick={() => handleNavigate()} sx={() => ({
                '&:hover': {cursor: pointer},
            })}>
                <Center>
                    <Image src={pokemon.sprite} alt={`${pokemon.name} sprite`} width={300}/>
                </Center>
            </Card.Section>
            <Title order={3} align='center'>{capitalizeFirstLetterOf(pokemon.name)}</Title>
            <Group position="center" style={{marginBottom: 5, marginTop: theme.spacing.sm}}>
                <PokemonTypes pokemon={pokemon}/>
            </Group>
            {inPageDetails && <ExtraDetails pokemon={pokemon}/>}
        </Card>
    </Grid.Col>
}

export default PokemonCard


