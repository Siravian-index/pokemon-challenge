import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import Dashboard from "../pages/Dashboard";
import SearchPage from "../pages/SearchPage";
import FavoritePage from "../pages/FavoritePage";
import ListPage from "../pages/ListPage";

interface IAppRoutesProps {}

const AppRoutes: React.FunctionComponent<IAppRoutesProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Dashboard/>} >
            {/* dashboard and children */}
            <Route index element={<ListPage/>}/>
            <Route path='search' element={<SearchPage/>}/>
            <Route path='favorite' element={<FavoritePage/>}/>
        </Route>
        {/* <Route path='*' element={<PageNotFound/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
