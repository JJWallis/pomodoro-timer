import styled from 'styled-components'

export const TimersContainer = styled.div`
   display: flex;
   align-items: center;
   padding: 0.5rem;
   border-radius: 50px;
   background-color: ${({ theme: { baseStyles } }) => baseStyles.bgSd};
`
