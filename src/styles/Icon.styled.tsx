import styled, { css } from 'styled-components'

interface Props {
   progressAmount?: number
   downwards?: boolean
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
   position: absolute;
   top: 50%;
   transform: translateY(-35%);
   right: -3px;
   fill: #ced6fa;
   transition: fill ${({ theme: { baseStyles } }) => baseStyles.hoverTransition};
   &:hover {
      fill: ${({ theme: { baseStyles } }) => baseStyles.bgPm};
   }
`

export const Arrow = styled(Close)<Props>`
   right: 10px;
   fill: none;
   stroke: #1e213f;
   stroke-opacity: 0.25;
   stroke-width: 2px;
   cursor: pointer;
   transform: translateY(-50%);
   transition: stroke
         ${({ theme: { baseStyles } }) => baseStyles.hoverTransition},
      stroke-opacity
         ${({ theme: { baseStyles } }) => baseStyles.hoverTransition};
   &:hover {
      stroke: ${({ theme: { baseStyles } }) => baseStyles.bgPm};
      stroke-opacity: 1;
      fill: none;
   }
   ${({ downwards }) => downwards && ` transform: translateY(0%);`}
`

export const ProgressCircle = styled.svg<Props>`
   stroke: ${({ theme: { currentTheme } }) => currentTheme.accent};
   fill: none;
   stroke-width: 5;
   stroke-dasharray: ${({ progressAmount }) => progressAmount}, 500;
   stroke-linecap: round;
   transition: stroke-dasharray 1s linear;
`
