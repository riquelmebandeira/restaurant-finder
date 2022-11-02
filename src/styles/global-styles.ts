import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-family: ${({ theme }) => theme.font.family.default}
  }
`

export default GlobalStyle
