import { useEffect, useState } from 'react'
import * as Styled from './styles'
import { fetchRestaurants, Restaurant } from '../../api'
import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import { Heading, Text } from '../../components/Typography'
import { useSearchParams } from 'react-router-dom'

function Search() {
  const [searchParams] = useSearchParams()
  const [restaurants, setRestaurants] = useState([] as Restaurant[])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const searchTerm = searchParams.get('restaurant') as string

  useEffect(() => {
    fetchRestaurants(1, 10, searchTerm)
      .then((res) => setRestaurants(res))
      .catch(() => setError(true))
    setIsLoading(false)
  }, [searchParams])

  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.Wrapper>
          <Heading
            color="darkDown"
            level={2}
            size="xxlarge"
          >
            Resultados
          </Heading>

          <div className="text-box">
            <Text
              as="span"
              color="darkUp"
            >
              Resultados para
            </Text>
            <Heading
              color="darkDown"
              level={4}
              size="large"
            >
              {searchParams.get('restaurant')}
            </Heading>
          </div>
        </Styled.Wrapper>

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

        {restaurants.length < 1 && (
          <Heading
            color="darkDown"
            level={2}
            size="huge"
          >
            Nenhum resultado foi encontrado.
          </Heading>
        )}

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

export default Search
