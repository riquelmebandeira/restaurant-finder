import styled, { css } from 'styled-components'

export const Form = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    max-width: 54rem;
    height: 5rem;
    padding: 1.3rem 2rem;
    border: 1px solid ${theme.colors.lightMedium};
    border-radius: 0.8rem;
    display: flex;
    align-items: center;

    input {
      border: none;
      margin-left: 1rem;
      outline: none;
      width: 100%;

      &::placeholder {
        font-size: ${theme.font.sizes.xsmall};
        font-family: ${theme.font.family.default};
        color: ${theme.colors.dark};
      }
    }
  `}
`
