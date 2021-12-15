import styled, { css } from 'styled-components'

interface Props {
   subTitle?: boolean
}

export const Title = styled.h1`
   font-size: 1.5rem;
   color: ${({ theme: { baseStyles } }) => baseStyles.lightGrey};
`

export const TimerTitle = styled.h2<Props>`
   font-size: 4rem;
   color: ${({ theme: { baseStyles } }) => baseStyles.softWhite};
   ${({ subTitle }) =>
      subTitle &&
      css`
         font-size: 1.5rem;
         text-transform: uppercase;
      `}
`
