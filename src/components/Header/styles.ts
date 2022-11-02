import styled from "styled-components";
import img from '../../assets/header-background.png'

export const Header = styled.header`
background-image: url(${img});
background-size: cover;
background-position: center;
height: 37.5rem;
position: relative;
width: 100vw;

.content {
  max-width: 110rem;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 3rem 1rem;
}

.text-box {
  margin-top: -1rem;
  text-align: right;
}

form {
  position: absolute;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
`