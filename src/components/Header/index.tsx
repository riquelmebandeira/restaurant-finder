import { Link } from 'react-router-dom'
import FormSearch from '../FormSearch'
import searchIcon from '../../assets/icons/search.svg'
import logo from '../../assets/logo.svg'
import * as Styled from './styles'

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
        <h1>Descubra novos sabores</h1>
        <span>
          Aqui eu converso com você sobre <br /> nossa proposta
        </span>
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
