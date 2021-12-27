import styled from 'styled-components'

interface ButtonProps {
   active?: boolean
   cross?: boolean
   apply?: boolean
   progressAmount?: number
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
   pointer-events: ${({ progressAmount }) =>
      progressAmount === 0 ? 'none' : 'all'};
   transition: transform
      ${({ theme: { baseStyles } }) => baseStyles.hoverTransition};
   &:hover {
      transform: scale(1.03);
   }
   @media (max-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      width: 340px;
      height: 340px;
   }
`

export const ResetButton = styled(Button)<ButtonProps>`
   opacity: ${({ progressAmount }) => (progressAmount === 0 ? '1' : '0')};
   pointer-events: ${({ progressAmount }) =>
      progressAmount === 0 ? 'all' : 'none'};
   position: absolute;
   top: 50%;
   right: 50%;
   transform: translate(55.5%, 413%);
   font-size: 1.2rem;
   font-weight: bold;
   text-transform: uppercase;
   letter-spacing: 10px;
   color: ${({ theme: { baseStyles } }) => baseStyles.lightGrey};
   &:hover {
      color: ${({ theme: { currentTheme } }) => currentTheme.accent};
   }
   @media (min-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      font-size: 1.2rem;
      transform: translate(55.5%, 463%);
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
   background-color: #f87070;
`
