import * as React from "react"
import {Loader} from "@mantine/core";

interface IProps {}

const LoadingSpinner : React.FC<IProps> = () => {
    return <Loader color="yellow" size="lg" variant="dots" />;
}

export default LoadingSpinner


