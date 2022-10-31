import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: '#ED1C24',
    darkDown: '#333333',
    dark: '#666666',
    darkUp: '#808080',
    white: '#ffffff',
    lightDown: '#aaaaaa',
    light: '#cccccc',
    lightMedium: '#E6E6E6',
    lightUp: '#f2f2f2'
  },
  font: {
    family: {
      default: "'Poppins', sans-serif",
    },
    sizes: {
      h1: '3.2rem',
      h2: '2.4rem',
      h3: '2rem',
      h4: '1.7rem',
      h5: '1.6rem',
      h6: '1.5rem',
      lead: '1.7rem',
      paragraph: '1.4rem',
      small: '1.2rem'
    },
  }
}