import styled, { css } from 'styled-components'

interface RadioButtonLabelProps {
   fonts?: boolean
   active?: boolean
   themeBgColor?: {
      identifier: string
      accent: string
   }
}

export const NumberInputLabel = styled.label`
   font-size: 0.8rem;
   font-weight: bold;
   color: ${({ theme: { baseStyles } }) => baseStyles.darkGrey};
`

export const RadioButtonLabel = styled.label.attrs<RadioButtonLabelProps>(
   ({ active }) => ({
      active,
   })
)<RadioButtonLabelProps>`
   cursor: pointer;
   position: relative;
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: ${({ themeBgColor }) => themeBgColor?.accent};
   &::before {
      content: '';
      display: block;
      width: 50px;
      height: 50px;
      border: 1px solid ${({ theme: { baseStyles } }) => baseStyles.lightGrey};
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.8);
      opacity: 0;
      transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
   }
   &:hover::before {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
   }

   ${({ fonts, active, theme }) =>
      fonts &&
      css`
         background-color: ${active ? 'black' : theme.baseStyles.lightGrey};
         transition: background-color 0.4s ease;
      `}
`
