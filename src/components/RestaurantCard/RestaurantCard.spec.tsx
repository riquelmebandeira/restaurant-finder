import { screen } from '@testing-library/react'
import RestaurantCard from '.'
import { renderWithRouterAndTheme } from '../../styles/render-theme'

const props = {
  id: '1',
  name: 'arabek',
  image: ''
}

describe('<RestaurantCard />', () => {
  it('should render correctly', () => {
    renderWithRouterAndTheme(<RestaurantCard {...props} />)

    const img = screen.getByRole('img', { name: /foto do restaurante arabek/i })
    const link = screen.getByRole('link', { name: /arabek/i })

    expect(img).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', `/restaurant/${props.id}`)
  })

  it('should match the snapshot', () => {
    const { container } = renderWithRouterAndTheme(
      <RestaurantCard {...props} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
