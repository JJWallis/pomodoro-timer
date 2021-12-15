import React, { FC } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface Props {
   label: string
}

const ModalTimer: FC<Props> = ({ label }) => {
   const [state, setState] = useLocalStorage(label, '0')
   // local logic - validate against negative numbers

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
