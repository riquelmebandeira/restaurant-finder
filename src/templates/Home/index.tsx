import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import { Heading } from '../../components/Heading/styles'
import { Loading } from '../../components/Loading/styles'
import { useEffect, useState } from 'react'
import { fetchRestaurants, Restaurant } from '../../api'
import * as S from './styles'

function Home() {
  const [restaurants, setRestaurants] = useState([] as Restaurant[])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchRestaurants()
      .then((res) => setRestaurants(res))
      .catch(() => setError(true))
    setIsLoading(false)
  }, [])

  return (
    <>
      <Header main />
      <S.Container>
        <Heading
          color="darkDown"
          level={2}
          size="xxlarge"
        >
          Restaurantes
        </Heading>

        {isLoading && <Loading />}

        <S.Grid>
          {restaurants.map(({ id, name, image }) => (
            <RestaurantCard
              key={id}
              id={id}
              name={name}
              image={image}
            />
          ))}
        </S.Grid>

        {error && (
          <Heading
            color="darkDown"
            level={2}
            size="huge"
          >
            Ocorreu um erro.
            <br />
            Tente novamente mais tarde.
          </Heading>
        )}
      </S.Container>
    </>
  )
}

export default Home
