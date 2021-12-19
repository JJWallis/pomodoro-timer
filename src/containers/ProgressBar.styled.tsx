import styled from 'styled-components'

interface Props {
   progressAmount: number
   // make required
}

export const ProgressMeter = styled.div<Props>`
   position: relative;
   width: 100%;
   height: 100%;
   min-width: 10px;
   max-width: 100%;
   /* kyle does calc(100% - offset value to fit in parent bar) */
   border-radius: 50%;
   inset: 0;
   background-color: ${({ theme: { currentTheme } }) => currentTheme.accent};
   background: conic-gradient(
      ${({ theme: { currentTheme } }) => currentTheme.accent}
         ${({ progressAmount }) => progressAmount}%,
      ${({ theme: { baseStyles } }) => baseStyles.bgSd} 50%
   );
   &::before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 84%;
      height: 84%;
      border-radius: 50%;
      background-color: ${({ theme: { baseStyles } }) => baseStyles.bgSd};
   }
`
