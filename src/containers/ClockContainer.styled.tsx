import styled from 'styled-components'

export const ClockContainer = styled.div`
   display: grid;
   place-items: center;
   padding-top: 2rem;
   width: 430px;
   height: 430px;
   border-radius: 50%;
   background-image: linear-gradient(to bottom right, #0e112a, #2e325a);
   box-shadow: -2rem -2rem 8rem 0 #272c5a, 5rem 5rem 10rem 0 #121530;
   @media (max-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      width: 400px;
      height: 400px;
   }
`
