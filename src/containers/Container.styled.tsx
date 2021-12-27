import styled, { css } from 'styled-components'

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

const FlexContainerMobile = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 3rem;
`

export const FlexContainerModal = styled(
   FlexContainerMobile
)<ModalSectionProps>`
   gap: 1rem;
   ${({ header }) =>
      header &&
      css`
         width: 90%;
         margin-inline: auto;
         flex-direction: row;
         justify-content: space-between;
      `}
   ${({ radioButtons }) =>
      radioButtons &&
      css`
         flex-direction: row;
         gap: 0.5rem;
      `}
   @media (min-width: ${({ theme: { baseStyles } }) =>
      baseStyles.mediaBreakpoint}) {
      flex-direction: row;
      justify-content: space-between;
   }
`

export const GridContainerModal = styled.div`
   display: grid;
   gap: 1rem;
   @media (min-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      grid-template-columns: repeat(3, 1fr);
      gap: 0 1.3rem;
   }
`

export const NumberInputsContainer = styled.div`
   display: grid;
   gap: 0.5rem;
   @media (max-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
   }
`

export const InputContainer = styled.div`
   position: relative;
`

export const AppContainer = styled(FlexContainerMobile)<ContainerProps>`
   padding: 3rem 1rem;
   background-color: ${({ theme: { baseStyles } }) => baseStyles.bgPm};
   min-height: 100vh;
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

export const ClockContainer = styled.div`
   display: grid;
   place-items: center;
   padding-top: 2rem;
   width: 430px;
   height: 430px;
   border-radius: 50%;
   background-image: linear-gradient(to bottom right, #0e112a, #2e325a);
   box-shadow: -5rem -5rem 10rem 0 #272c5a, 5rem 5rem 10rem 0 #121530;
   @media (max-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      width: 400px;
      height: 400px;
      box-shadow: -3rem -3rem 10rem 0 #272c5a, 3rem 3rem 10rem 0 #121530;
   }
`

export const ModalContainer = styled.div.attrs(
   ({ opacity }: ContainerProps) => ({
      opacity: opacity,
   })
)`
   width: 90%;
   max-width: 600px;
   border-radius: 25px;
   padding: 0.5rem 0 2.5rem;
   position: absolute;
   z-index: 999;
   left: 50%;
   background-color: white;
   pointer-events: ${({ opacity }) => (opacity ? 'all' : 'none')};
   opacity: ${({ opacity }) => (opacity ? 1 : 0)};
   transform: ${({ opacity }) =>
      opacity ? 'translate(-50%)' : 'translate(-200%)'};
   transition: transform 0.6s cubic-bezier(0.04, -0.03, 0.52, 1.49),
      opacity 0.5s linear;
   @media (max-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      max-width: 400px;
   }
   @media (min-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      padding: 0rem 0 2.5rem;
   }
`

export const ModalSectionContainer = styled.div<ModalSectionProps>`
   border-bottom: 1px solid lightgrey;
   padding-block: 1.3rem;
   width: 90%;
   margin: 0 auto;
   ${({ header }: ModalSectionProps) => header && `width: 100%;`};
   ${({ timerInputs }: ModalSectionProps) =>
      timerInputs && `padding-block: 1.2rem;`};
   ${({ colors }: ModalSectionProps) => colors && `border-bottom: 0;`};
   @media (min-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      padding-block: 2rem;
   }
`
