import * as S from './styles'
import leftArrow from '../../assets/icons/left-arrow.svg'
import { Heading } from '../Heading/styles'
import { Text } from '../Text/styles'
import { useNavigate } from 'react-router-dom'

type RestaurantHeaderProps = {
  name: string
  image: string
  logo: string
  telephone: string
  website: string
}

const RestaurantHeader = ({
  name,
  image,
  logo,
  telephone,
  website
}: RestaurantHeaderProps) => {
  const navigate = useNavigate()

  return (
    <S.Header backgroundImg={image}>
      <S.BackButton onClick={() => navigate(-1)}>
        <img
          src={leftArrow}
          alt="botão de voltar"
        />
        <Text
          as="span"
          color="white"
          fontSize="xxsmall"
          fontWeight={800}
        >
          Voltar
        </Text>
      </S.BackButton>

      <S.Container>
        <img
          src={logo}
          alt={`logomarca do restaurante ${name}`}
        />
        <div>
          <Heading>{name}</Heading>
          <Text>
            {telephone}
            <br />
            {website}
          </Text>
        </div>
      </S.Container>
    </S.Header>
  )
}

export default RestaurantHeader
