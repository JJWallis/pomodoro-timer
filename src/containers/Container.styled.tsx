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
   background-color: #101021;
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
   padding: 2rem 1rem;
   background-color: white;
   min-height: 600px;
   opacity: ${({ opacity }) => opacity};
   pointer-events: ${({ opacity }) => (opacity ? 'all' : 'none')};
`

export const ModalSectionContainer = styled.div`
   border-bottom: 1px solid lightgrey;
   padding-block: 1rem;
`
