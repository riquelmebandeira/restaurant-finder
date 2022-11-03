import styled from 'styled-components'
import img from '../../assets/header-background.png'

export const Header = styled.header`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  height: 37.5rem;
  position: relative;
  padding: 0 1rem;
  width: 100%;

  .content {
    max-width: 110rem;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 3rem 1rem;
  }

  .text-box {
    margin-top: -0.9rem;
    text-align: right;
  }

  form {
    bottom: 4rem;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 95%;
  }
`
