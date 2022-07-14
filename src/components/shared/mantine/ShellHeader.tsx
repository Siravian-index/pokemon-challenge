import * as React from "react"
import {Header, Title} from "@mantine/core";
import pokeball from '../../../assets/pokeball.svg'

interface IProps {}

const PokeballIcon = () => {
    return <img src={pokeball} alt="Pokeball logo" />

}

const ShellHeader : React.FC<IProps> = () => {
    return <Header height={70} p="md">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <PokeballIcon/>
            <Title>Pokedex</Title>
        </div>
    </Header>
}

export default ShellHeader


