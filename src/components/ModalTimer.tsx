import React, { FC } from 'react'
import { withNumberInput } from './withNumberInput'

interface Props {
   label: string
   state: number
   updateState: (newNumber: string) => void
}

const ModalTimer: FC<Props> = ({ label, state, updateState }) => {
   return (
      <>
         <label htmlFor={label}>{label}</label>
         <input
            type="number"
            id={label}
            value={state}
            onChange={(e) => updateState(e.target.value)}
         />
      </>
   )
}

export default withNumberInput(ModalTimer, { defaultState: 0 })
