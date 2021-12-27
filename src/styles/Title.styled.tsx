import styled, { css } from 'styled-components'

interface Props {
   subTitle?: boolean
}

export const TimerTitle = styled.h1<Props>`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -65%);
   font-size: 4rem;
   color: ${({ theme: { baseStyles } }) => baseStyles.softWhite};
   ${({ subTitle }) =>
      subTitle &&
      css`
         font-size: 1.5rem;
         text-transform: uppercase;
         left: 51%;
         transform: translate(-55%, 40%);
      `}
`
