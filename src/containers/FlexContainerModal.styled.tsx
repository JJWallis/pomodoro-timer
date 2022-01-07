import styled, { css } from 'styled-components'
import { FlexContainerMobile } from './FlexContainerMobile.styled'

interface Props {
   header?: boolean
   timerInputs?: boolean
   colors?: boolean
   radioButtons?: boolean
}

export const FlexContainerModal = styled(FlexContainerMobile)<Props>`
   gap: 1rem;
   ${({ header }) =>
      header &&
      css`
         width: 85%;
         margin-inline: auto;
         flex-direction: row;
         justify-content: space-between;
      `}
   ${({ radioButtons }) =>
      radioButtons &&
      css`
         flex-direction: row;
         gap: 1rem;
      `}
    @media (min-width: ${({ theme: { baseStyles } }) =>
      baseStyles.mediaBreakpoint}) {
      flex-direction: row;
      justify-content: space-between;
   }
`
