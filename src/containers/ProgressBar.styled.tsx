import styled from 'styled-components'

interface Props {
   progressAmount?: number
   // make required
}

export const ProgressMeter = styled.div<Props>`
   position: absolute;
   width: calc(
      ${({ progressAmount }) => (progressAmount ? progressAmount : 0)} * 1%
   );
   height: 10px;
   min-width: 10px;
   max-width: 100%;
   /* kyle does calc(100% - offset value to fit in parent bar) */
   border-radius: 5px;
   inset: 0;
   background-color: ${({ theme: { currentTheme } }) => currentTheme.accent};
`
