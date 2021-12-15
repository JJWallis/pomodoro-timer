import React, { FC, memo } from 'react'
import ModalSection from './ModalSection'
import { FlexContainerModal } from '../containers/Container.styled'
import { Close } from '../styles/Icon.styled'

interface Props {
   toggle: () => void
}

const ModalHeader: FC<Props> = ({ toggle }) => {
   return (
      <ModalSection header>
         <FlexContainerModal header>
            <h3>Settings</h3>
            <button type="button" onClick={toggle}>
               <Close>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     // width="18"
                     // height="17"
                  >
                     <path
                        fill="#CED6FA"
                        fill-rule="evenodd"
                        d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
                     />
                  </svg>
               </Close>
            </button>
         </FlexContainerModal>
      </ModalSection>
   )
}

export default memo(ModalHeader)
