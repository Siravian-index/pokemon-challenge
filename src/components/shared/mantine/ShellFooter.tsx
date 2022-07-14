import * as React from "react"
import {Avatar, Button, Footer, Group, Text} from "@mantine/core";

interface IProps {}

const ShellFooter : React.FC<IProps> = () => {
    return  <Footer height={60} p="md">
        <Group>
            <Avatar radius="xl" alt='Pokemon trainer' />
            <Text>Ash Ketchum</Text>
            <Button compact color='red'>Log out</Button>
        </Group>

    </Footer>
}

export default ShellFooter


