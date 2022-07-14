import * as React from "react";
import {useNavigate} from "react-router-dom";
import {Button, Text, useMantineTheme} from "@mantine/core";
import {IPokemon} from "../../../types/IPokemon";

interface IProps {
    pokemon: IPokemon
}

const ExtraDetails: React.FC<IProps> = ({pokemon}) => {
    const HOME = '/'
    const navigate = useNavigate()
    const handleClick = () => navigate(HOME)
    const theme = useMantineTheme();
    const isDark = theme.colorScheme === 'dark'
    return <>
        <Text color='dimmed' size='sm' align='center'>Pokemon usual weight is: {pokemon.weight} kg</Text>
        <Button variant={isDark ? 'light' : 'filled'} color="blue" fullWidth onClick={handleClick}>
            Go back
        </Button>
    </>
}

export default ExtraDetails