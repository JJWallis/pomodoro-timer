import styled from 'styled-components'

export const TimersContainer = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   padding: 0.4rem 0.5rem;
   border-radius: 50px;
   background-color: ${({ theme: { baseStyles } }) => baseStyles.bgSd};
`

export const TimersContainerOverlay = styled.div`
   padding: 1rem 1.7rem;
   border-radius: 50px;
   background-color: ${({ theme: { currentTheme } }) => currentTheme.accent};
`
