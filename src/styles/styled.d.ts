import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      darkDown: string,
      dark: string,
      darkUp: string,
      white: string,
      lightDown: string,
      light: string,
      lightMedium: string,
      lightUp: string
    },
    font: {
      family: {
        default: string,
      },
      sizes: {
        h1: string,
        h2: string,
        h3: string,
        h4: string,
        h5: string,
        h6: string,
        lead: string,
        paragraph: string,
        small: string
      },
    }
  }
}