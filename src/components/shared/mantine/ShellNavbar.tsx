import * as React from "react"
import {Navbar, Text} from "@mantine/core";

interface IProps {
}

const ShellNavbar: React.FC<IProps> = () => {
    return <Navbar p='xs' width={{base: 50}}>
        <Text>Icon</Text>
    </Navbar>
}

export default ShellNavbar


