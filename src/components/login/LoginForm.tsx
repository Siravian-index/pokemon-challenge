import * as React from "react"
import {Button, Center, Container, Group, Title} from "@mantine/core";
import {useAppDispatch} from "../../redux/app/store";
import {selectIsLogged, toggleIsLogged} from "../../redux/features/loginSlice";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";

interface IProps {
}

const LoginForm: React.FC<IProps> = () => {
    const HOME = '/'
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLogged = useSelector(selectIsLogged())

    useEffect(() => {
        if (isLogged) {
            navigate(HOME)
        }
    }, [])

    const handleClick = () => {
        dispatch(toggleIsLogged())
        navigate(HOME)
    }
    return <Container>
        <Group direction='column' position='center'>
            <Title>Welcome! Please login in</Title>
            <Button onClick={handleClick}>Login</Button>
        </Group>
    </Container>

}

export default LoginForm


