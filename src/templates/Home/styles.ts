import styled from 'styled-components'

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  grid-gap: 3rem;
  justify-items: center;
`

export const Container = styled.main`
  max-width: 75rem;
  min-height: 30rem;
  margin: auto;
  margin-bottom: 17.5rem;
  padding: 0 1rem;
  position: relative;

  h2 {
    margin: 3rem 0;
  }
`
