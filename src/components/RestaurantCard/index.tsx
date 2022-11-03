import { Link } from 'react-router-dom'
import { Heading } from '../Heading/styles'
import * as S from './styles'

type RestaurantCardProps = {
  id: string
  name: string
  image: string
}

const RestaurantCard = ({ id, name, image }: RestaurantCardProps) => (
  <S.Card>
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
  </S.Card>
)

export default RestaurantCard
