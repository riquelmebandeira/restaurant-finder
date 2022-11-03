import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

type HeadingProps = {
  color?: keyof typeof theme.colors
  size?: keyof typeof theme.font.sizes
  fontWeight?: 100 | 400 | 800
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading = styled.h1.attrs<HeadingProps>(({ level = 1 }) => ({
  as: `h${level}`
}))<HeadingProps>`
  ${({ color = 'white', size = 'huge', fontWeight = 800 }) => css`
    font-size: ${theme.font.sizes[size]};
    color: ${theme.colors[color]};
    font-weight: ${fontWeight};
    display: block;
  `}
`
export default Heading
