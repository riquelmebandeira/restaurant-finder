import styled from 'styled-components'

type HeaderProps = {
  backgroundImg: string
}

export const Header = styled.header<HeaderProps>`
  position: relative;
  height: 19rem;
  width: 100%;

  // BACKGROUND IMAGE
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.backgroundImg});
    background-size: cover;
    background-position: center;
    filter: brightness(50%);
  }
`

export const BackButton = styled.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  top: 5.2rem;
  left: 17.4rem;
  z-index: 100;

  img {
    margin-right: 1.4rem;
  }
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  margin: auto;
  max-width: 55rem;
  padding: 0 1rem;
  position: relative;
  top: 4rem;
  z-index: 100;

  img {
    border-radius: 50%;
    height: 12rem;
    margin-right: 2.5rem;
    width: 12rem;
  }
`
