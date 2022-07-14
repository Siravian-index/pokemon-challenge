import * as React from 'react'
import LoginForm from "../components/login/LoginForm";

interface ILoginPageProps {}

const LoginPage: React.FC<ILoginPageProps> = () => {
  return <>
    <LoginForm/>
  </>
}

export default LoginPage
