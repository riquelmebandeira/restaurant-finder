import styled, { keyframes } from 'styled-components'
import loadingIcon from '../../assets/icons/loading.svg'

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  justify-items: center;
  grid-gap: 3rem;
`

export const Container = styled.div`
  max-width: 75rem;
  margin: auto;
  padding: 0 1rem;
  margin-bottom: 17.5rem;

  h2 {
    margin: 3rem 0;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg)
  }
`

export const Loading = styled.img.attrs({
  alt: 'ícone de carregamento',
  src: loadingIcon
})`
  animation: ${rotate} 2s linear infinite;
`
