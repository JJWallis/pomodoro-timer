import React, { FC } from 'react'
import { withNumberInput } from './withControlledInput'
import { useRender } from '../hooks/useRender'

interface Props {
   label: string
   state: number
   updateState: (newNumber: string) => void
}

const ModalTimer: FC<Props> = ({ label, state, updateState }) => {
   useRender()
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
