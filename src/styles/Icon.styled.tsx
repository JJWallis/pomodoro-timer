import styled from 'styled-components'

export const Cog = styled.svg`
   width: 40px;
   height: 40px;
   opacity: 0.6;
   fill: #ced6fa;
   transition: fill 0.2s ease-in-out;
   &:hover {
      fill: ${({ theme: { currentTheme } }) => currentTheme.accent};
   }
`

export const Close = styled(Cog)`
   width: 20px;
   height: 20px;
   opacity: 1;
   position: absolute;
   top: 50%;
   transform: translateY(-35%);
   right: -3px;
`

export const ProgressCircle = styled.svg`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   stroke: ${({ theme: { currentTheme } }) => currentTheme.accent};
   fill: none;
   stroke-width: 5;
`
