import React, { FC } from 'react'
import { withToggler, toggle, isToggled } from './withToggler'

interface Props {
   id: string
   toggle: toggle
   isToggled: isToggled
}

const RadioButton: FC<Props> = ({ id, isToggled }) => {
   // custom hook to toggle the state + have one as true by default
   // props are in same scope as the component
   return (
      <input
         type="radio"
         name="theme-toggle"
         id={id}
         //  checked={onMount ? onMount : isToggled}
      />
   )
}

export default withToggler(RadioButton, { initialState: false })
