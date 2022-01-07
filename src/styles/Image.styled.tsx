import styled from 'styled-components'

export const Logo = styled.img`
   @media (min-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      margin-bottom: 2rem;
   }
`
