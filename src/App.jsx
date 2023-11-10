import { Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Detail from './views/Detail'
import Home from './views/Home'
import Pokemons from './views/Pokemons'
function App () {
  return (
    <div className='App'>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemones' element={<Pokemons />} />
        <Route path='/pokemones/:name' element={<Detail />} />
      </Routes>
    </div>
  )
}
export default App
