import React, { FC } from 'react'

interface Props {
   id: string
}

const RadioButton: FC<Props> = ({ id }) => {
   // custom hook to toggle the state + have one as true by default
   // props are in same scope as the component

   return (
      <input
         type="radio"
         name="theme-toggle"
         id={id}
         //  checked={checked}
         //  onChange={handleChange}
      />
   )
}

export default RadioButton
