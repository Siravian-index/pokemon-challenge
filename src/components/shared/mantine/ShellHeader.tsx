import * as React from "react"
import {Header, Title} from "@mantine/core";
import pokeball from '../../../assets/pokeball.svg'
import ToggleDarkButton from "./ToggleDarkButton";

interface IProps {
}

const PokeballIcon = () => {
    return <img src={pokeball} alt="Pokeball logo"/>
}

const MainTitle = () => {
    return <div style={{display: 'flex', alignItems: 'center'}}>
        <PokeballIcon/>
        <Title>Pokedex</Title>
    </div>
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


