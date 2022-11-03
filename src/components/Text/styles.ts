import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

type TextProps = {
  color?: keyof typeof theme.colors
  fontWeight?: 100 | 400 | 800
  fontSize?: keyof typeof theme.font.sizes
}

export const Text = styled.p<TextProps>`
  ${({ color = 'white', fontWeight = 400, fontSize = 'xsmall' }) => css`
    font-weight: ${fontWeight};
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes[fontSize]};
  `}
`
