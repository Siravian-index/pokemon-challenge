import * as React from "react"
import {Center, Loader} from "@mantine/core";

interface IProps {}

const LoadingSpinner : React.FC<IProps> = () => {
    return <Center>
        <Loader color="yellow" size="lg" variant="dots" />
    </Center>
}

export default LoadingSpinner


