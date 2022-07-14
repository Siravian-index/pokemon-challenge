import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import Dashboard from "../pages/Dashboard";
import SearchPage from "../pages/SearchPage";
import FavoritePage from "../pages/FavoritePage";
import ListPage from "../pages/ListPage";
import PokemonPage from "../pages/PokemonPage";

interface IProps {}

const AppRoutes: React.FC<IProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Dashboard/>} >
            <Route index element={<ListPage/>}/>
            <Route path=':name' element={<PokemonPage/>}/>
            <Route path='search' element={<SearchPage/>}/>
            <Route path='favorite' element={<FavoritePage/>}/>
        </Route>
        {/* <Route path='*' element={<PageNotFound/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
