import { useEffect, useState } from 'react'
import * as S from './styles'
import { fetchRestaurants, Restaurant } from '../../api'
import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import { Heading } from '../../components/Heading/styles'
import { Text } from '../../components/Text/styles'
import { useSearchParams } from 'react-router-dom'

function Search() {
  const [searchParams] = useSearchParams()
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const searchTerm = searchParams.get('restaurant') as string

  useEffect(() => {
    setIsLoading(true)
    fetchRestaurants(1, 10, searchTerm)
      .then((res) => {
        setRestaurants(res)
        setIsLoading(false)
      })
      .catch(() => {
        setError(true)
        setIsLoading(false)
      })
  }, [searchParams])

  return (
    <>
      <Header />
      <S.Container>
        <S.Flex>
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
        </S.Flex>

        {isLoading && <S.Loading />}

        {!isLoading && !error ? (
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
        ) : null}

        {!isLoading && restaurants.length < 1 ? (
          <Heading
            color="darkDown"
            level={2}
            size="huge"
          >
            Nenhum resultado foi encontrado.
          </Heading>
        ) : null}

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

export default Search
