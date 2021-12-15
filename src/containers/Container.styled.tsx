import styled from 'styled-components'

interface ContainerProps {
   opacity?: number
}

const FlexContainerMobile = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 4rem;
`

export const AppContainer = styled(FlexContainerMobile)`
   padding: 2rem 1rem;
   background-color: ${({ theme: { baseStyles } }) => baseStyles.bgPm};
   min-height: 100vh;
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
   transform: translatex(-50%);
   background-color: white;
   opacity: ${({ opacity }) => opacity};
   pointer-events: ${({ opacity }) => (opacity ? 'all' : 'none')};
   transition: opacity 0.4s ease-in-out;
`

interface ModalSectionProps {
   header?: boolean
}

export const ModalSectionContainer = styled.div<ModalSectionProps>`
   border-bottom: 1px solid lightgrey;
   padding-block: 1rem;
   width: 90%;
   margin: 0 auto;
   ${({ header }: ModalSectionProps) => header && `width: 100%;`};
`
