import React, { FC } from 'react'
import { ModalContextData } from '../context/modalContext.interface'
import { Input } from '../styles/Input.styled'
import {
   NumberInputsContainer,
   InputContainer,
} from '../containers/Container.styled'
import { NumberInputLabel } from '../styles/Label.styled'

interface Props {
   label: string
   val: number
   updateState: ModalContextData['updateState']
}

const ModalTimer: FC<Props> = ({ label, val, updateState }) => {
   return (
      <NumberInputsContainer>
         <NumberInputLabel htmlFor={label}>
            {label.replace('b', ' b')}
         </NumberInputLabel>
         <InputContainer>
            <Input
               type="number"
               id={label}
               value={val}
               onChange={(e) => updateState(label, Number(e.target.value))}
            />
         </InputContainer>
      </NumberInputsContainer>
   )
}

export default ModalTimer
