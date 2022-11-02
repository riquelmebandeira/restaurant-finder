import { Link } from 'react-router-dom'
import FormSearch from '../FormSearch'
import searchIcon from '../../assets/icons/search.svg'
import logo from '../../assets/logo.svg'
import * as Styled from './styles'
import { Heading, Text } from '../Typography'

const Header = () => (
  <Styled.Header>
    <div className="content">
      <Link to="/">
        <img
          src={logo}
          alt="logomarca"
        />
      </Link>

      <div className="text-box">
        <Heading color="darkDown">Descubra novos sabores</Heading>
        <Text
          as="span"
          fontSize="large"
          color="darkUp"
        >
          Aqui eu converso com você sobre <br /> nossa proposta
        </Text>
      </div>
    </div>

    <FormSearch
      placeholder="Encontre um restaurante"
      icon={searchIcon}
      alt="ícone de pesquisa"
      setSearchTerm={() => true}
    />
  </Styled.Header>
)

export default Header
