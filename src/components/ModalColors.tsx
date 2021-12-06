import React, { FC, useState } from 'react'
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

   return (
      <ModalSection heading="Color">
         <RadioButton id="theme-red" />
         <RadioButton id="theme-blue" />
         <RadioButton id="theme-purple" />
      </ModalSection>
   )
}

export default ModalColors
