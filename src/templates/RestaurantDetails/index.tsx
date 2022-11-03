import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import RestaurantHeader from '../../components/RestaurantHeader'
import { Heading } from '../../components/Heading/styles'
import { Text } from '../../components/Text/styles'
import { Loading } from '../../components/Loading/styles'
import { fetchRestaurant, Restaurant } from '../../api'
import * as S from './styles'

const RestaurantDetails = () => {
  const { id } = useParams<string>()
  const [details, setDetails] = useState<Restaurant>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchRestaurant(id!)
      .then((res) => {
        setDetails(res)
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }, [])

  if (isLoading) return <Loading />

  if (!isLoading && details)
    return (
      <>
        <RestaurantHeader {...details} />
        <S.Container>
          <S.Info first>
            <Heading
              level={6}
              size="xsmall"
              color="darkDown"
            >
              Descrição
            </Heading>
            <Text
              fontSize="xlarge"
              color="darkUp"
            >
              {details.description}
            </Text>
          </S.Info>

          <S.Info>
            <Heading
              level={6}
              size="xsmall"
              color="darkDown"
            >
              Faixa de preço
            </Heading>
            <Text
              fontSize="small"
              color="darkUp"
            >
              {details.price_range}
            </Text>
          </S.Info>

          <S.HorizontalLine />

          <S.Info first>
            <Heading
              level={6}
              size="xsmall"
              color="darkDown"
            >
              Horários de funcionamento
            </Heading>
            <Text
              fontSize="small"
              color="darkUp"
            >
              {details.opening_hours}
            </Text>
          </S.Info>

          <S.Info>
            <Heading
              level={6}
              size="xsmall"
              color="darkDown"
            >
              Formas de pagamento
            </Heading>
            <Text
              fontSize="small"
              color="darkUp"
            >
              {details.payment_methods}
            </Text>
          </S.Info>
        </S.Container>
      </>
    )

  return <Heading color="darkDown">Ocorreu um erro.</Heading>
}

export default RestaurantDetails
