import React, { FC } from 'react'
import { withToggler, toggle, isToggled } from './withToggler'

interface Props {
   id: string
   toggle: toggle
   isToggled: isToggled
}

const RadioButton: FC<Props> = ({ id }) => {
   return <input type="radio" name="theme-toggle" id={id} />
}

export default withToggler(RadioButton, { initialState: false })
