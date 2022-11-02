import { useEffect, useState } from 'react'
import * as Styled from './styles'
import { fetchRestaurants, Restaurant } from '../../api'
import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import { Heading } from '../../components/Typography'

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
      <Header />
      <Styled.Container>
        <Heading
          color="darkDown"
          level={2}
          size="xxlarge"
        >
          Restaurantes
        </Heading>

        {isLoading && <Styled.Loading />}

        <Styled.Grid>
          {restaurants.map(({ id, name, image }) => (
            <RestaurantCard
              key={id}
              id={id}
              name={name}
              image={image}
            />
          ))}
        </Styled.Grid>

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
      </Styled.Container>
    </>
  )
}

export default Home
