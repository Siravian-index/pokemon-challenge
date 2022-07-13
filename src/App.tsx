import { useSelector } from 'react-redux'
import { selectIsLogged } from './redux/features/loginSlice'
import AppRoutes from './routes/AppRoutes'

function App() {
  const isLogged = useSelector(selectIsLogged())
  console.log(isLogged)

  return <AppRoutes />
}

export default App
