import styled, { css } from 'styled-components'

interface RadioButtonLabelProps {
   fonts?: boolean
   active?: boolean
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
   outline: 1px solid black;
   cursor: pointer;
   position: relative;
   background-color: ${({ active, theme }) =>
      active ? theme.currentTheme.accent : 'transparent'};

   ${({ fonts }) =>
      fonts &&
      css`
         background-color: ${({ theme: { baseStyles } }) =>
            baseStyles.lightGrey};
      `}
`
