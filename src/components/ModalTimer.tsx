import React, { FC } from 'react'
import { useModalContext } from '../hooks/useModalContext'
import { Input } from '../styles/Input.styled'
import { InputContainer } from '../containers/InputContainer.styled'
import { NumberInputLabel } from '../styles/Label.styled'
import { Arrow } from '../styles/Icon.styled'
import { GridItemModal } from '../containers/GridContainerModal.styled'

interface Props {
   label: string
   val: number
}

const ModalTimer: FC<Props> = ({ label, val }) => {
   const { incremenet, decremement, updateState } = useModalContext()

   return (
      <GridItemModal>
         <NumberInputLabel htmlFor={label}>
            {label.replace('b', ' b')}
         </NumberInputLabel>
         <InputContainer>
            <Input
               readOnly
               type="number"
               id={label}
               value={val}
               onChange={(e) => updateState(label, Number(e.target.value))}
            />
            <Arrow
               width="14"
               height="7"
               focusable="true"
               aria-label="Upwards facing arrow icon, increasing corresponding timer amount by one"
               onClick={() => incremenet(label)}
            >
               <path d="M1 6l6-4 6 4" />
            </Arrow>
            <Arrow
               downwards
               width="14"
               height="7"
               focusable="true"
               aria-label="Downwards facing arrow icon, descreasing corresponding timer amount by one"
               onClick={() => decremement(label)}
            >
               <path d="M1 1l6 4 6-4" />
            </Arrow>
         </InputContainer>
      </GridItemModal>
   )
}

export default ModalTimer
