import styled, { css } from 'styled-components'

interface Props {
   fonts?: boolean
   active?: boolean
}

export const RadioButtonContent = styled.span<Props>`
   &::before {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
   }

   ${({ fonts, active }) =>
      fonts &&
      css`
         &::before {
            content: 'Aa';
            color: ${active ? 'white' : 'black'};
         }
      `}
`
