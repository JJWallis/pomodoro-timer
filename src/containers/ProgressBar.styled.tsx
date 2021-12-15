import styled from 'styled-components'

export const ProgressMeter = styled.div`
   opacity: 0;
   position: absolute;
   width: 100%;
   height: 10px;
   border-radius: 5px;
   inset: 0;
   background-color: ${({ theme: { currentTheme } }) => currentTheme.accent};
   transform: rotate(-90deg);
`
