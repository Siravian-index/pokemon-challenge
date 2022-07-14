import React from 'react';
import {AppShell, Text, useMantineTheme,} from '@mantine/core';
import ShellHeader from "../components/shared/mantine/ShellHeader";
import ShellFooter from "../components/shared/mantine/ShellFooter";
import ShellNavbar from "../components/shared/mantine/navbar/ShellNavbar";
import {Outlet} from "react-router-dom";

const Dashboard = () => {
    const theme = useMantineTheme();
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            fixed
            navbar={<ShellNavbar/>}
            footer={<ShellFooter/>}
            header={<ShellHeader/>}
        >
            <Outlet/>
        </AppShell>
    );
}

export default Dashboard