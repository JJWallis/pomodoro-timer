import styled from 'styled-components'

export const TimersContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   max-width: 440px;
   padding: 0.4rem 0.5rem;
   margin-bottom: 1rem;
   border-radius: 50px;
   background-color: ${({ theme: { baseStyles } }) => baseStyles.bgSd};
   @media (min-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      margin-bottom: 2rem;
   }
`
