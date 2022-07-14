import * as React from "react"
import {ActionIcon, useMantineColorScheme} from "@mantine/core";
import {MoonStars, Sun} from "tabler-icons-react";

interface IProps {}

const ToggleDarkButton : React.FC<IProps> = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
        >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
        </ActionIcon>
    );
}

export default ToggleDarkButton