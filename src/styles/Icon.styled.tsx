import styled from 'styled-components'

export const Cog = styled.svg`
   width: 50px;
   height: 50px;
   opacity: 0.6;
   fill: #ced6fa;
   transition: fill 0.2s ease-in-out;
   &:hover {
      fill: ${({ theme: { currentTheme } }) => currentTheme.accent};
   }
`
