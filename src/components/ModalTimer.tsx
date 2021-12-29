import React, { FC } from 'react'
import { useModalContext } from '../hooks/useModalContext'
import { Input } from '../styles/Input.styled'
import {
   NumberInputsContainer,
   InputContainer,
} from '../containers/Container.styled'
import { NumberInputLabel } from '../styles/Label.styled'
import { Arrow } from '../styles/Icon.styled'

interface Props {
   label: string
   val: number
}

const ModalTimer: FC<Props> = ({ label, val }) => {
   const { incremenet, decremement, updateState } = useModalContext()

   return (
      <NumberInputsContainer>
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
               xmlns="http://www.w3.org/2000/svg"
               width="14"
               height="7"
               focusable="true"
               aria-label="Increase timer amount by one"
               onClick={() => incremenet(label)}
            >
               <path d="M1 6l6-4 6 4" />
            </Arrow>
            <Arrow
               downwards
               xmlns="http://www.w3.org/2000/svg"
               width="14"
               height="7"
               focusable="true"
               aria-label="Decrease timer amount by one"
               onClick={() => decremement(label)}
            >
               <path d="M1 1l6 4 6-4" />
            </Arrow>
         </InputContainer>
      </NumberInputsContainer>
   )
}

export default ModalTimer
