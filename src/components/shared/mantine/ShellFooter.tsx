import * as React from "react"
import {Avatar, Button, Footer, Group, Text} from "@mantine/core";
import {useAppDispatch} from "../../../redux/app/store";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {logoutUser, selectUser} from "../../../redux/features/loginSlice";

interface IProps {}

const ShellFooter : React.FC<IProps> = () => {
    const login = '/login'
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLogged = useSelector(selectUser())

    useEffect(() => {
        if (!isLogged) {
            navigate(login)
        }
    }, [])

    const handleClick = () => {
        dispatch(logoutUser())
        navigate(login)
    }
    return  <Footer height={60} p="md">
        <Group>
            <Avatar radius="xl" src={isLogged && isLogged.photoURL} alt='Pokemon trainer' />
            <Text>{isLogged && isLogged.name}</Text>
            <Button compact color='red' onClick={handleClick}>Log out</Button>
        </Group>

    </Footer>
}

export default ShellFooter


