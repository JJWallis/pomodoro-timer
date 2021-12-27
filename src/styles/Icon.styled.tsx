import styled from 'styled-components'

interface Props {
   progressAmount: number
}

export const Cog = styled.svg`
   width: 40px;
   height: 40px;
   opacity: 0.6;
   fill: #d7e0ff;
   transition: opacity
         ${({ theme: { baseStyles } }) => baseStyles.hoverTransition},
      transform ${({ theme: { baseStyles } }) => baseStyles.hoverTransition};
   &:hover {
      opacity: 1;
      transform: rotate(180deg) scale(1.05);
   }
`

export const Close = styled.svg`
   width: 20px;
   height: 20px;
   opacity: 1;
   position: absolute;
   top: 50%;
   transform: translateY(-35%);
   right: -3px;
`

export const ProgressCircle = styled.svg<Props>`
   stroke: ${({ theme: { currentTheme } }) => currentTheme.accent};
   fill: none;
   stroke-width: 5;
   stroke-dasharray: ${({ progressAmount }) => progressAmount}, 500;
   stroke-linecap: round;
   transition: stroke-dasharray 1s linear;
`
