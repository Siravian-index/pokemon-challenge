import * as React from "react"
import {useEffect} from "react"
import {Container, Grid, Group, Paper, Text, Title} from "@mantine/core";
import {selectUser, selectUserError} from "../../redux/features/loginSlice";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import LoginWithGoogle from "./LoginWithGoogle";

interface IProps {
}

const LoginForm: React.FC<IProps> = () => {
    const HOME = '/'
    const navigate = useNavigate()
    const isLogged = useSelector(selectUser())
    const error = useSelector(selectUserError())

    useEffect(() => {
        if (isLogged) {
            navigate(HOME)
        }
    }, [])

    return <section
        style={{height: '100vh', display: 'flex', justifyContent: "center", alignItems: "center"}}>
        <div>
            <Title align='center'>Welcome!</Title>
            <Text color='dimmed' align='center'>please login in</Text>
            <Group position='center'>
            <LoginWithGoogle/>
            </Group>
            {error && <Text color='red' size='sm'>There was an error, try again!</Text>}
        </div>
    </section>
}

export default LoginForm


