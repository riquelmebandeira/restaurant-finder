import { Link } from 'react-router-dom'
import FormSearch from '../FormSearch'
import { Heading } from '../Heading/styles'
import { Text } from '../Text/styles'
import * as S from './styles'
import searchIcon from '../../assets/icons/search.svg'
import logo from '../../assets/logo.svg'

type HeaderProps = {
  main?: boolean
}

const Header = ({ main = false }: HeaderProps) => (
  <S.Header>
    <div className="content">
      <Link to="/">
        <img
          src={logo}
          alt="logomarca"
        />
      </Link>

      {main && (
        <div className="text-box">
          <Heading
            level={1}
            color="darkDown"
          >
            Descubra novos sabores
          </Heading>
          <Text
            as="span"
            fontSize="large"
            color="darkUp"
          >
            Aqui eu converso com você sobre <br /> nossa proposta
          </Text>
        </div>
      )}
    </div>

    <FormSearch
      placeholder="Encontre um restaurante"
      icon={searchIcon}
      alt="ícone de pesquisa"
    />
  </S.Header>
)

export default Header
