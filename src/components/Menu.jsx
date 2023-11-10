import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import pointer from '../assets/imgs/pokemon-pointer.png'

const Menu = () => {
  const setActive = ({ isActive }) => (isActive ? 'm-3 active' : 'm-3')
  return (
    <Navbar className='d-flex justify-content-between px-5' variant='light' style={{ background: '#58585A' }}>
      <Navbar.Brand>
        <img width='50' src={pointer} alt='poke icon' />
      </Navbar.Brand>
      <div>
        <NavLink className={setActive} to='/'>Home</NavLink>
        <NavLink className={setActive} to='/pokemones'>Pokemones</NavLink>
      </div>
    </Navbar>
  )
}
export default Menu
