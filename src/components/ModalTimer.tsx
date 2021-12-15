import React, { FC } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface Props {
   label: string
}

const ModalTimer: FC<Props> = ({ label }) => {
   const [state, setState] = useLocalStorage(label, '1')
   const updateState = (newState: number) => {
      if (newState > 0 && newState !== 0) setState(newState)
      // dispatch an action to update App state - match dispatch names with label prop
      // only once apply btn hit at bottom of modal

      // model state in obj in parent - custom hook to update (same method for each input)
      // diff state props to each input
   }

   return (
      <>
         <label htmlFor={label}>{label.replace('-', ' ')}</label>
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
