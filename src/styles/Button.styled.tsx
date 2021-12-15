import styled from 'styled-components'

interface ButtonProps {
   active?: boolean
   cross?: boolean
   apply?: boolean
}

export const Button = styled.button<ButtonProps>`
   border: none;
   outline: none;
   background-color: transparent;
   ${({ cross }) => cross && `position: relative`}
`

export const TimerButton = styled(Button).attrs<ButtonProps>(({ active }) => ({
   active,
}))<ButtonProps>`
   padding: 1.2em 1.7em;
   border-radius: 50px;
   font-size: 0.9em;
   font-weight: bold;
   color: ${({ theme: { baseStyles }, active }) =>
      active ? baseStyles.bgSd : baseStyles.lightGrey};
   background-color: ${({ theme: { currentTheme }, active }) =>
      active ? currentTheme.accent : 'transparent'};
   opacity: ${({ active }) => (active ? '1' : '0.4')};
   transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
   &:hover {
      background-color: ${({ theme: { currentTheme } }) => currentTheme.accent};
      color: ${({ theme: { baseStyles } }) => baseStyles.bgSd};
   }
`

export const ClockButton = styled(Button)`
   position: relative;
   padding: 1rem;
   border-radius: 50%;
   width: 360px;
   height: 360px;
   background-color: ${({ theme: { baseStyles } }) => baseStyles.bgSd};
   box-shadow: -15px -10px 30px 0px rgba(255, 255, 255, 0.1);
   transition: transform 0.2s ease-in-out;
   &:hover {
      transform: scale(1.05);
   }
`

export const ApplyButton = styled(Button)<ButtonProps>`
   padding: 0.8em 2.7em;
   border-radius: 50px;
   font-size: 0.9em;
   font-weight: bold;
   color: ${({ theme: { baseStyles } }) => baseStyles.lightGrey};
   background-color: ${({ theme: { currentTheme } }) => currentTheme.accent};
   transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
   &:hover {
      opacity: 0.8;
   }
`
