import styled from 'styled-components'

interface ModalProps {
   opacity?: number
   header?: boolean
   timerInputs?: boolean
   colors?: boolean
   radioButtons?: boolean
}

export const ModalContainer = styled.div.attrs(({ opacity }: ModalProps) => ({
   opacity: opacity,
}))`
   width: 85%;
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

export const ModalSectionContainer = styled.div<ModalProps>`
   border-bottom: 1px solid lightgrey;
   padding-block: 1.3rem;
   width: 85%;
   margin: 0 auto;
   ${({ header }: ModalProps) => header && `width: 100%;`};
   ${({ timerInputs }: ModalProps) => timerInputs && `padding-block: 1.2rem;`};
   ${({ colors }: ModalProps) => colors && `border-bottom: 0;`};
   @media (min-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      padding-block: 1.8rem;
   }
`
