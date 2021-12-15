import styled from 'styled-components'

interface ButtonProps {
   active?: boolean
}

const ButtonReset = styled.button`
   border: none;
   outline: none;
`

export const TimerButton = styled(ButtonReset).attrs<ButtonProps>(
   ({ active }) => ({
      active,
   })
)<ButtonProps>`
   padding: 1.3em 1.7em;
   border-radius: 50px;
   color: ${({ theme: { baseStyles }, active }) =>
      active ? baseStyles.bgSd : baseStyles.lightGrey};
   background-color: ${({ theme: { currentTheme }, active }) =>
      active ? currentTheme.accent : 'transparent'};
   font-weight: bold;
`
