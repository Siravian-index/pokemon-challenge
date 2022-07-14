import AppRoutes from './routes/AppRoutes'
import DarkModeWrapper from "./darkMode/DarkModeWrapper";
import {useEffect} from "react";
import {fetchStatus} from "./types/generalTypes";
import {getPokemonListThunk} from "./services/pokemonThunk";
import {useSelector} from "react-redux";
import {selectPokemonStatus} from "./redux/features/pokemonSlice";
import {useAppDispatch} from "./redux/app/store";

function App() {
    const POKEMON_LIMIT = 5
    const dispatch = useAppDispatch()
    const status = useSelector(selectPokemonStatus())
    useEffect(() => {
        if (status === fetchStatus.IDLE) {
            dispatch(getPokemonListThunk(POKEMON_LIMIT))
        }
    }, [dispatch])
    return (
        <DarkModeWrapper>
            <AppRoutes/>
        </DarkModeWrapper>
    )
}

export default App
