import * as React from "react"
import {Center, Text} from "@mantine/core";

interface IProps {}

const EmptyPokemonList : React.FC<IProps> = () => {
    return <Center>
        <Text>There are not pokemon here, yet...</Text>
    </Center>
}

export default EmptyPokemonList


