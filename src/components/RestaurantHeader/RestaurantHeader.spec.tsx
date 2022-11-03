import { renderWithRouterAndTheme } from '../../styles/render-theme'
import RestaurantHeader from '.'
import { screen } from '@testing-library/react'

const props = {
  name: 'arabek',
  image: '',
  logo: '',
  telephone: '551143829385',
  website: 'http://www.arabek.com.br'
}

describe('<RestaurantHeader />', () => {
  it('should render correctly', () => {
    renderWithRouterAndTheme(<RestaurantHeader {...props} />)

    const backButton = screen.getByRole('img', { name: /botão de voltar/i })
    const logo = screen.getByRole('img', {
      name: /logomarca do restaurante arabek/i
    })
    const name = screen.getByRole('heading', { level: 1 })
    const telephone = screen.getByText(/551143829385/i)
    const website = screen.getByText(/www.arabek.com.br/i)

    expect(backButton).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(name).toHaveTextContent('arabek')
    expect(telephone).toBeInTheDocument()
    expect(website).toBeInTheDocument()
  })

  it('should match the snapshot', () => {
    const { container } = renderWithRouterAndTheme(
      <RestaurantHeader {...props} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
