import { screen } from '@testing-library/react'
import FormSearch from '.'
import { renderWithRouterAndTheme } from '../../styles/render-theme'

const props = {
  placeholder: 'Encontre um restaurante',
  icon: '',
  alt: 'ícone de pesquisa'
}

describe('<FormSearch />', () => {
  it('should render correctly', () => {
    renderWithRouterAndTheme(<FormSearch {...props} />)

    const icon = screen.getByRole('img', { name: 'ícone de pesquisa' })
    const input = screen.getByPlaceholderText('Encontre um restaurante')

    expect(icon).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('should match the snapshot', () => {
    const { container } = renderWithRouterAndTheme(<FormSearch {...props} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
