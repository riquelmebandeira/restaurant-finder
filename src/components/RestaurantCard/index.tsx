import { Link } from 'react-router-dom'
import { Heading } from '../Typography'
import * as Styled from './styles'

type RestaurantCardProps = {
  id: string
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
      <Heading
        level={6}
        color="white"
        size="medium"
      >
        {name}
      </Heading>
    </Link>
  </Styled.Card>
)

export default RestaurantCard
