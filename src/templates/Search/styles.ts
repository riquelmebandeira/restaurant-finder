import styled, { keyframes } from 'styled-components'
import loadingIcon from '../../assets/icons/loading.svg'

export const Grid = styled.div`
  max-width: 75rem;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  justify-items: center;
  grid-gap: 3rem;
`

export const Container = styled.main`
  max-width: 75rem;
  min-height: 30rem;
  margin: auto;
  padding: 0 1rem;
  position: relative;

  h2 {
    margin: 3rem 0;
  }

  .text-box {
    text-align: right;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
