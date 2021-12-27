import styled, { css } from 'styled-components'

interface Props {
   subTitle?: boolean
   progressAmount?: number
}

export const TimerTitle = styled.h1<Props>`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -65%);
   font-size: 4rem;
   color: ${({ theme: { baseStyles } }) => baseStyles.softWhite};
   @media (min-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      font-size: 5rem;
   }
   ${({ subTitle }) =>
      subTitle &&
      css<Props>`
         font-size: 1.2rem;
         text-transform: uppercase;
         letter-spacing: 10px;
         left: 53.5%;
         transform: translate(-55%, 140%);
         opacity: ${({ progressAmount }) => (progressAmount === 0 ? '0' : '1')};
         @media (min-width: ${({ theme: { baseStyles } }) =>
               baseStyles.mediaBreakpoint}) {
            font-size: 1.2rem;
         }
      `};
`
