import styled from 'styled-components'

export const ProgressMeter = styled.div`
   position: absolute;
   width: var(--progress-meter-width, 0);
   height: 10px;
   min-width: 10px;
   max-width: 100%;
   /* kyle does calc(100% - offset value to fit in parent bar) */
   border-radius: 5px;
   inset: 0;
   background-color: ${({ theme: { currentTheme } }) => currentTheme.accent};
`
