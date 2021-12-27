import styled from 'styled-components'

const InputRest = styled.input`
   outline: none;
   border: none;
   background-color: transparent;
`

export const Input = styled(InputRest)`
   width: 100%;
   border-radius: 10px;
   padding: 0.8rem 1rem;
   font-weight: bold;
   font-size: 0.9rem;
   background-color: ${({ theme: { baseStyles } }) => baseStyles.lightGrey};
   color: ${({ theme: { baseStyles } }) => baseStyles.bgSd};
   appearance: textfield;
   pointer-events: none;
`
