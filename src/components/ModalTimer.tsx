import React, { FC } from 'react'
import { withNumberInput } from './withControlledInput'

interface Props {
   label: string
   state: number
   updateState: (newNumber: string) => void
}

const ModalTimer: FC<Props> = ({ label, state, updateState }) => {
   return (
      <>
         <label htmlFor={label}>{label.replace('-', ' ')}</label>
         <input
            type="number"
            id={label}
            value={state}
            onChange={(e) => updateState(e.target.value)}
         />
      </>
   )
}

export default withNumberInput(ModalTimer)
