import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderTheme } from '../../styles/render-theme'
import FormSearch from '.'

const props = {
  placeholder: 'Encontre um restaurante',
  icon: '',
  alt: 'ícone de pesquisa',
  setSearchTerm: jest.fn()
}

describe('<FormSearch />', () => {
  it('should render correctly', () => {
    renderTheme(<FormSearch {...props} />)

    const icon = screen.getByRole('img', { name: 'ícone de pesquisa' })
    const input = screen.getByPlaceholderText('Encontre um restaurante')

    expect(icon).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('should trigger "setSearchTerm" when enter is pressed', () => {
    renderTheme(<FormSearch {...props} />)

    const input = screen.getByPlaceholderText('Encontre um restaurante')

    userEvent.type(input, 'arabek')
    expect(props.setSearchTerm).toBeCalledTimes(0)

    userEvent.type(input, '{enter}')
    expect(props.setSearchTerm).toBeCalledTimes(1)
  })

  it('should match the snapshot', () => {
    const { container } = renderTheme(<FormSearch {...props} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
