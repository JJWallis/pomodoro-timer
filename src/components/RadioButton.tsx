import React, { FC } from 'react'
import { withToggler } from './withToggler'

interface Props {
   id: string
}

const RadioButton: FC<Props> = ({ id }) => {
   return <input type="radio" name="theme-toggle" id={id} />
}

export default withToggler(RadioButton, { initialState: false })
