import { useSelector } from 'react-redux'
import { selectIsLogged } from './redux/features/loginSlice'

function App() {
  const isLogged = useSelector(selectIsLogged())
  console.log(isLogged)

  return <div>hi</div>
}

export default App
