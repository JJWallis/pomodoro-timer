import React, { FC } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useNumberInput } from '../hooks/useNumberInput'

interface Props {
   label: string
}

const ModalTimer: FC<Props> = ({ label }) => {
   // const [state, setState] = useNumberInput()
   const [state, setState] = useLocalStorage(label, 0)

   return (
      <>
         <label htmlFor={label}>{label.replace('-', ' ')}</label>
         <input
            type="number"
            id={label}
            value={state}
            onChange={(e) => setState(Number(e.target.value))}
         />
      </>
   )
}

export default ModalTimer
