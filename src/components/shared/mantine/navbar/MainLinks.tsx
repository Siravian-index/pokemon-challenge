import React from 'react';
import {ListDetails, Search, Star} from 'tabler-icons-react';
import {ActionIcon, ThemeIcon, UnstyledButton, useMantineTheme} from '@mantine/core';
import {useNavigate} from "react-router-dom";

interface MainLinkProps {
    icon: React.ReactNode;
    color: string;
    path: string
}

function MainLink({icon, color, path}: MainLinkProps) {
    const navigate = useNavigate()
    const theme = useMantineTheme()
    const isDark = theme.colorScheme === 'dark'
    return (
        <UnstyledButton
            sx={(theme) => ({
                display: 'block',
                width: '100%',
                marginBottom: '15px',
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                '&:hover': {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                },
            })}
            onClick={() => navigate(path)}
        >
            <ThemeIcon color={color} variant={`${isDark ? 'light': 'filled'}`}>
                {icon}
            </ThemeIcon>


        </UnstyledButton>
    );
}

const data = [
    {icon: <ListDetails size={16}/>, color: 'blue', path: '/'},
    {icon: <Search size={16}/>, color: 'teal', path: '/search'},
    {icon: <Star size={16}/>, color: 'yellow', path: '/favorite'},
];

export function MainLinks() {
    const links = data.map((link) => <MainLink {...link} key={link.path}/>);
    return <div>{links}</div>;
}