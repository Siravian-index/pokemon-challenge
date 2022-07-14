import * as React from "react"
import {Container, Text, Title} from "@mantine/core";

interface IProps {
    error: string
}

const FetchErrorComponent: React.FC<IProps> = ({error}) => {
    return <Container>
        <Title order={4}>Oops...</Title>
        <Text>{error}</Text>
    </Container>
}

export default FetchErrorComponent


