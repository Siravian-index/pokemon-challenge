import * as React from "react"
import {Avatar, Button, Footer, Group, Text} from "@mantine/core";
import {useAppDispatch} from "../../../redux/app/store";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsLogged, toggleIsLogged} from "../../../redux/features/loginSlice";
import {useEffect} from "react";

interface IProps {}

const ShellFooter : React.FC<IProps> = () => {
    const login = '/login'
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLogged = useSelector(selectIsLogged())

    useEffect(() => {
        if (!isLogged) {
            navigate(login)
        }
    }, [])

    const handleClick = () => {
        dispatch(toggleIsLogged())
        navigate(login)
    }
    return  <Footer height={60} p="md">
        <Group>
            <Avatar radius="xl" alt='Pokemon trainer' />
            <Text>Ash Ketchum</Text>
            <Button compact color='red' onClick={handleClick}>Log out</Button>
        </Group>

    </Footer>
}

export default ShellFooter


