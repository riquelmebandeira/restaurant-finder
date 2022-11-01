import { Link } from 'react-router-dom'
import * as Styled from './styles'

type RestaurantCardProps = {
  id: number
  name: string
  image: string
}

const RestaurantCard = ({ id, name, image }: RestaurantCardProps) => (
  <Styled.Card>
    <Link to={`/restaurant/${id}`}>
      <img
        src={image}
        alt={`Foto do restaurante ${name}`}
      />
      <h6>{name}</h6>
    </Link>
  </Styled.Card>
)

export default RestaurantCard
