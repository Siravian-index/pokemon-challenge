import * as React from "react"
import {Navbar, Text} from "@mantine/core";
import {MainLinks} from "./MainLinks";

interface IProps {
}

const ShellNavbar: React.FC<IProps> = () => {
    return <Navbar p='xs' width={{base: 50}}>
        <Navbar.Section>
            <MainLinks/>
        </Navbar.Section>
    </Navbar>
}

export default ShellNavbar


