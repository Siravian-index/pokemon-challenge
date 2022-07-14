import * as React from "react"
import {Center, Text} from "@mantine/core";
import MadeWithLove from "./MadeWithLove";

interface IProps {
    text?: string
}

const EmptyPokemonList: React.FC<IProps> = ({text}) => {
    const defaultText = "There are not pokemon here, yet..."
    return <Center>
        <Text color='dimmed'>{text || defaultText}</Text>
    </Center>
}

export default EmptyPokemonList


