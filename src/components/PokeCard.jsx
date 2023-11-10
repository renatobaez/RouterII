/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap'
const PokeCard = ({ pokemon }) => {
  const { name, stats, src, types } = pokemon
  return (
    <Card style={{ width: '38rem' }} className='mt-5 mx-auto flex-row p-2'>
      <Card.Img height='250' variant='top' src={src} />
      <Card.Body>
        <Card.Title className='fw-bold'>{name}</Card.Title>
        <ul className='text-left'>
          <Card.Text>
            {stats?.map((stat, i) => (
              <li key={i}>
                {stat.name}: {stat.base}
              </li>
            ))}
          </Card.Text>
        </ul>
        <Card.Text className='text-secondary'>{types}</Card.Text>
      </Card.Body>
    </Card>
  )
}
export default PokeCard
