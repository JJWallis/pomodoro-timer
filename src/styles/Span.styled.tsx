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
      left: 57%;
      font-weight: bold;
      opacity: ${({ active }) => (active ? 1 : 0)};
      transform: translate(-50%, -50%)
         ${({ active }) => (active ? 'scale(1)' : 'scale(0)')};
      transition: opacity 0.4s ease, transform 0.3s ease;
   }

   ${({ fonts, active }) =>
      fonts &&
      css`
         &::before {
            content: 'Aa';
            left: 50%;
            opacity: 1;
            color: ${active ? 'white' : 'black'};
            transform: translate(-50%, -50%) scale(1);
            transition: color 0.4s ease;
         }
      `}
`
