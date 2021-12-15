import React, { FC } from 'react'
import { ModalContextData } from '../context/modalContext'
import { Input } from '../styles/Input.styled'

interface Props {
   label: string
   val: number
   updateState: ModalContextData['updateState']
}

const ModalTimer: FC<Props> = ({ label, val, updateState }) => {
   return (
      <>
         <label htmlFor={label}>{label}</label>
         <Input
            type="number"
            id={label}
            value={val}
            onChange={(e) => updateState(label, Number(e.target.value))}
         />
      </>
   )
}

export default ModalTimer
