import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokemonSelected, setPokemonSelected] = useState('')
  const navigate = useNavigate()
  const url = 'https://pokeapi.co/api/v2/pokemon'
  const getPokemons = async () => {
    const res = await fetch(url)
    const { results } = await res.json()
    setPokemons(results)
  }
  useEffect(() => {
    getPokemons()
  }, [])
  const viewDetail = async () => {
    navigate(`/pokemones/${pokemonSelected}`)
  }
  return (
    <div className='mt-5 text-center'>
      <h1>Selecciona un pokemon</h1>
      <div className='col-5 col-sm-3 col-lg-2 mx-auto'>
        <select value={pokemonSelected} className='form-select text-center' onChange={({ target }) => setPokemonSelected(target.value)}>
          <option value='' disabled>Pokemones</option>
          {pokemons?.map((poke) => (
            <option key={poke.name} value={poke.name}>{poke.name}</option>
          ))}
        </select>
      </div>
      <div className='mt-3'>
        <Button className={`btn btn-dark ${(!pokemonSelected || pokemonSelected === '0') ? 'disabled' : ''}`} onClick={() => viewDetail()}>Ver Detalle</Button>
      </div>
    </div>
  )
}
export default Pokemons
