import styled, { keyframes } from 'styled-components'
import loadingIcon from '../../assets/icons/loading.svg'

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
