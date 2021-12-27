import styled, { css } from 'styled-components'

interface ContainerProps {
   opacity?: number
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

export const AppContainer = styled(FlexContainerMobile)`
   padding: 3rem 1rem;
   background-color: ${({ theme: { baseStyles } }) => baseStyles.bgPm};
   min-height: 100vh;
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
`

export const ModalContainer = styled.div.attrs(
   ({ opacity }: ContainerProps) => ({
      opacity: opacity,
   })
)`
   width: 90%;
   max-width: 600px;
   min-height: 600px;
   border-radius: 20px;
   padding-block: 1rem;
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   background-color: white;
   opacity: ${({ opacity }) => opacity};
   pointer-events: ${({ opacity }) => (opacity ? 'all' : 'none')};
   transition: opacity 0.45s ease-in-out;
`

export const ModalSectionContainer = styled.div<ModalSectionProps>`
   border-bottom: 1px solid lightgrey;
   padding-block: 1rem;
   width: 90%;
   margin: 0 auto;
   ${({ header }: ModalSectionProps) => header && `width: 100%;`};
   ${({ colors }: ModalSectionProps) => colors && `border-bottom: 0;`};
`
