import { screen } from '@testing-library/react'
import Header from '.'
import { renderWithRouterAndTheme } from '../../styles/render-theme'

describe('<Header />', () => {
  it('should render correctly', () => {
    renderWithRouterAndTheme(<Header />)

    const logo = screen.getByRole('img', { name: /logomarca/i })
    const homeLink = screen.getByRole('link')
    const heading = screen.getByRole('heading', {
      name: /descubra novos sabores/i
    })
    const span = screen.getByText(
      /aqui eu converso com você sobre nossa proposta/i
    )
    const form = screen.getByRole('form')

    expect(logo).toBeInTheDocument()

    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')

    expect(heading).toBeInTheDocument()
    expect(span).toBeInTheDocument()
    expect(form).toBeInTheDocument()
  })
})
