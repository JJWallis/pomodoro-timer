import styled from 'styled-components'

interface ButtonProps {
   active?: boolean
   cross?: boolean
   apply?: boolean
   progressAmount?: number
   resetVisible?: boolean
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
   width: 33.333%;
   min-height: 50px;
   border-radius: 50px;
   font-size: 0.9em;
   font-weight: bold;
   color: ${({ theme: { baseStyles }, active }) =>
      active ? baseStyles.bgSd : baseStyles.lightGrey};
   background-color: ${({ theme: { currentTheme }, active }) =>
      active ? currentTheme.accent : 'transparent'};
   opacity: ${({ active }) => (active ? '1' : '0.4')};
   transition: background-color
         ${({ theme: { baseStyles } }) => baseStyles.hoverTransition},
      color ${({ theme: { baseStyles } }) => baseStyles.hoverTransition};
   &:hover {
      background-color: ${({ theme: { currentTheme } }) => currentTheme.accent};
      color: ${({ theme: { baseStyles } }) => baseStyles.bgSd};
   }
`

export const ClockButton = styled(Button)<ButtonProps>`
   position: relative;
   width: 370px;
   height: 370px;
   min-width: 1px;
   max-width: 100%;
   border-radius: 50%;
   padding: 20px;
   margin-bottom: 2rem;
   background-color: ${({ theme: { baseStyles } }) => baseStyles.bgSd};
   /* box-shadow: -70px -60px 120px 0 rgba(40, 45, 87, 1),
      60px 80px 120px 0 ${({ theme: { baseStyles } }) => baseStyles.bgSd}; */
   transition: transform
      ${({ theme: { baseStyles } }) => baseStyles.hoverTransition};
   &:hover {
      transform: scale(1.05);
   }
`

export const ResetButton = styled(Button)<ButtonProps>`
   opacity: ${({ resetVisible }) => (resetVisible ? '1' : '0')};
   position: absolute;
   top: 70%;
   right: 50%;
   transform: translate(50%, -50%);
   color: ${({ theme: { baseStyles } }) => baseStyles.lightGrey};
   font-size: 2rem;
   transition: opacity
      ${({ theme: { baseStyles } }) => baseStyles.hoverTransition};
   &:hover {
      text-decoration: underline;
   }
`

export const ApplyButton = styled(Button)<ButtonProps>`
   position: absolute;
   bottom: 0;
   right: 50%;
   transform: translate(50%, 50%);
   padding: 0.8em 2.7em;
   border-radius: 50px;
   font-size: 0.9em;
   font-weight: bold;
   color: ${({ theme: { baseStyles } }) => baseStyles.lightGrey};
   background-color: ${({ theme: { currentTheme } }) => currentTheme.accent};
   transition: background-color
      ${({ theme: { baseStyles } }) => baseStyles.hoverTransition};
   &:hover {
      background-color: black;
   }
`
