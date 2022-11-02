import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      darkDown: string
      dark: string
      darkUp: string
      white: string
      lightDown: string
      light: string
      lightMedium: string
      lightUp: string
    }
    font: {
      family: {
        default: string
      }
      sizes: {
        huge: string
        xxlarge: string
        xlarge: string
        large: string
        medium: string
        small: string
        xsmall: string
        xxsmall: string
      }
    }
  }
}
