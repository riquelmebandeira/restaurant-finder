import styled from 'styled-components'

export const Container = styled.main`
  max-width: 55rem;
  margin: auto;
  margin-bottom: 17.5rem;
  padding: 0 1rem;
`

type InfoProps = {
  first?: boolean
}

export const Info = styled.div<InfoProps>`
  margin-top: ${(props) => (props.first ? '3rem' : '2rem')};
`

export const HorizontalLine = styled.hr`
  margin-top: 3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.light};
`
