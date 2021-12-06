import React, { FC, ChangeEvent } from 'react'

interface Props {
   id: string
   checked: boolean
   handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: FC<Props> = ({ id, checked, handleChange }) => {
   // custom hook to toggle the state + have one as true by default
   // props are in same scope as the component

   return <input type="radio" name="theme-toggle" id={id} checked={checked} />
}

export default RadioButton
