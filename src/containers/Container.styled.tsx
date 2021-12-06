import styled from 'styled-components'

interface ContainerProps {
   opacity?: number
}

const FlexContainerMobile = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

export const AppContainer = styled(FlexContainerMobile)`
   background-color: ${({ theme }) => theme.bgPm};
   min-height: 100vh;
`

export const ModalContainer = styled.div.attrs(
   ({ opacity }: ContainerProps) => ({
      opacity: opacity,
   })
)`
   width: 90%;
   max-width: 600px;
   border-radius: 30px;
   padding-block: 1rem;
   background-color: white;
   min-height: 600px;
   opacity: ${({ opacity }) => opacity};
   pointer-events: ${({ opacity }) => (opacity ? 'all' : 'none')};
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
