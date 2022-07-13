import * as React from "react"
import {Header, Text} from "@mantine/core";

interface IProps {}

const ShellHeader : React.FC<IProps> = () => {
    return <Header height={70} p="md">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>

            <Text>Pokemon List</Text>
        </div>
    </Header>
}

export default ShellHeader


