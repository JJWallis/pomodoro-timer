import styled from 'styled-components'

interface Props {
   radio?: boolean
}

export const InputReset = styled.input<Props>`
   outline: none;
   border: none;
   background-color: transparent;
   ${({ radio }) => radio && `opacity: 0;`}
`

export const Input = styled(InputReset)<Props>`
   width: 100%;
   border-radius: 10px;
   padding: 0.8rem 1rem;
   font-weight: bold;
   font-size: 0.9rem;
   background-color: ${({ theme: { baseStyles } }) => baseStyles.lightGrey};
   color: ${({ theme: { baseStyles } }) => baseStyles.bgSd};
   appearance: textfield;
   pointer-events: none;
   @media (min-width: ${({ theme: { baseStyles } }) =>
         baseStyles.mediaBreakpoint}) {
      padding: 1rem;
   }
`
