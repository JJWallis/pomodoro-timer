import styled from 'styled-components'

export const TimersContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   max-width: 440px;
   padding: 0.4rem 0.5rem;
   margin-bottom: 2.5rem;
   border-radius: 50px;
   background-color: ${({ theme: { baseStyles } }) => baseStyles.bgSd};
`
