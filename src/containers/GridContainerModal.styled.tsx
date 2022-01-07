import styled from 'styled-components'

export const GridContainerModal = styled.div`
   display: grid;
   gap: 1rem;
   @media (min-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      grid-template-columns: repeat(3, 1fr);
      gap: 0 1.3rem;
   }
`

export const GridItemModal = styled.div`
   display: grid;
   gap: 0.5rem;
   @media (max-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
   }
`
