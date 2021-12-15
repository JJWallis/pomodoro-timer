import styled from 'styled-components'

type ButtonProps = {
   active?: boolean
}

export const Button = styled.button.attrs<ButtonProps>(({ active }) => ({
   active,
}))<ButtonProps>`
   padding: 2em 1.5em;
   border-radius: 50px;
   color: ${({ theme: { baseStyles }, active }) =>
      active ? baseStyles.bgSd : baseStyles.lightGrey};
   background-color: ${({ theme: { currentTheme }, active }) =>
      active ? currentTheme.accent : 'transparent'};
`
