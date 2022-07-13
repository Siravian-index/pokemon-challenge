import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import Dashboard from "../pages/Dashboard";

interface IAppRoutesProps {}

const AppRoutes: React.FunctionComponent<IAppRoutesProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Dashboard/>} >{/* dashboard and children */}</Route>
        {/* <Route path='*' element={<PageNotFound/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
