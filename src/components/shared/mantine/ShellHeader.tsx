import * as React from "react"
import {Box, Header, Title} from "@mantine/core";
import pokeball from '../../../assets/pokeball.svg'
import ToggleDarkButton from "./ToggleDarkButton";
import {useNavigate} from "react-router-dom";
import MadeWithLove from "../MadeWithLove";

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

const LeftSection = () => {
    return <div style={{display: 'flex', alignItems: 'center'}}>
        <MadeWithLove/>
        <ToggleDarkButton/>
    </div>
}

const ShellHeader: React.FC<IProps> = () => {
    return <Header height={70} p="md">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%'}}>
            <MainTitle/>
            <LeftSection/>
        </div>
    </Header>
}

export default ShellHeader


