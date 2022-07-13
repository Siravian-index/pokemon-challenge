import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'

interface IAppRoutesProps {}

const AppRoutes: React.FunctionComponent<IAppRoutesProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route>{/* dashboard and children */}</Route>
        {/* <Route path='*' element={<PageNotFound/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
