import React, { FC } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { ModalContextData } from '../context/modalContext'

interface Props {
   label: string
   val: number
   updateState: ModalContextData['updateState']
}

const ModalTimer: FC<Props> = ({ label }) => {
   const [state, setState] = useLocalStorage(label, '1')
   const updateState = (newState: number) => {
      if (newState > 0 && newState !== 0) setState(newState)
   }

   return (
      <>
         <label htmlFor={label}>{label}</label>
         <input
            type="number"
            id={label}
            value={state}
            onChange={(e) => updateState(Number(e.target.value))}
         />
      </>
   )
}

export default ModalTimer
