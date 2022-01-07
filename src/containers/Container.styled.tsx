import styled, { css } from 'styled-components'
import { FlexContainerMobile } from './FlexContainerMobile.styled'

interface ContainerProps {
   opacity?: number
   isModalToggled: boolean
}

interface ModalSectionProps {
   header?: boolean
   timerInputs?: boolean
   colors?: boolean
   radioButtons?: boolean
}

export const FlexContainerModal = styled(
   FlexContainerMobile
)<ModalSectionProps>`
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

export const InputContainer = styled.div`
   position: relative;
`

export const AppContainer = styled(FlexContainerMobile)<ContainerProps>`
   padding: 3rem 1rem;
   background-color: ${({ theme: { baseStyles } }) => baseStyles.bgPm};
   min-height: 100vh;
   @media (max-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      gap: 4rem;
   }

   &::before {
      content: '';
      display: block;
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 998;
      opacity: 0;
      pointer-events: none;
      transition: opacity
         ${({ theme: { baseStyles } }) => baseStyles.hoverTransition};
      ${({ isModalToggled }) =>
         isModalToggled &&
         `
            opacity: 1;
            pointer-events: all;
      `}
   }
`
