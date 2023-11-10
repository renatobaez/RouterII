import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PokeCard from '../components/PokeCard'

const Detail = () => {
  const { name } = useParams()
  const [pokemon, setPookemon] = useState({})
  const url = 'https://pokeapi.co/api/v2/pokemon'
  const getPokemon = async (name) => {
    const res = await fetch(`${url}/${name}`)
    const data = await res.json()
    const src = data.sprites.other.dream_world.front_default
    const stats = data.stats.map((stat) => ({
      name: stat.stat.name,
      base: stat.base_stat
    }))
    const types = data.types.map(({ type }) => type.name).join(' ')
    setPookemon({ name, stats, src, types })
  }
  useEffect(() => {
    getPokemon(name)
  }, [name])
  return <PokeCard pokemon={pokemon} />
}
export default Detail
