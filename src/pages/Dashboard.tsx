import React, {useEffect} from 'react';
import {AppShell, useMantineTheme,} from '@mantine/core';
import ShellHeader from "../components/shared/mantine/ShellHeader";
import ShellFooter from "../components/shared/mantine/ShellFooter";
import ShellNavbar from "../components/shared/mantine/navbar/ShellNavbar";
import {Outlet, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsLogged} from "../redux/features/loginSlice";

const Dashboard = () => {
    const theme = useMantineTheme()
    const LOGIN = '/login'
    const navigate = useNavigate()
    const isLogged = useSelector(selectIsLogged())

    useEffect(() => {
        if (!isLogged) {
            navigate(LOGIN)
        }
    }, [])

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