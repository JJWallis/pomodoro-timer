import styled, { css } from 'styled-components'

interface ContainerProps {
   opacity?: number
   isModalToggled: boolean
}

interface ModalSectionProps {
   header?: boolean
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
   grid-template-columns: repeat(2, 1fr);
   /* @media (min-width: ${({ theme: { baseStyles } }) =>
      baseStyles.mediaBreakpoint}) {
      grid-template-columns: repeat(3, 1fr);
      gap: 0 1rem;
   } */
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
   border-radius: 20px;
   padding: 2rem 0 5rem;
   position: absolute;
   z-index: 999;
   left: 50%;
   background-color: white;
   pointer-events: ${({ opacity }) => (opacity ? 'all' : 'none')};
   transform: ${({ opacity }) =>
      opacity ? 'translate(-50%)' : 'translate(-200%)'};
   transition: transform 0.45s ease-in-out;
`

export const ModalSectionContainer = styled.div<ModalSectionProps>`
   border-bottom: 1px solid lightgrey;
   padding-block: 1rem;
   width: 90%;
   margin: 0 auto;
   ${({ header }: ModalSectionProps) => header && `width: 100%;`};
   ${({ colors }: ModalSectionProps) => colors && `border-bottom: 0;`};
`
