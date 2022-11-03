import styled from 'styled-components'

type HeaderProps = {
  backgroundImg: string
}

export const Header = styled.header<HeaderProps>`
  position: relative;
  height: 19rem;
  width: 100%;

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

  .back-button {
    img {
      margin-right: 1.4rem;
    }

    display: flex;
    cursor: pointer;
    position: absolute;
    top: 5.2rem;
    left: 17.4rem;
    z-index: 100;
  }
`
export const Div = styled.div`
  display: flex;
  align-items: center;
  max-width: 55rem;
  padding: 0 1rem;
  margin: auto;
  position: relative;
  top: 4rem;
  z-index: 100;

  img {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    margin-right: 2.5rem;
  }
`
