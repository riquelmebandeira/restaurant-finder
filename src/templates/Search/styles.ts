import styled from 'styled-components'

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
  margin-bottom: 17.5rem;
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
