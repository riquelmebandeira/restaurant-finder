import styled from 'styled-components'

export const Card = styled.div`
  width: 35rem;
  height: 17rem;
  position: relative;
  border-radius: 0.8rem;

  *:not(h6) {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
    border-radius: 0.8rem;
    filter: brightness(60%);
  }

  h6 {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: ${({ theme }) => theme.colors.white};
  }
`
