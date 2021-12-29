import styled, { css } from 'styled-components'

interface Props {
   fonts?: boolean
   active?: boolean
   tick?: string | null
}

export const RadioButtonContent = styled.span<Props>`
   &::before {
      content: url(${({ tick }) => tick});
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 44%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      opacity: ${({ active }) => (active ? 1 : 0)};
   }

   ${({ fonts, active }) =>
      fonts &&
      css`
         &::before {
            content: 'Aa';
            top: 45%;
            left: 50%;
            opacity: 1;
            color: ${active ? 'white' : 'black'};
         }
      `}
`
