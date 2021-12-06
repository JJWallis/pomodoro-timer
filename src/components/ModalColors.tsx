import React, { FC, useState, ChangeEvent } from 'react'
import ModalSection from './ModalSection'
import RadioButton from './RadioButton'

type State = {
   redBtn: boolean
   blueBtn: boolean
   purpleBtn: boolean
}

const ModalColors: FC = () => {
   const [checked, setChecked] = useState<State>({
      redBtn: true,
      blueBtn: false,
      purpleBtn: false,
   })

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const currentState = { ...checked }
      console.log(currentState)
      //   setChecked({ ...checked, [e.target.id]: e.target.checked })
   }

   return (
      <ModalSection heading="Color">
         <RadioButton
            id="theme-red"
            checked={checked.redBtn}
            handleChange={handleChange}
         />
         <RadioButton
            id="theme-blue"
            checked={checked.blueBtn}
            handleChange={handleChange}
         />
         <RadioButton
            id="theme-purple"
            checked={checked.purpleBtn}
            handleChange={handleChange}
         />
      </ModalSection>
   )
}

export default ModalColors
