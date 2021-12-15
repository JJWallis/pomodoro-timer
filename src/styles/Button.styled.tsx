import styled from 'styled-components'

interface ButtonProps {
   active?: boolean
}

const ButtonReset = styled.button`
   border: none;
   outline: none;
   background-color: transparent;
`

export const TimerButton = styled(ButtonReset).attrs<ButtonProps>(
   ({ active }) => ({
      active,
   })
)<ButtonProps>`
   padding: 1.2em 1.7em;
   border-radius: 50px;
   font-size: 0.9em;
   font-weight: bold;
   color: ${({ theme: { baseStyles }, active }) =>
      active ? baseStyles.bgSd : baseStyles.lightGrey};
   background-color: ${({ theme: { currentTheme }, active }) =>
      active ? currentTheme.accent : 'transparent'};
   opacity: ${({ active }) => (active ? '1' : '0.4')};
`

export const ModalButton = styled(ButtonReset)``
