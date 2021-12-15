import React, { FC } from 'react'
import { useNumberInput } from '../hooks/useNumberInput'
import { withNumberInput } from './withControlledInput'

interface Props {
   label: string
   state: number
   updateState: (newNumber: string) => void
}

const ModalTimer: FC<Props> = ({ label, state, updateState }) => {
   // const [state, setState] = useNumberInput()

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
