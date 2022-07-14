import * as React from "react"
import {Box, Header, Title} from "@mantine/core";
import pokeball from '../../../assets/pokeball.svg'
import ToggleDarkButton from "./ToggleDarkButton";
import {useNavigate} from "react-router-dom";

interface IProps {
}

const PokeballIcon = () => {
    return <img src={pokeball} alt="Pokeball logo"/>
}


const MainTitle = () => {
    const navigate = useNavigate()
    const handleClick = () => navigate('/')
    return <Box style={{display: 'flex', alignItems: 'center'}} onClick={handleClick} sx={() => ({
        '&:hover': {cursor: "pointer"},
    })}>
        <PokeballIcon/>
        <Title>Pokedex</Title>
    </Box>
}

const ShellHeader: React.FC<IProps> = () => {
    return <Header height={70} p="md">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%'}}>
            <MainTitle/>
            <ToggleDarkButton/>
        </div>
    </Header>
}

export default ShellHeader


